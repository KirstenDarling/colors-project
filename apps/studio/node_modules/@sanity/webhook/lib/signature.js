"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSignatureHeader = exports.encodeSignatureHeader = exports.isValidRequest = exports.assertValidRequest = exports.isValidSignature = exports.assertValidSignature = exports.SIGNATURE_HEADER_NAME = void 0;
const tslib_1 = require("tslib");
const crypto_1 = (0, tslib_1.__importDefault)(require("crypto"));
const base64url_1 = (0, tslib_1.__importDefault)(require("base64url"));
const errors_1 = require("./errors");
/**
 * We didn't send signed payloads prior to 2021 (2021-01-01T00:00:00.000Z)
 */
const MINIMUM_TIMESTAMP = 1609459200000;
const SIGNATURE_HEADER_REGEX = /^t=(\d+)[, ]+v1=([^, ]+)$/;
exports.SIGNATURE_HEADER_NAME = 'sanity-webhook-signature';
function assertValidSignature(stringifiedPayload, signature, secret) {
    const { timestamp } = decodeSignatureHeader(signature);
    const encoded = encodeSignatureHeader(stringifiedPayload, timestamp, secret);
    if (signature !== encoded) {
        throw new errors_1.WebhookSignatureValueError('Signature is invalid');
    }
}
exports.assertValidSignature = assertValidSignature;
function isValidSignature(stringifiedPayload, signature, secret) {
    try {
        assertValidSignature(stringifiedPayload, signature, secret);
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.isValidSignature = isValidSignature;
function assertValidRequest(request, secret) {
    const signature = request.headers[exports.SIGNATURE_HEADER_NAME];
    if (Array.isArray(signature)) {
        throw new errors_1.WebhookSignatureFormatError('Multiple signature headers received');
    }
    if (typeof signature !== 'string') {
        throw new errors_1.WebhookSignatureValueError('Request contained no signature header');
    }
    if (typeof request.body === 'undefined') {
        throw new errors_1.WebhookSignatureFormatError('Request contained no parsed request body');
    }
    if (typeof request.body === 'string' || Buffer.isBuffer(request.body)) {
        assertValidSignature(request.body.toString('utf8'), signature, secret);
    }
    else {
        throw new Error('[@sanity/webhook] `request.body` was not a string/buffer - this can lead to invalid signatures. See the [migration docs](https://github.com/sanity-io/webhook-toolkit#from-parsed-to-unparsed-body) for details on how to fix this.');
    }
}
exports.assertValidRequest = assertValidRequest;
function isValidRequest(request, secret) {
    try {
        assertValidRequest(request, secret);
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.isValidRequest = isValidRequest;
function encodeSignatureHeader(stringifiedPayload, timestamp, secret) {
    const signature = createHS256Signature(stringifiedPayload, timestamp, secret);
    return `t=${timestamp},v1=${signature}`;
}
exports.encodeSignatureHeader = encodeSignatureHeader;
function decodeSignatureHeader(signaturePayload) {
    if (!signaturePayload) {
        throw new errors_1.WebhookSignatureFormatError('Missing or empty signature header');
    }
    const [, timestamp, hashedPayload] = signaturePayload.trim().match(SIGNATURE_HEADER_REGEX) || [];
    if (!timestamp || !hashedPayload) {
        throw new errors_1.WebhookSignatureFormatError('Invalid signature payload format');
    }
    return {
        timestamp: parseInt(timestamp, 10),
        hashedPayload,
    };
}
exports.decodeSignatureHeader = decodeSignatureHeader;
function createHS256Signature(stringifiedPayload, timestamp, secret) {
    if (!secret || typeof secret !== 'string') {
        throw new errors_1.WebhookSignatureFormatError('Invalid secret provided');
    }
    if (!stringifiedPayload) {
        throw new errors_1.WebhookSignatureFormatError('Can not create signature for empty payload');
    }
    if (typeof stringifiedPayload !== 'string') {
        throw new errors_1.WebhookSignatureFormatError('Payload must be a JSON-encoded string');
    }
    if (typeof timestamp !== 'number' || isNaN(timestamp) || timestamp < MINIMUM_TIMESTAMP) {
        throw new errors_1.WebhookSignatureFormatError('Invalid signature timestamp, must be a unix timestamp with millisecond precision');
    }
    const hmac = crypto_1.default.createHmac('sha256', secret);
    const signaturePayload = `${timestamp}.${stringifiedPayload}`;
    const signature = hmac.update(signaturePayload, 'utf8').digest();
    return (0, base64url_1.default)(signature);
}
//# sourceMappingURL=signature.js.map