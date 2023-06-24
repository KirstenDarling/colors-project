import type { RequestHandler } from 'express';
export interface SignatureMiddlewareOptions {
    secret: string;
    parseBody?: boolean;
    respondOnError?: boolean;
}
export declare function requireSignedRequest(options: SignatureMiddlewareOptions): RequestHandler;
