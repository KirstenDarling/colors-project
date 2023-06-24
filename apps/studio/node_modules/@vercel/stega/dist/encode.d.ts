/**
 * Encodes JSON as a hidden string
 * @param json - The JSON data to encode
 * @returns The hidden string
 */
export declare function vercelStegaEncode<T>(json: T): string;
type SkipValue = 'auto' | boolean;
/**
 * Adds an encoded JSON object to a string as hidden characters
 * @param string - The string the JSON will be added to
 * @param json - The JSON to add to the string
 * @param skip - Whether to skip encoding (default: "auto")
 */
export declare function vercelStegaCombine<T>(string: string, json: T, skip?: SkipValue): string;
export {};
