export declare type WebhookSignatureError = WebhookSignatureValueError | WebhookSignatureFormatError;
export declare class WebhookSignatureValueError extends Error {
    type: string;
    statusCode: number;
}
export declare class WebhookSignatureFormatError extends Error {
    type: string;
    statusCode: number;
}
export declare function isSignatureError(error: unknown): error is WebhookSignatureError;
