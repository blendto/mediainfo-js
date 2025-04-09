import { Stream } from 'stream';

type MediaInfoInput = URL | string | Buffer | Stream;
type MediaInfoData = any;
declare class MediaInfo {
    private lib;
    private libConstructor;
    constructor(mediaInfoWasmLib: any);
    instantiateLib(): Promise<void>;
    getInfo(input: MediaInfoInput): Promise<MediaInfoData>;
    private static normalizeInput;
    private static getDataStream;
    private getMediaInfoData;
}

export { MediaInfo, type MediaInfoData, type MediaInfoInput };
