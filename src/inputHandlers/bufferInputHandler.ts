import { MediaInfoInputError } from '../errors';
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
import { Readable } from 'stream';
export class BufferInputHandler implements IMediaInfoInputHandler {
  public openStream(input: Buffer): Readable {
    try {
      const stream = Readable.from(input);
      if (stream.errored) {
        throw stream.errored;
      }
      return stream;
    } catch (err) {
      throw new MediaInfoInputError('Could not open buffer for read stream', input, err);
    }
  }
}
