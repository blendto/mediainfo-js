/// <reference types="node" />
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
import { Stream } from 'stream';
export declare class StreamInputHandler implements IMediaInfoInputHandler {
    openStream(input: Stream): Stream;
}
