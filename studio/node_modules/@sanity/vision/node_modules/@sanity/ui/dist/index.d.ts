/// <reference types="react" />

import {Component} from 'react'
import {CSSObject} from 'styled-components'
import {ElementType} from 'react'
import {ForwardRefExoticComponent} from 'react'
import {HTMLProps} from 'react'
import {MemoExoticComponent} from 'react'
import {NamedExoticComponent} from 'react'
import {PropsWithChildren} from 'react'
import {ReactElement} from 'react'
import {ReactNode} from 'react'
import {Ref} from 'react'
import {RefAttributes} from 'react'
import {StyledComponent} from 'styled-components'

/** @beta */
export declare type ArrayPropPrimitive = string | number | boolean | undefined | null

/**
 * @internal
 */
export declare function attemptFocus(element: HTMLElement): boolean

/**
 * @public
 */
export declare const Autocomplete: <Option extends BaseAutocompleteOption>(
  props: AutocompleteProps<Option> &
    Omit<
      HTMLProps<HTMLInputElement>,
      | 'value'
      | 'ref'
      | 'type'
      | 'id'
      | 'spellCheck'
      | 'role'
      | 'prefix'
      | 'autoCapitalize'
      | 'autoCorrect'
      | 'inputMode'
      | 'aria-activedescendant'
      | 'aria-autocomplete'
      | 'aria-expanded'
      | 'aria-owns'
      | 'onChange'
      | 'onSelect'
      | 'as'
      | 'autoComplete'
    > & {
      ref?: Ref<HTMLInputElement> | undefined
    }
) => ReactElement

/**
 * @internal
 */
export declare interface AutocompleteInputChangeMsg {
  type: 'input/change'
  query: string | null
}

/**
 * @internal
 */
export declare interface AutocompleteInputFoocusMsg {
  type: 'input/focus'
}

/**
 * @internal
 */
export declare type AutocompleteMsg =
  | AutocompleteRootBlurMsg
  | AutocompleteRootClearMsg
  | AutocompleteRootEscapeMsg
  | AutocompleteRootOpenMsg
  | AutocompleteRootSetActiveValueMsg
  | AutocompleteRootSetListFocusedMsg
  | AutocompleteInputChangeMsg
  | AutocompleteInputFoocusMsg
  | AutocompleteValueChangeMsg

/**
 * @public
 */
export declare type AutocompleteOpenButtonProps = Omit<ButtonProps, 'as'> &
  Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'ref'>

/**
 * @public
 */
export declare interface AutocompleteProps<
  Option extends BaseAutocompleteOption = BaseAutocompleteOption
> {
  border?: boolean
  customValidity?: string
  filterOption?: (query: string, option: Option) => boolean
  fontSize?: number | number[]
  icon?: ElementType | ReactNode
  id: string
  /** @beta */
  listBox?: BoxProps
  loading?: boolean
  onChange?: (value: string) => void
  onQueryChange?: (query: string | null) => void
  onSelect?: (value: string) => void
  /** @beta */
  openButton?: boolean | AutocompleteOpenButtonProps
  options?: Option[]
  padding?: number | number[]
  popover?: Omit<PopoverProps, 'content' | 'onMouseEnter' | 'onMouseLeave' | 'open'> &
    Omit<HTMLProps<HTMLDivElement>, 'as' | 'children' | 'content' | 'ref' | 'width'>
  prefix?: ReactNode
  radius?: number | number[]
  /** @beta */
  relatedElements?: HTMLElement[]
  renderOption?: (option: Option) => ReactElement
  /** @beta */
  renderPopover?: (
    props: {
      content: ReactElement | null
      hidden: boolean
      inputElement: HTMLInputElement | null
      onMouseEnter: () => void
      onMouseLeave: () => void
    },
    ref: Ref<HTMLDivElement>
  ) => ReactNode
  renderValue?: (value: string, option?: Option) => string
  suffix?: ReactNode
  value?: string
}

/**
 * @internal
 */
export declare interface AutocompleteRootBlurMsg {
  type: 'root/blur'
}

/**
 * @internal
 */
export declare interface AutocompleteRootClearMsg {
  type: 'root/clear'
}

/**
 * @internal
 */
export declare interface AutocompleteRootEscapeMsg {
  type: 'root/escape'
}

/**
 * @internal
 */
export declare interface AutocompleteRootOpenMsg {
  type: 'root/open'
  query: string | null
}

/**
 * @internal
 */
export declare interface AutocompleteRootSetActiveValueMsg {
  type: 'root/setActiveValue'
  value: string
  listFocused?: boolean
}

/**
 * @internal
 */
export declare interface AutocompleteRootSetListFocusedMsg {
  type: 'root/setListFocused'
  listFocused: boolean
}

/**
 * @internal
 */
export declare interface AutocompleteState {
  activeValue: string | null
  focused: boolean
  listFocused: boolean
  query: string | null
  value: string | null
}

/**
 * @internal
 */
export declare interface AutocompleteValueChangeMsg {
  type: 'value/change'
  value: string | null
}

/**
 * @public
 */
export declare const Avatar: ForwardRefExoticComponent<
  AvatarProps & Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as'> & RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare const AvatarCounter: ForwardRefExoticComponent<
  AvatarCounterProps & RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface AvatarCounterProps {
  count: number
  size?: AvatarSize | AvatarSize[]
  /** @deprecated No longer supported. */
  tone?: 'navbar'
}

/**
 * @public
 */
export declare type AvatarPosition = 'top' | 'bottom' | 'inside'

/**
 * @public
 */
export declare interface AvatarProps {
  animateArrowFrom?: AvatarPosition
  arrowPosition?: AvatarPosition
  as?: React.ElementType | keyof JSX.IntrinsicElements
  color?: ThemeColorSpotKey
  initials?: string
  onImageLoadError?: (event: Error) => void
  size?: AvatarSize | AvatarSize[]
  src?: string
  /**
   * The status of the entity this Avatar represents.
   * @alpha
   */
  status?: AvatarStatus
  title?: string
}

/**
 * @internal
 */
export declare interface AvatarRootStyleProps {
  $color: string
}

/**
 * @public
 */
export declare type AvatarSize = 0 | 1 | 2

/**
 * @public
 */
export declare const AvatarStack: ForwardRefExoticComponent<
  AvatarStackProps & Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as'> & RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface AvatarStackProps {
  children: React.ReactNode
  maxLength?: number
  size?: AvatarSize | AvatarSize[]
  /** @deprecated No longer supported. */
  tone?: 'navbar'
}

/**
 * @public
 */
export declare type AvatarStatus = 'online' | 'editing' | 'inactive'

/**
 * @public
 */
export declare const Badge: ForwardRefExoticComponent<
  Omit<BadgeProps & HTMLProps<HTMLDivElement>, 'ref'> & RefAttributes<unknown>
>

/**
 * @public
 */
export declare type BadgeMode = 'default' | 'outline'

/**
 * @public
 */
export declare interface BadgeProps extends BoxProps, ResponsiveRadiusProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  fontSize?: number | number[]
  mode?: BadgeMode
  tone?: BadgeTone
}

/**
 * @public
 */
export declare type BadgeTone = 'default' | 'primary' | 'positive' | 'caution' | 'critical'

/**
 * @public
 */
export declare interface BaseAutocompleteOption {
  value: string
}

/**
 * @public
 */
export declare interface BaseTheme<Styles extends {} = {}> {
  avatar: ThemeAvatar
  button: {
    textWeight: ThemeFontWeightKey
  }
  color: ThemeColorSchemes
  container: number[]
  focusRing: {
    offset: number
    width: number
  }
  fonts: ThemeFonts
  /**
   * THIS API MAY BE UNSTABLE. DO NOT USE IN PRODUCTION.
   * @beta
   */
  layer?: ThemeLayer
  media: number[]
  radius: number[]
  shadows: Array<ThemeShadow | null>
  space: number[]
  input: ThemeInput
  styles?: Styles
}

/**
 * @public
 */
export declare interface BoundaryElementContextValue {
  version: 0.0
  element: HTMLElement | null
}

/**
 * @public
 */
export declare function BoundaryElementProvider(
  props: BoundaryElementProviderProps
): React.ReactElement

/**
 * @public
 */
export declare interface BoundaryElementProviderProps {
  children: React.ReactNode
  element: HTMLElement | null
}

/**
 * @public
 */
export declare const Box: ForwardRefExoticComponent<
  Omit<BoxProps & Omit<HTMLProps<HTMLDivElement>, 'height' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare type BoxDisplay = 'none' | 'block' | 'grid' | 'flex' | 'inline-block'

/**
 * @public
 */
export declare type BoxHeight = 'stretch' | 'fill'

/**
 * @public
 */
export declare type BoxOverflow = 'visible' | 'hidden' | 'auto'

/**
 * @public
 */
export declare interface BoxProps
  extends ResponsiveFlexItemProps,
    ResponsiveBoxProps,
    ResponsiveGridItemProps,
    ResponsiveMarginProps,
    ResponsivePaddingProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

/**
 * TODO: Rename to `ThemeBoxShadow`
 * @public
 */
export declare type BoxShadow = [number, number, number, number]

/**
 * @public
 */
export declare type BoxSizing = 'content' | 'border'

/**
 * @beta
 */
export declare const Breadcrumbs: ForwardRefExoticComponent<
  BreadcrumbsProps &
    Omit<HTMLProps<HTMLOListElement>, 'ref' | 'type' | 'as'> &
    RefAttributes<HTMLOListElement>
>

/**
 * @beta
 */
export declare interface BreadcrumbsProps {
  maxLength?: number
  separator?: React.ReactNode
  space?: number | number[]
}

/**
 * @public
 */
export declare const Button: ForwardRefExoticComponent<
  Omit<ButtonProps & Omit<HTMLProps<HTMLButtonElement>, 'as'>, 'ref'> &
    RefAttributes<HTMLButtonElement>
>

/**
 * @public
 */
export declare type ButtonMode = 'default' | 'ghost' | 'bleed'

/**
 * @public
 */
export declare interface ButtonProps extends ResponsivePaddingProps, ResponsiveRadiusProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  fontSize?: number | number[]
  mode?: ButtonMode
  icon?: React.ElementType | React.ReactNode
  iconRight?: React.ElementType | React.ReactNode
  justify?: FlexJustify | FlexJustify[]
  /**
   * @beta Do not use in production, as this might change.
   */
  loading?: boolean
  selected?: boolean
  space?: number | number[]
  textAlign?: ButtonTextAlign
  text?: React.ReactNode
  tone?: ButtonTone
  type?: 'button' | 'reset' | 'submit'
}

/**
 * @public
 */
export declare type ButtonTextAlign = 'left' | 'right' | 'center'

/**
 * @public
 */
export declare type ButtonTone = 'default' | 'primary' | 'positive' | 'caution' | 'critical'

/**
 * @public
 */
export declare const Card: ForwardRefExoticComponent<
  Omit<CardProps & Omit<HTMLProps<HTMLDivElement>, 'height' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface CardProps
  extends BoxProps,
    ResponsiveBorderProps,
    ResponsiveRadiusProps,
    ResponsiveShadowProps {
  /**
   * Do not use in production.
   * @beta
   */
  __unstable_checkered?: boolean
  /**
   * Do not use in production.
   * @beta
   */
  __unstable_focusRing?: boolean
  pressed?: boolean
  scheme?: ThemeColorSchemeKey
  tone?: CardTone
}

/**
 * @internal
 */
export declare interface CardStyleProps {
  $checkered: boolean
  $focusRing: boolean
  $tone: ThemeColorToneKey
}

/**
 * @public
 */
export declare type CardTone = ThemeColorToneKey | 'inherit'

/**
 * @public
 */
export declare const Checkbox: ForwardRefExoticComponent<
  Omit<Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> & CheckboxProps, 'ref'> &
    RefAttributes<HTMLInputElement>
>

/**
 * @public
 */
export declare interface CheckboxProps {
  indeterminate?: boolean
  customValidity?: string
}

/**
 * @public
 */
export declare type ClickOutsideListener = (event: MouseEvent) => void

/**
 * @public
 */
export declare const Code: ForwardRefExoticComponent<
  Omit<CodeProps & Omit<HTMLProps<HTMLElement>, 'size' | 'as'>, 'ref'> & RefAttributes<HTMLElement>
>

/**
 * @public
 */
export declare interface CodeProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  language?: string
  size?: number | number[]
  weight?: string
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const CodeSkeleton: ForwardRefExoticComponent<
  Omit<
    CodeSkeletonProps & Omit<HTMLProps<HTMLDivElement>, 'children' | 'size' | 'height' | 'as'>,
    'ref'
  > &
    RefAttributes<HTMLDivElement>
>

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface CodeSkeletonProps extends SkeletonProps {
  size?: number | number[]
}

/**
 * @public
 */
export declare const Container: ForwardRefExoticComponent<
  Omit<ContainerProps & Omit<HTMLProps<HTMLDivElement>, 'height' | 'width' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface ContainerProps extends BoxProps, ResponsiveWidthProps {}

/**
 * @internal
 */
export declare function containsOrEqualsElement(element: HTMLElement, node: Node): boolean

/**
 * @public
 */
export declare function createColorTheme(
  partialOpts?: PartialThemeColorBuilderOpts
): ThemeColorSchemes

/**
 * @public
 */
export declare const Dialog: ForwardRefExoticComponent<
  Omit<DialogProps & Omit<HTMLProps<HTMLDivElement>, 'width' | 'id' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @internal
 */
export declare const DialogContext: React.Context<DialogContextValue>

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface DialogContextValue {
  version: 0.0
  position?: DialogPosition | DialogPosition[]
  zOffset?: number | number[]
}

/**
 * @public
 */
export declare type DialogPosition = 'absolute' | 'fixed'

/**
 * @public
 */
export declare interface DialogProps extends ResponsivePaddingProps, ResponsiveWidthProps {
  /**
   * @beta
   */
  __unstable_autoFocus?: boolean
  /**
   * @beta
   */
  __unstable_hideCloseButton?: boolean
  cardRadius?: number | number[]
  cardShadow?: number | number[]
  contentRef?: React.ForwardedRef<HTMLDivElement>
  footer?: React.ReactNode
  header?: React.ReactNode
  id: string
  /** A callback that fires when the dialog becomes the top layer when it was not the top layer before. */
  onActivate?: LayerProps['onActivate']
  onClickOutside?: () => void
  onClose?: () => void
  portal?: string
  position?: DialogPosition | DialogPosition[]
  scheme?: ThemeColorSchemeKey
  zOffset?: number | number[]
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare function DialogProvider(props: DialogProviderProps): React.ReactElement

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface DialogProviderProps {
  children?: React.ReactNode
  position?: DialogPosition | DialogPosition[]
  zOffset?: number | number[]
}

/**
 * DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const ElementQuery: ForwardRefExoticComponent<
  Omit<MediaQueryProps & Omit<HTMLProps<HTMLDivElement>, 'media' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @beta
 */
export declare interface ElementRectValue {
  width: number
  height: number
}

/**
 * @beta
 */
export declare interface ElementSize {
  content: ElementRectValue
  border: ElementRectValue
  /** @deprecated INTERNAL ONLY */
  _contentRect: DOMRectReadOnly
}

/**
 * @internal
 */
export declare interface _ElementSizeListener {
  subscribe: (element: HTMLElement, subscriber: _ElementSizeSubscriber) => () => void
}

/**
 * @internal
 */
export declare interface _ElementSizeObserver {
  subscribe: (element: HTMLElement, subscriber: _ElementSizeSubscriber) => () => void
}

/**
 * @internal
 */
export declare const _elementSizeObserver: _ElementSizeObserver

/**
 * @internal
 */
export declare type _ElementSizeSubscriber = (elementRect: ElementSize) => void

/**
 * DO NOT USE IN PRODUCTION
 * @beta
 */
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState
  static getDerivedStateFromError(error: Error): ErrorBoundaryState
  componentDidCatch(error: Error, info: React.ErrorInfo): void
  render(): React.ReactNode
}

/**
 * DO NOT USE IN PRODUCTION
 * @beta
 */
export declare type ErrorBoundaryProps = PropsWithChildren<{
  onCatch: (params: {error: Error; info: React.ErrorInfo}) => void
}>

/**
 * DO NOT USE IN PRODUCTION
 * @beta
 */
export declare interface ErrorBoundaryState {
  error: Error | null
}

/**
 * @internal
 */
export declare function _fillCSSObject(
  keys: string[],
  value: string | number | CSSObject
): CSSObject

/**
 * @public
 */
export declare const Flex: ForwardRefExoticComponent<
  Omit<FlexProps & Omit<HTMLProps<HTMLDivElement>, 'wrap' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'

/**
 * @public
 */
export declare type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

/**
 * @public
 */
export declare type FlexJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

/**
 * @public
 */
export declare interface FlexProps
  extends Omit<BoxProps, 'display'>,
    ResponsiveFlexProps,
    ResponsiveFlexItemProps {
  gap?: number | number[]
}

/**
 * @public
 */
export declare type FlexValue = number | 'none' | 'auto' | 'initial'

/**
 * @public
 */
export declare type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap'

/**
 * @internal
 */
export declare function focusFirstDescendant(element: HTMLElement): boolean

/**
 * @internal
 */
export declare function focusLastDescendant(element: HTMLElement): boolean

/**
 * @internal
 */
export declare interface FontWeightStyleProps {
  $weight?: ThemeFontWeightKey
}

/**
 * @internal
 */
export declare function _getArrayProp<T = number>(val: T | T[] | undefined, defaultVal?: T[]): T[]

/**
 * @internal
 */
export declare function _getResponsiveSpace(
  theme: Theme,
  props: string[],
  spaceIndexes?: number[]
): CSSObject[] | null

/**
 * @public
 */
export declare const Grid: ForwardRefExoticComponent<
  Omit<GridProps & Omit<HTMLProps<HTMLDivElement>, 'height' | 'as' | 'rows'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare type GridAutoCols = 'auto' | 'min' | 'max' | 'fr'

/**
 * @public
 */
export declare type GridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense'

/**
 * @public
 */
export declare type GridAutoRows = 'auto' | 'min' | 'max' | 'fr'

/**
 * @public
 */
export declare type GridItemColumn = 'auto' | 'full' | number

/**
 * @public
 */
export declare type GridItemColumnEnd = 'auto' | number

/**
 * @public
 */
export declare type GridItemColumnStart = 'auto' | number

/**
 * @public
 */
export declare type GridItemRow = 'auto' | 'full' | number

/**
 * @public
 */
export declare type GridItemRowEnd = 'auto' | number

/**
 * @public
 */
export declare type GridItemRowStart = 'auto' | number

/**
 * @public
 */
export declare interface GridProps extends Omit<BoxProps, 'display'>, ResponsiveGridProps {}

/**
 * @internal
 */
export declare function _hasFocus(element: HTMLElement): boolean

/**
 * @public
 */
export declare const Heading: ForwardRefExoticComponent<
  Omit<HeadingProps & Omit<HTMLProps<HTMLElement>, 'size' | 'as'>, 'ref'> &
    RefAttributes<HTMLElement>
>

/**
 * @public
 */
export declare interface HeadingProps {
  accent?: boolean
  align?: TextAlign | TextAlign[]
  as?: React.ElementType | keyof JSX.IntrinsicElements
  muted?: boolean
  size?: number | number[]
  /**
   * Controls how overflowing text is treated.
   * Use `textOverflow="ellipsis"` to render text as a single line which is concatenated with a `…` symbol.
   * @beta
   */
  textOverflow?: 'ellipsis'
  weight?: ThemeFontWeightKey
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const HeadingSkeleton: ForwardRefExoticComponent<
  Omit<
    HeadingSkeletonProps & Omit<HTMLProps<HTMLDivElement>, 'children' | 'size' | 'height' | 'as'>,
    'ref'
  > &
    RefAttributes<HTMLDivElement>
>

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface HeadingSkeletonProps extends SkeletonProps {
  size?: number | number[]
}

/**
 * @internal
 */
export declare function hexToRgb(hex: string): RGB

/**
 * @public
 */
export declare const Hotkeys: ForwardRefExoticComponent<
  HotkeysProps & Omit<HTMLProps<HTMLElement>, 'ref' | 'size' | 'as'> & RefAttributes<HTMLElement>
>

/**
 * @public
 */
export declare interface HotkeysProps {
  fontSize?: number | number[]
  padding?: number | number[]
  radius?: number | number[]
  space?: number | number[]
  keys?: string[]
}

/**
 * @internal
 */
export declare interface HSL {
  h: number
  s: number
  l: number
}

/**
 * @internal
 */
export declare function hslToRgb(hsl: HSL): RGB

/**
 * @public
 */
export declare const Inline: ForwardRefExoticComponent<
  Omit<InlineProps & HTMLProps<HTMLDivElement>, 'ref'> & RefAttributes<unknown>
>

/**
 * @public
 */
export declare interface InlineProps extends Omit<BoxProps, 'display'> {
  space?: number | number[]
}

/**
 * @internal
 */
export declare function _isEnterToClickElement(element: HTMLElement): boolean

/**
 * @internal
 */
export declare function isFocusable(element: HTMLElement): boolean

/**
 * @internal
 */
export declare function isHTMLAnchorElement(element: unknown): element is HTMLAnchorElement

/**
 * @internal
 */
export declare function isHTMLButtonElement(element: unknown): element is HTMLButtonElement

/**
 * @internal
 */
export declare function isHTMLElement(node: unknown): node is HTMLElement

/**
 * @internal
 */
export declare function isHTMLInputElement(element: unknown): element is HTMLInputElement

/**
 * @internal
 */
export declare function isHTMLSelectElement(element: unknown): element is HTMLSelectElement

/**
 * @internal
 */
export declare function isHTMLTextAreaElement(element: unknown): element is HTMLTextAreaElement

/**
 * @internal
 */
export declare function _isScrollable(el: Node): boolean

/**
 * @public
 */
export declare const KBD: ForwardRefExoticComponent<
  KBDProps & Omit<HTMLProps<HTMLElement>, 'ref' | 'size' | 'as'> & RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface KBDProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  fontSize?: number | number[]
  padding?: number | number[]
  radius?: number | number[]
}

/**
 * @public
 */
export declare const Label: ForwardRefExoticComponent<
  Omit<LabelProps & Omit<HTMLProps<HTMLDivElement>, 'size' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface LabelProps {
  accent?: boolean
  align?: TextAlign | TextAlign[]
  as?: React.ElementType | keyof JSX.IntrinsicElements
  muted?: boolean
  size?: number | number[]
  /**
   * Controls how overflowing text is treated.
   * Use `textOverflow="ellipsis"` to render text as a single line which is concatenated with a `…` symbol.
   * @beta
   */
  textOverflow?: 'ellipsis'
  weight?: ThemeFontWeightKey
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const LabelSkeleton: ForwardRefExoticComponent<
  Omit<
    LabelSkeletonProps & Omit<HTMLProps<HTMLDivElement>, 'children' | 'size' | 'height' | 'as'>,
    'ref'
  > &
    RefAttributes<HTMLDivElement>
>

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface LabelSkeletonProps extends SkeletonProps {
  size?: number | number[]
}

/**
 * @public
 */
export declare const Layer: ForwardRefExoticComponent<
  Omit<LayerProps & Omit<HTMLProps<HTMLDivElement>, 'as'>, 'ref'> & RefAttributes<HTMLDivElement>
>

/** @public */
export declare interface LayerContextValue {
  version: 0.0
  isTopLayer: boolean
  level?: number
  registerChild: (childLevel?: number) => () => void
  size: number
  zIndex: number
}

/**
 * @public
 */
export declare interface LayerProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  /** A callback that fires when the layer becomes the top layer when it was not the top layer before. */
  onActivate?: (props: {activeElement: HTMLElement | null}) => void
  zOffset?: number | number[]
}

/**
 * @public
 */
export declare function LayerProvider(props: LayerProviderProps): React.ReactElement

/**
 * @public
 */
export declare interface LayerProviderProps {
  children?: React.ReactNode
  zOffset?: number | number[]
}

/**
 * DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface MediaQueryProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  media?: number[]
}

/**
 * @internal
 */
export declare interface _MediaStore {
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => number
}

/**
 * @public
 */
export declare const Menu: ForwardRefExoticComponent<
  Omit<MenuProps & Omit<HTMLProps<HTMLDivElement>, 'height' | 'tabIndex' | 'role' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare const MenuButton: ForwardRefExoticComponent<
  MenuButtonProps & RefAttributes<HTMLButtonElement | null>
>

/**
 * @public
 */
export declare interface MenuButtonProps {
  /**
   * @beta Do not use in production.
   */
  __unstable_disableRestoreFocusOnClose?: boolean
  /**
   * @deprecated Use `popover={{boundaryElement: element}}` instead.
   */
  boundaryElement?: HTMLElement
  button: React.ReactElement
  id: string
  menu?: React.ReactElement
  onClose?: () => void
  /**
   * @deprecated Use `popover={{placement: 'top'}}` instead.
   */
  placement?: Placement
  popover?: Omit<PopoverProps, 'content' | 'open'>
  /**
   * @deprecated Use `popover={{scheme: 'dark'}}` instead.
   */
  popoverScheme?: ThemeColorSchemeKey
  /**
   * @deprecated Use `popover={{radius: 2}}` instead.
   */
  popoverRadius?: number | number[]
  /**
   * @beta Do not use in production.
   * @deprecated Use `popover={{portal: true}}` instead.
   */
  portal?: boolean
  /**
   * @deprecated Use `popover={{preventOverflow: true}}` instead.
   */
  preventOverflow?: boolean
}

/**
 * @public
 */
export declare const MenuDivider: StyledComponent<'hr', Theme>

/**
 * @public
 */
export declare function MenuGroup(
  props: MenuGroupProps &
    Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'height' | 'ref' | 'tabIndex'>
): React.ReactElement

/**
 * @public
 */
export declare interface MenuGroupProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  fontSize?: number | number[]
  icon?: React.ElementType | React.ReactNode
  padding?: number | number[]
  popover?: Omit<PopoverProps, 'content' | 'open'>
  radius?: number | number[]
  space?: number | number[]
  text: React.ReactNode
  tone?: SelectableTone
}

/**
 * @public
 */
export declare const MenuItem: ForwardRefExoticComponent<
  MenuItemProps &
    Omit<HTMLProps<HTMLDivElement>, 'selected' | 'ref' | 'height' | 'tabIndex' | 'as'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface MenuItemProps extends ResponsivePaddingProps, ResponsiveRadiusProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  fontSize?: number | number[]
  hotkeys?: string[]
  icon?: React.ElementType | React.ReactNode
  iconRight?: React.ElementType | React.ReactNode
  pressed?: boolean
  selected?: boolean
  space?: number | number[]
  text?: React.ReactNode
  tone?: SelectableTone
}

/**
 * @public
 */
export declare interface MenuProps extends ResponsivePaddingProps {
  /**
   * @deprecated Use `shouldFocus="first"` instead.
   */
  focusFirst?: boolean
  /**
   * @deprecated Use `shouldFocus="last"` instead.
   */
  focusLast?: boolean
  onClickOutside?: (event: MouseEvent) => void
  onEscape?: () => void
  onItemClick?: () => void
  onItemSelect?: (index: number) => void
  originElement?: HTMLElement | null
  registerElement?: (el: HTMLElement) => () => void
  shouldFocus?: 'first' | 'last' | null
  space?: number | number[]
}

/**
 * Apply the \`multiply\` blend mode
 * Source: https://www.w3.org/TR/compositing-1/#blendingmultiply
 * @internal
 */
export declare function multiply(b: RGB, s: RGB): RGB

/**
 * @internal
 */
export declare function parseColor(color: unknown): RGB

/**
 * @public
 */
export declare type PartialThemeColorBuilderOpts = Partial<ThemeColorBuilderOpts>

/**
 * Placement of floating UI elements.
 *
 * @public
 */
export declare type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

/** @public */
export declare const Popover: MemoExoticComponent<
  ForwardRefExoticComponent<
    Omit<
      PopoverProps & Omit<HTMLProps<HTMLDivElement>, 'children' | 'content' | 'width' | 'as'>,
      'ref'
    > &
      RefAttributes<HTMLDivElement>
  >
>

/**
 * @beta
 */
export declare type PopoverMargins = [number, number, number, number]

/**
 * @public
 */
export declare interface PopoverProps
  extends Omit<LayerProps, 'as'>,
    ResponsiveRadiusProps,
    ResponsiveShadowProps,
    ResponsiveWidthProps {
  /**
   * @beta
   */
  __unstable_margins?: PopoverMargins
  arrow?: boolean
  boundaryElement?: HTMLElement | null
  children?: React.ReactElement
  constrainSize?: boolean
  content?: React.ReactNode
  disabled?: boolean
  fallbackPlacements?: Placement[]
  open?: boolean
  overflow?: BoxOverflow
  padding?: number | number[]
  placement?: Placement
  portal?: boolean | string
  preventOverflow?: boolean
  referenceElement?: HTMLElement | null
  matchReferenceWidth?: boolean
  scheme?: ThemeColorSchemeKey
  tone?: CardTone
}

/**
 * @public
 */
export declare function Portal(props: PortalProps): React.ReactPortal | null

/**
 * @public
 */
export declare interface PortalContextValue {
  version: 0.0
  boundaryElement: HTMLElement | null
  element: HTMLElement | null
  elements?: Record<string, HTMLElement | null | undefined>
}

/**
 * @public
 */
export declare interface PortalProps {
  children: React.ReactNode
  /**
   * @beta This API might change. DO NOT USE IN PRODUCTION.
   */
  __unstable_name?: string
}

/**
 * @public
 */
export declare function PortalProvider(props: PortalProviderProps): React.ReactElement

/**
 * @public
 */
export declare interface PortalProviderProps {
  /**
   * @deprecated Use `<BoundaryElementProvider element={...} />` instead
   */
  boundaryElement?: HTMLElement | null
  children: React.ReactNode
  element?: HTMLElement | null
  /**
   * @beta
   */
  __unstable_elements?: Record<string, HTMLElement | null | undefined>
}

/**
 * @public
 */
export declare const Radio: ForwardRefExoticComponent<
  Omit<Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> & RadioProps, 'ref'> &
    RefAttributes<HTMLInputElement>
>

/**
 * @public
 */
export declare interface RadioProps {
  customValidity?: string
}

/**
 * @internal
 */
export declare function _raf(fn: () => void): () => void

/**
 * @internal
 */
export declare function _raf2(fn: () => void): () => void

/**
 * @public
 */
export declare function rem(pixelValue: number): string | 0

/**
 * @internal
 */
export declare const _ResizeObserver: typeof ResizeObserver

/**
 * @internal
 */
export declare function _responsive<T>(
  media: number[],
  values: T[],
  callback: (value: T, index: number, array: T[]) => CSSObject
): CSSObject[]

/**
 * @internal
 */
export declare interface ResponsiveAvatarSizeStyleProps {
  $size: AvatarSize[]
}

/**
 * @public
 */
export declare interface ResponsiveBorderProps {
  border?: boolean | boolean[]
  borderTop?: boolean | boolean[]
  borderRight?: boolean | boolean[]
  borderBottom?: boolean | boolean[]
  borderLeft?: boolean | boolean[]
}

/**
 * @public
 */
export declare interface ResponsiveBoxProps {
  display?: BoxDisplay | BoxDisplay[]
  height?: BoxHeight | BoxHeight[]
  overflow?: BoxOverflow | BoxOverflow[]
  sizing?: BoxSizing | BoxSizing[]
}

/**
 * Get responsive CSS for the `code` font style.
 * @internal
 */
export declare function responsiveCodeFontStyle(
  props: ResponsiveFontStyleProps & ThemeProps
): CSSObject[]

/**
 * @public
 */
export declare interface ResponsiveFlexItemProps {
  flex?: FlexValue | FlexValue[]
}

/**
 * @public
 */
export declare interface ResponsiveFlexProps {
  align?: FlexAlign | FlexAlign[]
  direction?: FlexDirection | FlexDirection[]
  justify?: FlexJustify | FlexJustify[]
  wrap?: FlexWrap | FlexWrap[]
}

/**
 * @internal
 */
export declare interface ResponsiveFontSizeStyleProps {
  $size: number[]
}

/**
 * @internal
 */
export declare interface ResponsiveFontStyleProps
  extends FontWeightStyleProps,
    ResponsiveFontSizeStyleProps,
    ResponsiveTextAlignStyleProps {
  $accent?: boolean
  $muted?: boolean
}

/**
 * @public
 */
export declare interface ResponsiveGridItemProps {
  column?: GridItemColumn | GridItemColumn[]
  columnStart?: GridItemColumnStart | GridItemColumnStart[]
  columnEnd?: GridItemColumnEnd | GridItemColumnEnd[]
  row?: GridItemRow | GridItemRow[]
  rowStart?: GridItemRowStart | GridItemRowStart[]
  rowEnd?: GridItemRowEnd | GridItemRowEnd[]
}

/**
 * @public
 */
export declare interface ResponsiveGridProps {
  autoRows?: GridAutoRows | GridAutoRows[]
  autoCols?: GridAutoCols | GridAutoCols[]
  autoFlow?: GridAutoFlow | GridAutoFlow[]
  columns?: number | number[]
  gap?: number | number[]
  gapX?: number | number[]
  gapY?: number | number[]
  rows?: number | number[]
}

/**
 * Get responsive CSS for the `heading` font style.
 * @internal
 */
export declare function responsiveHeadingFont(
  props: ResponsiveFontStyleProps & ThemeProps
): CSSObject[]

/**
 * Get responsive CSS for the `label` font style.
 * @internal
 */
export declare function responsiveLabelFont(
  props: ResponsiveFontStyleProps & ThemeProps
): CSSObject[]

/**
 * @public
 */
export declare interface ResponsiveMarginProps {
  margin?: number | number[]
  marginX?: number | number[]
  marginY?: number | number[]
  marginTop?: number | number[]
  marginRight?: number | number[]
  marginBottom?: number | number[]
  marginLeft?: number | number[]
}

/**
 * @public
 */
export declare interface ResponsivePaddingProps {
  padding?: number | number[]
  paddingX?: number | number[]
  paddingY?: number | number[]
  paddingTop?: number | number[]
  paddingRight?: number | number[]
  paddingBottom?: number | number[]
  paddingLeft?: number | number[]
}

/**
 * @public
 */
export declare interface ResponsiveRadiusProps {
  radius?: number | number[]
}

/**
 * @public
 */
export declare interface ResponsiveShadowProps {
  shadow?: number | number[]
}

/**
 * Get responsive text align styles.
 * @internal
 */
export declare function responsiveTextAlignStyle(
  props: ResponsiveTextAlignStyleProps & ThemeProps
): CSSObject[]

/**
 * @internal
 */
export declare interface ResponsiveTextAlignStyleProps {
  $align: TextAlign[]
}

/**
 * Get responsive CSS for the `text` font style.
 * @internal
 */
export declare function responsiveTextFont(
  props: ResponsiveFontStyleProps & ThemeProps
): CSSObject[]

/**
 * @public
 */
export declare interface ResponsiveWidthProps {
  width?: number | 'auto' | (number | 'auto')[]
}

/**
 * @internal
 */
export declare interface ResponsiveWidthStyleProps {
  $width: (number | 'auto')[]
}

/**
 * @internal
 */
export declare interface RGB {
  r: number
  g: number
  b: number
}

/**
 * @internal
 */
export declare function rgba(color: unknown, a: number): string

/**
 * @internal
 */
export declare function rgbToHex({r, g, b}: RGB): string

/**
 * @internal
 * @see https://css-tricks.com/converting-color-spaces-in-javascript/
 */
export declare function rgbToHsl({r, g, b}: RGB): HSL

/**
 * @public
 */
export declare type RootTheme = BaseTheme<Styles>

/**
 * Apply the \`screen\` blend mode
 * Source: https://www.w3.org/TR/compositing-1/#blendingscreen
 * @internal
 */
declare function screen_2(b: RGB, s: RGB): RGB
export {screen_2 as screen}

/**
 * @public
 */
export declare const Select: ForwardRefExoticComponent<
  Omit<SelectProps & Omit<HTMLProps<HTMLSelectElement>, 'as'>, 'ref'> &
    RefAttributes<HTMLSelectElement>
>

/**
 * @public
 */
export declare type SelectableTone = 'default' | 'primary' | 'positive' | 'caution' | 'critical'

/**
 * @public
 */
export declare interface SelectProps {
  fontSize?: number | number[]
  padding?: number | number[]
  radius?: number | number[]
  space?: number | number[]
  customValidity?: string
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const Skeleton: ForwardRefExoticComponent<
  Omit<SkeletonProps & HTMLProps<HTMLDivElement>, 'ref'> & RefAttributes<HTMLDivElement>
>

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface SkeletonProps extends ResponsiveRadiusProps, Omit<BoxProps, 'children'> {
  animated?: boolean
  delay?: number
}

/**
 * @public
 */
export declare const Spinner: ForwardRefExoticComponent<
  Omit<SpinnerProps & Omit<HTMLProps<HTMLDivElement>, 'size' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface SpinnerProps {
  muted?: boolean
  size?: number | number[]
}

/**
 * @public
 */
export declare const SrOnly: ForwardRefExoticComponent<
  Omit<SrOnlyProps & Omit<HTMLProps<HTMLDivElement>, 'aria-hidden' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface SrOnlyProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

/**
 * @public
 */
export declare const Stack: ForwardRefExoticComponent<
  StackProps & Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as'> & RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface StackProps extends BoxProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  space?: number | number[]
}

/**
 * @public
 */
export declare const studioTheme: RootTheme

/**
 * TODO: Rename to `ThemeStyles`
 * @public
 */
export declare interface Styles {
  button?: {
    root?: CSSObject
  }
  card?: {
    root?: CSSObject
  }
}

/**
 * @public
 */
export declare const Switch: ForwardRefExoticComponent<
  Omit<Omit<HTMLProps<HTMLInputElement>, 'type' | 'as'> & SwitchProps, 'ref'> &
    RefAttributes<HTMLInputElement>
>

/**
 * @public
 */
export declare interface SwitchProps {
  indeterminate?: boolean
}

/**
 * @public
 */
export declare const Tab: ForwardRefExoticComponent<
  Omit<
    TabProps & Omit<HTMLProps<HTMLButtonElement>, 'label' | 'type' | 'id' | 'aria-controls' | 'as'>,
    'ref'
  > &
    RefAttributes<HTMLButtonElement>
>

/**
 * @public
 */
export declare const TabList: ForwardRefExoticComponent<
  Omit<TabListProps & Omit<HTMLProps<HTMLDivElement>, 'height' | 'as'>, 'ref'> &
    RefAttributes<unknown>
>

/**
 * @public
 */
export declare interface TabListProps extends Omit<InlineProps, 'as' | 'height'> {
  children: Array<React.ReactElement | null | undefined | false>
}

/**
 * @public
 */
export declare const TabPanel: ForwardRefExoticComponent<
  Omit<
    TabPanelProps & Omit<HTMLProps<HTMLDivElement>, 'id' | 'role' | 'aria-labelledby' | 'as'>,
    'ref'
  > &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface TabPanelProps extends BoxProps {
  /**
   * The `id` of the correlating `Tab` component.
   */
  'aria-labelledby': string
  id: string
}

/**
 * @public
 */
export declare interface TabProps {
  /**
   * The `id` of the correlating `TabPanel` component.
   */
  'aria-controls': string
  id: string
  icon?: React.ElementType | React.ReactNode
  focused?: boolean
  fontSize?: number | number[]
  label?: React.ReactNode
  padding?: number | number[]
  selected?: boolean
  tone?: ButtonTone
}

/**
 * @public
 */
declare const Text_2: ForwardRefExoticComponent<
  Omit<TextProps & Omit<HTMLProps<HTMLDivElement>, 'size' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>
export {Text_2 as Text}

/**
 * @public
 */
export declare type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial'

/**
 * @public
 */
export declare const TextArea: ForwardRefExoticComponent<
  Omit<TextAreaProps & Omit<HTMLProps<HTMLTextAreaElement>, 'as'>, 'ref'> &
    RefAttributes<HTMLTextAreaElement>
>

/**
 * @public
 */
export declare interface TextAreaProps extends ResponsiveRadiusProps {
  border?: boolean
  customValidity?: string
  fontSize?: number | number[]
  padding?: number | number[]
  weight?: ThemeFontWeightKey
}

/**
 * @public
 */
export declare const TextInput: ForwardRefExoticComponent<
  Omit<TextInputProps & Omit<HTMLProps<HTMLInputElement>, 'type' | 'prefix' | 'as'>, 'ref'> &
    RefAttributes<HTMLInputElement>
>

/**
 * @public
 */
export declare type TextInputClearButtonProps = Omit<ButtonProps, 'as'> &
  Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'onClick' | 'onMouseDown' | 'ref'>

/**
 * @public
 */
export declare interface TextInputProps {
  border?: boolean
  /**
   * @beta
   */
  clearButton?: boolean | TextInputClearButtonProps
  customValidity?: string
  fontSize?: number | number[]
  icon?: React.ElementType | React.ReactNode
  iconRight?: React.ElementType | React.ReactNode
  /**
   * @beta
   */
  onClear?: () => void
  padding?: number | number[]
  prefix?: React.ReactNode
  radius?: number | number[]
  space?: number | number[]
  suffix?: React.ReactNode
  type?: TextInputType
  weight?: ThemeFontWeightKey
}

/**
 * @public
 */
export declare type TextInputType =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'url'
  | 'month'
  | 'number'
  | 'password'
  | 'tel'
  | 'time'
  | 'text'
  | 'week'
  | 'color'

/**
 * @public
 */
export declare interface TextProps {
  accent?: boolean
  align?: TextAlign | TextAlign[]
  as?: React.ElementType | keyof JSX.IntrinsicElements
  muted?: boolean
  size?: number | number[]
  /**
   * Controls how overflowing text is treated.
   * Use `textOverflow="ellipsis"` to render text as a single line which is concatenated with a `…` symbol.
   * @beta
   */
  textOverflow?: 'ellipsis'
  weight?: ThemeFontWeightKey
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const TextSkeleton: ForwardRefExoticComponent<
  Omit<
    TextSkeletonProps & Omit<HTMLProps<HTMLDivElement>, 'children' | 'size' | 'height' | 'as'>,
    'ref'
  > &
    RefAttributes<HTMLDivElement>
>

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface TextSkeletonProps extends SkeletonProps {
  size?: number | number[]
}

/**
 * @public
 */
export declare interface Theme {
  sanity: Omit<RootTheme, 'color'> & {
    color: ThemeColor
  }
}

/**
 * @public
 */
export declare interface ThemeAvatar {
  sizes: {
    distance: number
    size: number
  }[]
}

/**
 * @public
 */
export declare interface ThemeColor {
  dark: boolean
  base: ThemeColorBase
  button: ThemeColorButton
  card: ThemeColorCard
  input: ThemeColorInput
  selectable?: ThemeColorSelectable
  spot: ThemeColorSpot
  syntax: ThemeColorSyntax
  solid: ThemeColorSolid
  muted: ThemeColorMuted
}

/**
 * @public
 */
export declare interface ThemeColorBase {
  bg: string
  fg: string
  border: string
  focusRing: string
  shadow: {
    outline: string
    umbra: string
    penumbra: string
    ambient: string
  }
  skeleton?: {
    from: string
    to: string
  }
}

/**
 * @public
 */
export declare interface ThemeColorBuilderOpts {
  base: (opts: {dark: boolean; name: ThemeColorName}) => ThemeColorBase
  solid: (opts: {
    base: ThemeColorBase
    dark: boolean
    tone: ThemeColorToneKey
    name: ThemeColorName
    state: 'enabled' | 'disabled' | 'hovered' | 'pressed' | 'selected'
  }) => ThemeColorGenericState
  muted: (opts: {
    base: ThemeColorBase
    dark: boolean
    tone: ThemeColorToneKey
    name: ThemeColorName
    state: 'enabled' | 'disabled' | 'hovered' | 'pressed' | 'selected'
  }) => ThemeColorGenericState
  card: (opts: {
    base: ThemeColorBase
    dark: boolean
    muted: ThemeColorMuted
    name: ThemeColorName
    solid: ThemeColorSolid
    state: 'enabled' | 'disabled' | 'hovered' | 'pressed' | 'selected'
  }) => ThemeColorCardState
  button: (opts: {
    dark: boolean
    mode: ThemeColorButtonModeKey
    base: ThemeColorBase
    solid: ThemeColorSolidTone
    muted: ThemeColorMutedTone
  }) => ThemeColorButtonStates
  input: (opts: {
    base: ThemeColorBase
    solid: ThemeColorSolidTone
    muted: ThemeColorMutedTone
    dark: boolean
    mode: 'default' | 'invalid'
    state: 'enabled' | 'disabled' | 'hovered' | 'readOnly'
  }) => ThemeColorInputState
  selectable: (opts: {
    dark: boolean
    base: ThemeColorBase
    solid: ThemeColorSolid
    muted: ThemeColorMuted
    state: 'enabled' | 'disabled' | 'hovered' | 'pressed' | 'selected'
    tone: 'default' | 'primary' | 'positive' | 'caution' | 'critical'
  }) => ThemeColorSelectableState
  syntax: (opts: {base: ThemeColorBase; dark: boolean}) => ThemeColorSyntax
  spot: (opts: {base: ThemeColorBase; dark: boolean; key: ThemeColorSpotKey}) => string
}

/**
 * @public
 */
export declare interface ThemeColorButton {
  default: ThemeColorButtonTones
  ghost: ThemeColorButtonTones
  bleed: ThemeColorButtonTones
}

/**
 * @public
 */
export declare type ThemeColorButtonModeKey = 'default' | 'ghost' | 'bleed'

/**
 * @deprecated Use `ThemeColorGenericState` instead.
 * @public
 */
export declare type ThemeColorButtonState = ThemeColorGenericState

/**
 * @public
 */
export declare interface ThemeColorButtonStates {
  enabled: ThemeColorButtonState
  hovered: ThemeColorButtonState
  pressed: ThemeColorButtonState
  selected: ThemeColorButtonState
  disabled: ThemeColorButtonState
}

/**
 * TODO: Rename to `ThemeColorButtonMode`.
 * @public
 */
export declare interface ThemeColorButtonTones {
  default: ThemeColorButtonStates
  primary: ThemeColorButtonStates
  positive: ThemeColorButtonStates
  caution: ThemeColorButtonStates
  critical: ThemeColorButtonStates
}

/**
 * @public
 */
export declare interface ThemeColorCard {
  enabled: ThemeColorCardState
  hovered: ThemeColorCardState
  pressed: ThemeColorCardState
  selected: ThemeColorCardState
  disabled: ThemeColorCardState
}

/**
 * @deprecated Use `ThemeColorGenericState` instead.
 * @public
 */
export declare type ThemeColorCardState = ThemeColorGenericState

/**
 * @public
 */
export declare interface ThemeColorGenericState {
  bg: string
  /**
   * @beta
   */
  bg2?: string
  border: string
  fg: string
  muted: {
    fg: string
  }
  accent: {
    fg: string
  }
  link: {
    fg: string
  }
  code: {
    bg: string
    fg: string
  }
  skeleton?: {
    from: string
    to: string
  }
}

/**
 * @public
 */
export declare interface ThemeColorInput {
  default: ThemeColorInputStates
  invalid: ThemeColorInputStates
}

/**
 * @public
 */
export declare interface ThemeColorInputState {
  bg: string
  fg: string
  border: string
  placeholder: string
}

/**
 * @public
 */
export declare interface ThemeColorInputStates {
  enabled: ThemeColorInputState
  disabled: ThemeColorInputState
  hovered: ThemeColorInputState
  readOnly: ThemeColorInputState
}

/**
 * @public
 */
export declare interface ThemeColorMuted {
  default: ThemeColorMutedTone
  transparent: ThemeColorMutedTone
  primary: ThemeColorMutedTone
  positive: ThemeColorMutedTone
  caution: ThemeColorMutedTone
  critical: ThemeColorMutedTone
}

/**
 * @public
 */
export declare interface ThemeColorMutedTone {
  enabled: ThemeColorGenericState
  disabled: ThemeColorGenericState
  hovered: ThemeColorGenericState
  pressed: ThemeColorGenericState
  selected: ThemeColorGenericState
}

/**
 * @public
 */
export declare type ThemeColorName =
  | 'default'
  | 'transparent'
  | 'primary'
  | 'positive'
  | 'caution'
  | 'critical'

/**
 * @public
 */
export declare function ThemeColorProvider(props: ThemeColorProviderProps): React.ReactElement

/**
 * @public
 */
export declare interface ThemeColorProviderProps {
  children?: React.ReactNode
  scheme?: ThemeColorSchemeKey
  tone?: ThemeColorName
}

/**
 * @public
 */
export declare interface ThemeColorScheme {
  default: ThemeColor
  transparent: ThemeColor
  primary: ThemeColor
  positive: ThemeColor
  caution: ThemeColor
  critical: ThemeColor
}

/**
 * @public
 */
export declare type ThemeColorSchemeKey = 'dark' | 'light'

/**
 * @public
 */
export declare interface ThemeColorSchemes {
  dark: ThemeColorScheme
  light: ThemeColorScheme
}

/**
 * @public
 */
export declare interface ThemeColorSelectable {
  default: ThemeColorSelectableStates
  primary: ThemeColorSelectableStates
  positive: ThemeColorSelectableStates
  caution: ThemeColorSelectableStates
  critical: ThemeColorSelectableStates
}

/**
 * @deprecated Use `ThemeColorGenericState` instead.
 * @public
 */
export declare type ThemeColorSelectableState = ThemeColorGenericState

/**
 * @public
 */
export declare interface ThemeColorSelectableStates {
  enabled: ThemeColorSelectableState
  hovered: ThemeColorSelectableState
  pressed: ThemeColorSelectableState
  selected: ThemeColorSelectableState
  disabled: ThemeColorSelectableState
}

/**
 * @public
 */
export declare interface ThemeColorSolid {
  default: ThemeColorSolidTone
  transparent: ThemeColorSolidTone
  primary: ThemeColorSolidTone
  positive: ThemeColorSolidTone
  caution: ThemeColorSolidTone
  critical: ThemeColorSolidTone
}

/**
 * @public
 */
export declare interface ThemeColorSolidTone {
  enabled: ThemeColorGenericState
  disabled: ThemeColorGenericState
  hovered: ThemeColorGenericState
  pressed: ThemeColorGenericState
  selected: ThemeColorGenericState
}

/**
 * @public
 */
export declare interface ThemeColorSpot {
  gray: string
  blue: string
  purple: string
  magenta: string
  red: string
  orange: string
  yellow: string
  green: string
  cyan: string
}

/**
 * @public
 */
export declare type ThemeColorSpotKey =
  | 'gray'
  | 'blue'
  | 'purple'
  | 'magenta'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'cyan'

/**
 * @public
 */
export declare interface ThemeColorSyntax {
  atrule: string
  attrName: string
  attrValue: string
  attribute: string
  boolean: string
  builtin: string
  cdata: string
  char: string
  class: string
  className: string
  comment: string
  constant: string
  deleted: string
  doctype: string
  entity: string
  function: string
  hexcode: string
  id: string
  important: string
  inserted: string
  keyword: string
  number: string
  operator: string
  prolog: string
  property: string
  pseudoClass: string
  pseudoElement: string
  punctuation: string
  regex: string
  selector: string
  string: string
  symbol: string
  tag: string
  unit: string
  url: string
  variable: string
}

/**
 * @public
 */
export declare type ThemeColorToneKey =
  | 'default'
  | 'transparent'
  | 'primary'
  | 'positive'
  | 'caution'
  | 'critical'

/**
 * @public
 */
export declare interface ThemeContextValue {
  version: 0.0
  scheme: ThemeColorSchemeKey
  theme: RootTheme
  tone: ThemeColorName
}

/**
 * @public
 */
export declare interface ThemeFont {
  family: string
  weights: ThemeFontWeight
  sizes: ThemeFontSize[]
  /** @deprecated No longer supported. */
  horizontalOffset?: number
}

/**
 * @public
 */
export declare type ThemeFontKey = 'code' | 'heading' | 'label' | 'text'

/**
 * @public
 */
export declare interface ThemeFonts {
  code: ThemeFont
  heading: ThemeFont
  label: ThemeFont
  text: ThemeFont
}

/**
 * @public
 */
export declare interface ThemeFontSize {
  ascenderHeight: number
  descenderHeight: number
  fontSize: number
  iconSize: number
  letterSpacing: number
  lineHeight: number
}

/**
 * @public
 */
export declare interface ThemeFontWeight {
  regular: number
  medium: number
  semibold: number
  bold: number
}

/**
 * @public
 */
export declare type ThemeFontWeightKey = 'regular' | 'medium' | 'semibold' | 'bold'

/**
 * @public
 */
export declare interface ThemeInput {
  checkbox: {
    size: number
  }
  radio: {
    size: number
    markSize: number
  }
  switch: {
    width: number
    height: number
    padding: number
    transitionDurationMs: number
    transitionTimingFunction: string
  }
  border: {
    width: number
  }
}

/**
 * THIS API MAY BE UNSTABLE. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface ThemeLayer {
  dialog: {
    zOffset: number
  }
  popover: {
    zOffset: number
  }
  tooltip: {
    zOffset: number
  }
}

/**
 * @internal
 */
export declare interface ThemeProps {
  theme: Theme
}

/**
 * @public
 */
export declare function ThemeProvider(props: ThemeProviderProps): React.ReactElement

/**
 * @public
 */
export declare interface ThemeProviderProps {
  children?: React.ReactNode
  scheme?: ThemeColorSchemeKey
  theme?: RootTheme
  tone?: ThemeColorName
}

/**
 * @public
 */
export declare interface ThemeShadow {
  umbra: BoxShadow
  penumbra: BoxShadow
  ambient: BoxShadow
}

/**
 * @public
 */
export declare function Toast(
  props: ToastProps & Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'height' | 'ref' | 'title'>
): React.ReactElement

/**
 * @public
 */
export declare interface ToastContextValue {
  version: 0.0
  push: (params: ToastParams) => string
}

/**
 * @public
 */
export declare interface ToastParams {
  closable?: boolean
  description?: React.ReactNode
  duration?: number
  id?: string
  onClose?: () => void
  title?: React.ReactNode
  status?: 'error' | 'warning' | 'success' | 'info'
}

/**
 * @public
 */
export declare interface ToastProps {
  closable?: boolean
  description?: React.ReactNode
  onClose?: () => void
  title?: React.ReactNode
  status?: 'error' | 'warning' | 'success' | 'info'
}

/**
 * @public
 */
export declare function ToastProvider(props: ToastProviderProps): React.ReactElement

/**
 * @public
 */
export declare interface ToastProviderProps {
  children?: React.ReactNode
  padding?: number | number[]
  paddingX?: number | number[]
  paddingY?: number | number[]
  zOffset?: number | number[]
}

/**
 * @public
 */
export declare const Tooltip: ForwardRefExoticComponent<
  Omit<TooltipProps & Omit<HTMLProps<HTMLDivElement>, 'children' | 'content' | 'as'>, 'ref'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @public
 */
export declare interface TooltipProps extends Omit<LayerProps, 'as'> {
  /** @deprecated Use `fallbackPlacements` instead. */
  allowedAutoPlacements?: Placement[]
  boundaryElement?: HTMLElement | null
  children?: React.ReactElement
  content?: React.ReactNode
  disabled?: boolean
  fallbackPlacements?: Placement[]
  padding?: number | number[]
  placement?: Placement
  portal?: boolean | string
  scheme?: ThemeColorSchemeKey
  shadow?: number | number[]
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const Tree: MemoExoticComponent<
  ForwardRefExoticComponent<
    TreeProps &
      Omit<HTMLProps<HTMLDivElement>, 'ref' | 'wrap' | 'height' | 'role' | 'as' | 'align'> &
      RefAttributes<HTMLDivElement>
  >
>

/**
 * @beta
 */
export declare interface TreeContextValue {
  version: 0.0
  focusedElement: HTMLElement | null
  level: number
  path: string[]
  registerItem: (element: HTMLElement, path: string, expanded: boolean, selected: boolean) => void
  setExpanded: (path: string, expanded: boolean) => void
  setFocusedElement: (focusedElement: HTMLElement | null) => void
  space: number | number[]
  state: TreeState
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare const TreeItem: NamedExoticComponent<
  TreeItemProps & Omit<HTMLProps<HTMLLIElement>, 'ref' | 'role' | 'as'>
>

/**
 * @beta
 */
export declare interface TreeItemProps {
  expanded?: boolean
  fontSize?: number | number[]
  icon?: React.ElementType
  padding?: number | number[]
  space?: number | number[]
  text?: React.ReactNode
  weight?: ThemeFontWeightKey
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare interface TreeProps {
  space?: number | number[]
}

/**
 * @beta
 */
export declare interface TreeState {
  [key: string]:
    | {
        element: HTMLElement
        expanded: boolean
      }
    | undefined
}

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare function useArrayProp<T extends ArrayPropPrimitive = ArrayPropPrimitive>(
  val: T | T[] | undefined,
  defaultVal?: T[]
): T[]

/**
 * @public
 */
export declare function useBoundaryElement(): BoundaryElementContextValue

/**
 * @public
 */
export declare function useClickOutside(
  listener: ClickOutsideListener,
  elementsArg?: Array<HTMLElement | HTMLElement[] | null>,
  boundaryElement?: HTMLElement | null
): (el: HTMLElement | null) => void

/**
 * @beta
 */
export declare function useCustomValidity(
  ref: {
    current: null | {
      setCustomValidity: (validity: string) => void
    }
  },
  customValidity: string | undefined
): void

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare function useDialog(): DialogContextValue

/**
 * Subscribe to the rect of a DOM element.
 * @beta
 *
 * @deprecated Use `useElementSize` instead
 */
export declare function useElementRect(element: HTMLElement | null): DOMRectReadOnly | null

/**
 * Subscribe to the size of a DOM element.
 * @beta
 */
export declare function useElementSize(element: HTMLElement | null): ElementSize | null

/**
 * @beta
 */
export declare function useForwardedRef<T>(
  ref: React.ForwardedRef<T>
): React.MutableRefObject<T | null>

/**
 * @beta
 */
export declare function useGlobalKeyDown(onKeyDown: (event: KeyboardEvent) => void): void

/**
 * @public
 */
export declare function useLayer(): LayerContextValue

/**
 * This API might change. DO NOT USE IN PRODUCTION.
 * @beta
 */
export declare function useMediaIndex(): number

/**
 * @public
 */
export declare function usePortal(): PortalContextValue

/**
 * @public
 */
export declare function usePrefersDark(): boolean

/**
 * Returns true if motion should be reduced
 * @public
 */
export declare function usePrefersReducedMotion(): boolean

/**
 * @public
 */
export declare function useRootTheme(): ThemeContextValue

/**
 * @public
 */
export declare function useTheme(): Theme

/**
 * @public
 */
export declare function useToast(): ToastContextValue

/**
 * @beta
 */
export declare function useTree(): TreeContextValue

/**
 * @beta
 */
export declare const VirtualList: ForwardRefExoticComponent<
  VirtualListProps<any> &
    StackProps &
    Omit<HTMLProps<HTMLDivElement>, 'children' | 'ref' | 'onChange' | 'as'> &
    RefAttributes<HTMLDivElement>
>

/**
 * @beta
 */
export declare interface VirtualListChangeOpts {
  fromIndex: number
  gap: number
  itemHeight: number
  scrollHeight: number
  scrollTop: number
  toIndex: number
}

/**
 * @beta
 */
export declare interface VirtualListProps<Item = any> {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  gap?: number
  getItemKey?: (item: Item, itemIndex: number) => string
  items?: Item[]
  onChange?: (opts: VirtualListChangeOpts) => void
  renderItem?: (item: Item) => React.ReactNode
}

export {}
