/// <reference types="react" />

import type {Config} from 'sanity'
import {JSX as JSX_2} from 'react'
import type {SingleWorkspace} from 'sanity'
import type {StudioProps} from 'sanity'

/**
 * @alpha
 * @deprecated Will be removed in the next major release
 */
export declare function NextStudioLoading(props: NextStudioLoadingProps): JSX_2.Element

/**
 * @alpha
 * @deprecated Will be removed in the next major release
 */
export declare interface NextStudioLoadingProps extends Pick<StudioProps, 'scheme'> {
  /**
   * If your Studio Config has a custom theme you can pass it here to ensure the loading screen matches your theme.
   */
  config?: Config | Required<Pick<SingleWorkspace, 'theme'>>
  /**
   * Render the <noscript> tag
   * @defaultValue true
   * @alpha
   */
  unstable__noScript?: boolean
}

export {}
