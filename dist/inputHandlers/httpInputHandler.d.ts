/// <reference types="node" />
import { Duplex } from 'stream';
import { IMediaInfoInputHandler } from './IMediaInfoInputHandler';
export declare class HttpInputHandler implements IMediaInfoInputHandler {
    openStream(input: string | URL): Duplex;
}
