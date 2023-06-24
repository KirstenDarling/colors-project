'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var client = require('@sanity/preview-kit/client');
var groq = require('groq');
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}
var groq__default = /*#__PURE__*/_interopDefaultCompat(groq);
function createClient(config) {
  let {
    // eslint-disable-next-line prefer-const, no-process-env
    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    encodeSourceMap = studioUrl ? "auto" : false
  } = config;
  if (encodeSourceMap === "auto" && process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    encodeSourceMap = true;
  }
  return client.createClient({
    ...config,
    studioUrl,
    encodeSourceMap
  });
}
Object.defineProperty(exports, 'groq', {
  enumerable: true,
  get: function () {
    return groq__default.default;
  }
});
exports.createClient = createClient;
//# sourceMappingURL=index.cjs.map
