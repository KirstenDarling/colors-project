"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireSignedRequest = void 0;
const _1 = require(".");
const signature_1 = require("./signature");
function requireSignedRequest(options) {
    const parseBody = typeof options.parseBody === 'undefined' ? true : options.parseBody;
    const respondOnError = typeof options.respondOnError === 'undefined' ? true : options.respondOnError;
    return function ensureSignedRequest(request, response, next) {
        try {
            (0, signature_1.assertValidRequest)(request, options.secret);
            if (parseBody && typeof request.body === 'string') {
                request.body = JSON.parse(request.body);
            }
            next();
        }
        catch (err) {
            if (!respondOnError || !(0, _1.isSignatureError)(err)) {
                next(err);
                return;
            }
            response.status(err.statusCode).json({ message: err.message });
        }
    };
}
exports.requireSignedRequest = requireSignedRequest;
//# sourceMappingURL=middleware.js.map