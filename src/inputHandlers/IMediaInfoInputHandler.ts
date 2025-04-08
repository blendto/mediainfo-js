import { MediaInfoInput } from 'src';
import { Stream } from 'stream';

export interface IMediaInfoInputHandler {
  openStream(input: MediaInfoInput): Stream
}