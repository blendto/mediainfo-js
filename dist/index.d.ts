export type MediaInfoInput = URL | string;
export type MediaInfoData = any;
export declare class MediaInfo {
    private lib;
    instantiateLib(): Promise<void>;
    getInfo(input: MediaInfoInput): Promise<MediaInfoData>;
    private static normalizeInput;
    private static getDataStream;
    private getMediaInfoData;
}
