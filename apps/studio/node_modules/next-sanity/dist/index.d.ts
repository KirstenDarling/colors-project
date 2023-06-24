import {createClient as createClient_2} from '@sanity/preview-kit/client'
import {default as groq} from 'groq'
import {PreviewKitClientConfig} from '@sanity/preview-kit/client'

/** @public */
export declare interface ClientConfig
  extends Omit<PreviewKitClientConfig, 'studioUrl' | 'encodeSourceMap'> {
  /**
   * Where the Studio is hosted.
   * If it's embedded in the app, use the base path for example `/studio`.
   * Otherwise provide the full URL to where the Studio is hosted, for example: `https://blog.sanity.studio`.
   * @defaultValue process.env.NEXT_PUBLIC_SANITY_STUDIO_URL
   * @alpha
   */
  studioUrl?: PreviewKitClientConfig['studioUrl']
  /**
   * If there's no `studioUrl` then the default value is `none` and the normal `@sanity/client` will be used. If `studioUrl` is set, then it's `auto` by default.
   * @defaultValue process.env.MEXT_PUBLIC_SANITY_SOURCE_MAP || studioUrl ? 'auto' : 'none'
   * @alpha
   */
  encodeSourceMap?: PreviewKitClientConfig['encodeSourceMap']
}

/**
 * @public
 */
export declare function createClient(config: ClientConfig): SanityClient

export {groq}

/** @public */
export declare type SanityClient = ReturnType<typeof createClient_2>

export * from '@sanity/preview-kit/client'

export {}
