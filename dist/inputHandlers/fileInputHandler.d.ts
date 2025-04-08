/// <reference types="node" />
import { ReadStream } from 'fs';
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
export declare class FileInputHandler implements IMediaInfoInputHandler {
    openStream(input: string): ReadStream;
}
