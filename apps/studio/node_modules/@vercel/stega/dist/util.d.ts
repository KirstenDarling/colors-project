/**
 * Separated clean string and encoded string
 */
interface SplitResult {
    /** The original string with encoded substring removed */
    cleaned: string;
    /** The encoded substring from the original string */
    encoded: string;
}
/**
 * Splits out encoded data from a string, if any is found
 * @param original - The original string
 * @returns The cleaned string and encoded data, separately
 */
export declare function vercelStegaSplit(original: string): SplitResult;
export {};
