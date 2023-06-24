export declare const VERCEL_STEGA_REGEX: RegExp;
/**
 * Decodes the first hidden string that's found in the source string back into its original value
 * @param source - The source string with encoded data
 * @returns The decoded JSON value
 */
export declare function vercelStegaDecode<T>(source: string): T | undefined;
/**
 * Decodes every hidden string that's found in the source string back into their original values
 * @param source - The source string with encoded data
 * @returns The decoded JSON values
 */
export declare function vercelStegaDecodeAll<T>(source: string): T[];
