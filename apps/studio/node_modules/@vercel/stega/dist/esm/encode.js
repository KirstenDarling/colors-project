import { HEX_DIGIT_MAP } from './map';
/**
 * Encodes JSON as a hidden string
 * @param json - The JSON data to encode
 * @returns The hidden string
 */
export function vercelStegaEncode(json) {
    const string = JSON.stringify(json);
    return Array.from(string)
        .map((character) => {
        const charCode = character.charCodeAt(0);
        if (charCode > 255) {
            throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${string} on character ${character} (${charCode})`);
        }
        return Array.from(charCode.toString(16).padStart(2, '0'))
            .map((hex) => String.fromCodePoint(HEX_DIGIT_MAP[hex]))
            .join('');
    })
        .join('');
}
function isDate(string) {
    return Boolean(Date.parse(string));
}
function isUrl(string) {
    try {
        new URL(string);
    }
    catch {
        return false;
    }
    return true;
}
/**
 * Adds an encoded JSON object to a string as hidden characters
 * @param string - The string the JSON will be added to
 * @param json - The JSON to add to the string
 * @param skip - Whether to skip encoding (default: "auto")
 */
export function vercelStegaCombine(string, json, skip = 'auto') {
    if (skip === true)
        return string;
    if (skip === 'auto' && (isDate(string) || isUrl(string)))
        return string;
    return `${string}${vercelStegaEncode(json)}`;
}
