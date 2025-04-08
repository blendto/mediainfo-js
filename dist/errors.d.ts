import { MediaInfoInput } from 'src';
export declare class MediaInfoError extends Error {
    readonly message: string;
    readonly higherOrderError: any;
    constructor(message: string, higherOrderError: any);
}
export declare class MediaInfoInputError extends MediaInfoError {
    readonly message: string;
    readonly input: MediaInfoInput;
    readonly higherOrderError: any;
    constructor(message: string, input: MediaInfoInput, higherOrderError?: any);
}
