import { MediaInfoInputError } from '../errors';
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
import { Stream } from 'stream';
export class StreamInputHandler implements IMediaInfoInputHandler {
  public openStream(input: Stream): Stream {
    try {
      return input;
    } catch (err) {
      throw new MediaInfoInputError('Could not open read stream to the file', input, err);
    }
  }
}
