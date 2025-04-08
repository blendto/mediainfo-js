/// <reference types="node" />
/// <reference types="node" />
import { ReadStream } from 'fs';
import { Duplex } from 'stream';
export interface IMediaInfoInputHandler {
    openStream(input: string): ReadStream | Duplex;
}
