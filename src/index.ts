import { Stream } from 'stream';
import { MediaInfoError } from './errors';
import { InputHandlerFactory } from './inputHandlers/inputHandlerFactory';
import * as MediaInfoLib from '../lib/MediaInfoWasm';

export type MediaInfoInput = URL | string | Buffer | Stream;

export type MediaInfoData = any; // maybe we'll add concrete types in future

type ErrorHandlerFunction = (reason: any) => void;

export class MediaInfo {
  private lib;

  private wasmFileLocator?: () => string;

  constructor(params?: { wasmFileLocator?: () => string }) {
    this.wasmFileLocator = params?.wasmFileLocator;
  }

  public async instantiateLib() {
    try {
      this.lib = await MediaInfoLib({ locateFile: this.wasmFileLocator });
    } catch (e) {
      throw new MediaInfoError('Failed to instantiate MediaInfoLib', e);
    }
  }

  public async getInfo(input: MediaInfoInput): Promise<MediaInfoData> {
    if (!this.lib) {
      await this.instantiateLib();
    }

    try {
      return await new Promise((resolve, reject) => {
        const normalizedInput = MediaInfo.normalizeInput(input);
        MediaInfo.getDataStream(normalizedInput, reject)
          .then(stream => this.getMediaInfoData(stream))
          .then(resolve)
          .catch(reject);
      });
    } catch (e) {
      throw new MediaInfoError('Failed to read media data', e);
    }
  }

  private static normalizeInput(input: MediaInfoInput): string {
    let normalizedInput;
    if (input instanceof URL) {
      normalizedInput = input.toString();
    } else {
      normalizedInput = input;
    }

    return normalizedInput;
  }

  private static async getDataStream(input: string, errorHandler: ErrorHandlerFunction): Promise<Stream> {
    const inputHandler = InputHandlerFactory.createInputHandler(input);
    const stream = inputHandler.openStream(input);
    stream.on('error', errorHandler);

    return stream;
  }

  private getMediaInfoData(stream): Promise<MediaInfoData> {
    return new Promise(async resolve => {
      const mediaInfoInstance = new this.lib.MediaInfo();

      mediaInfoInstance.Open_Buffer_Init(-1, 0);

      stream.on('data', (chunk) => {
        mediaInfoInstance.Open_Buffer_Continue(chunk);
        mediaInfoInstance.Open_Buffer_Continue_Goto_Get();
      });

      stream.on('end', () => {
        mediaInfoInstance.Open_Buffer_Finalize();
        mediaInfoInstance.Option('Output', 'JSON');
        mediaInfoInstance.Option('Complete');
        const output: any = JSON.parse(mediaInfoInstance.Inform());
        mediaInfoInstance.Close();
        mediaInfoInstance.delete();
        resolve(output);
      });
    });
  }
}