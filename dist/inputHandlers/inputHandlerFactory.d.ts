import { MediaInfoInput } from 'src';
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
export declare class InputHandlerFactory {
    static createInputHandler(input: MediaInfoInput): IMediaInfoInputHandler;
}
