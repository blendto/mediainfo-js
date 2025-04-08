import { MediaInfoInput } from 'src';
import { BufferInputHandler } from './bufferInputHandler';
import { FileInputHandler } from './fileInputHandler';
import { HttpInputHandler } from './httpInputHandler';
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
import { StreamInputHandler } from './streamInputHandler';
import { Stream } from 'stream';

export class InputHandlerFactory {
  public static createInputHandler(input: MediaInfoInput): IMediaInfoInputHandler {
    if (input instanceof Stream) {
      return new StreamInputHandler();
    } else if (Buffer.isBuffer(input)) {
      return new BufferInputHandler();
    } else if (typeof input === 'string' && input.toLowerCase().startsWith('http')) {
      return new HttpInputHandler();
    } else {
      return new FileInputHandler();
    }
  }
}