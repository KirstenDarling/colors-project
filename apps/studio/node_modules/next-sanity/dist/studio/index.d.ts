/// <reference types="react" />

import type {Config} from 'sanity'
import {JSX as JSX_2} from 'react'
import {MemoExoticComponent} from 'react'
import {ReactNode} from 'react'
import type {SingleWorkspace} from 'sanity'
import {StudioProps} from 'sanity'
import type {StudioTheme} from 'sanity'
import type {ThemeColorSchemeKey} from '@sanity/ui'

/**
 * Override how the Studio renders by passing children.
 * This is useful for advanced use cases where you're using StudioProvider and StudioLayout instead of Studio:
 * ```
 * import {StudioProvider, StudioLayout} from 'sanity'
 * import {NextStudio} from 'next-sanity/studio'
 * <NextStudio config={config}>
 *   <StudioProvider config={config}>
 *     <CustomComponentThatUsesContextFromStudioProvider />
 *     <StudioLayout />
 *   </StudioProvider>
 * </NextStudio>
 * ```
 * @beta
 */
export declare const NextStudio: MemoExoticComponent<
  ({
    children,
    config,
    unstable__noScript,
    unstable__fastRender,
    scheme,
    ...props
  }: NextStudioProps) => JSX_2.Element
>

/** @alpha */
export declare function NextStudioClientOnly({
  children,
  fallback,
}: NextStudioClientOnlyProps): JSX_2.Element

/** @alpha */
export declare type NextStudioClientOnlyProps = {
  children: ReactNode
  fallback: ReactNode
}

/** @alpha */
export declare const NextStudioLayout: MemoExoticComponent<
  ({children, config, scheme}: NextStudioLayoutProps) => JSX_2.Element
>

/** @alpha */
export declare interface NextStudioLayoutProps extends Pick<StudioProps, 'config' | 'scheme'> {
  children: React.ReactNode
}

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

/** @alpha */
export declare const NextStudioNoScript: () => JSX_2.Element

/** @beta */
export declare interface NextStudioProps extends StudioProps {
  children?: React.ReactNode
  /**
   * Render the <noscript> tag
   * @defaultValue true
   * @alpha
   */
  unstable__noScript?: boolean
  /**
   * Render in a faster mode that requires `styled-components` SSR to be setup.
   * @defaultValue false
   * @alpha
   */
  unstable__fastRender?: boolean
}

/** @alpha */
export declare function usePrefersColorScheme(): ThemeColorSchemeKey

/** @alpha */
export declare function useTheme(
  config?: Config | Required<Pick<SingleWorkspace, 'theme'>>
): StudioTheme

export {}
