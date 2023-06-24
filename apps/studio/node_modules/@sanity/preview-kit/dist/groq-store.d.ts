/// <reference types="react" />

import { Config } from '@sanity/groq-store'
import { NamedExoticComponent } from 'react'

/**
 * @public
 * @deprecated Use `useGroqStore` instead.
 */
export declare const GroqStoreProvider: NamedExoticComponent<GroqStoreProviderProps>

/**
 * @public
 */
export declare interface GroqStoreProviderProps extends Config {
  children: React.ReactNode
  /**
   * @defaultValue true
   */
  listen?: boolean
  /**
   * @defaultValue true
   */
  overlayDrafts?: boolean
  /**
   * @defaultValue 3000
   */
  documentLimit?: number
  logger?: Logger
}

/**
 * Specify a `console.log` compatible logger to aid debugging
 * @public
 */
export declare type Logger =
  | typeof console
  | Pick<typeof console, 'warn' | 'error' | 'log'>

export {}
