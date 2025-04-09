/// <reference types="node" />
/// <reference types="node" />
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
import { Readable } from 'stream';
export declare class BufferInputHandler implements IMediaInfoInputHandler {
    openStream(input: Buffer): Readable;
}
