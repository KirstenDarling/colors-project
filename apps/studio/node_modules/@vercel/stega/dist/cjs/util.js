"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vercelStegaSplit = void 0;
const decode_1 = require("./decode");
/**
 * Splits out encoded data from a string, if any is found
 * @param original - The original string
 * @returns The cleaned string and encoded data, separately
 */
function vercelStegaSplit(original) {
    var _a;
    return {
        cleaned: original.replace(decode_1.VERCEL_STEGA_REGEX, ''),
        encoded: ((_a = original.match(decode_1.VERCEL_STEGA_REGEX)) === null || _a === void 0 ? void 0 : _a[0]) || '',
    };
}
exports.vercelStegaSplit = vercelStegaSplit;
