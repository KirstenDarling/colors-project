"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSignatureError = exports.WebhookSignatureFormatError = exports.WebhookSignatureValueError = void 0;
class WebhookSignatureValueError extends Error {
    constructor() {
        super(...arguments);
        this.type = 'WebhookSignatureValueError';
        this.statusCode = 401;
    }
}
exports.WebhookSignatureValueError = WebhookSignatureValueError;
class WebhookSignatureFormatError extends Error {
    constructor() {
        super(...arguments);
        this.type = 'WebhookSignatureFormatError';
        this.statusCode = 400;
    }
}
exports.WebhookSignatureFormatError = WebhookSignatureFormatError;
function isSignatureError(error) {
    return (typeof error === 'object' &&
        error !== null &&
        'type' in error &&
        ['WebhookSignatureValueError', 'WebhookSignatureFormatError'].includes(error.type));
}
exports.isSignatureError = isSignatureError;
//# sourceMappingURL=errors.js.map