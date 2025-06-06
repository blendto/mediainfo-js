/// <reference types="node" />
/// <reference types="node" />
import { Stream } from 'stream';
export type MediaInfoInput = URL | string | Buffer | Stream;
export type MediaInfoData = any;
export declare class MediaInfo {
    private lib;
    private wasmFileLocator?;
    constructor(params?: {
        wasmFileLocator?: () => string;
    });
    instantiateLib(): Promise<void>;
    getInfo(input: MediaInfoInput): Promise<MediaInfoData>;
    private static normalizeInput;
    private static getDataStream;
    private getMediaInfoData;
}
