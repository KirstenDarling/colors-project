"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vercelStegaDecodeAll = exports.vercelStegaDecode = exports.VERCEL_STEGA_REGEX = void 0;
const map_1 = require("./map");
const REVERSE_HEX_DIGIT_MAP = Object.fromEntries(Object.entries(map_1.HEX_DIGIT_MAP).map((x) => x.reverse()));
const HEX_CHARS = `${Object.values(map_1.HEX_DIGIT_MAP)
    .map((x) => `\\u{${x.toString(16)}}`)
    .join('')}`;
exports.VERCEL_STEGA_REGEX = new RegExp(`(?:[${HEX_CHARS}]{2})+`, 'gu');
/**
 * Decodes the first hidden string that's found in the source string back into its original value
 * @param source - The source string with encoded data
 * @returns The decoded JSON value
 */
function vercelStegaDecode(source) {
    const matches = source.match(exports.VERCEL_STEGA_REGEX);
    if (!matches)
        return;
    return decode(matches[0], true)[0];
}
exports.vercelStegaDecode = vercelStegaDecode;
/**
 * Decodes every hidden string that's found in the source string back into their original values
 * @param source - The source string with encoded data
 * @returns The decoded JSON values
 */
function vercelStegaDecodeAll(source) {
    const matches = source.match(exports.VERCEL_STEGA_REGEX);
    if (!matches)
        return;
    return matches.map((match) => decode(match)).flat();
}
exports.vercelStegaDecodeAll = vercelStegaDecodeAll;
function decode(encodedString, firstOnly = false) {
    var _a;
    const encoded = Array.from(encodedString);
    if (encoded.length % 2) {
        throw new Error(`Invalid encoded text length. Expected length to be even, received: ${encoded.length}`);
    }
    const chars = [];
    for (let i = encoded.length * 0.5; i--;) {
        const hex = `${REVERSE_HEX_DIGIT_MAP[encoded[i * 2].codePointAt(0)]}${REVERSE_HEX_DIGIT_MAP[encoded[i * 2 + 1].codePointAt(0)]}`;
        chars.unshift(String.fromCharCode(parseInt(hex, 16)));
    }
    const results = [];
    const queue = [chars.join('')];
    let breakLimit = 10;
    while (queue.length) {
        const string = queue.shift();
        try {
            results.push(JSON.parse(string));
            if (firstOnly)
                return results;
        }
        catch (error) {
            if (!breakLimit--)
                throw error;
            const position = +((_a = error.message.match(/\sposition\s(\d+)$/)) === null || _a === void 0 ? void 0 : _a[1]);
            if (!position)
                throw error;
            queue.unshift(string.substring(0, position), string.substring(position));
        }
    }
    return results;
}
