import { createClient as createClient$1 } from '@sanity/preview-kit/client';
export { default as groq } from 'groq';
function createClient(config) {
  let {
    // eslint-disable-next-line prefer-const, no-process-env
    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    encodeSourceMap = studioUrl ? "auto" : false
  } = config;
  if (encodeSourceMap === "auto" && process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    encodeSourceMap = true;
  }
  return createClient$1({
    ...config,
    studioUrl,
    encodeSourceMap
  });
}
export { createClient };
//# sourceMappingURL=index.js.map
