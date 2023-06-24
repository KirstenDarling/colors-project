import type { DecodedSignature, ConnectLikeRequest } from './types';
export declare const SIGNATURE_HEADER_NAME = "sanity-webhook-signature";
export declare function assertValidSignature(stringifiedPayload: string, signature: string, secret: string): void;
export declare function isValidSignature(stringifiedPayload: string, signature: string, secret: string): boolean;
export declare function assertValidRequest(request: ConnectLikeRequest, secret: string): void;
export declare function isValidRequest(request: ConnectLikeRequest, secret: string): boolean;
export declare function encodeSignatureHeader(stringifiedPayload: string, timestamp: number, secret: string): string;
export declare function decodeSignatureHeader(signaturePayload: string): DecodedSignature;
