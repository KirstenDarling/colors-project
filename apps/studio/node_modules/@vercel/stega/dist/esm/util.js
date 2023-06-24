import { VERCEL_STEGA_REGEX } from './decode';
/**
 * Splits out encoded data from a string, if any is found
 * @param original - The original string
 * @returns The cleaned string and encoded data, separately
 */
export function vercelStegaSplit(original) {
    var _a;
    return {
        cleaned: original.replace(VERCEL_STEGA_REGEX, ''),
        encoded: ((_a = original.match(VERCEL_STEGA_REGEX)) === null || _a === void 0 ? void 0 : _a[0]) || '',
    };
}
