import { css } from 'lit-element'

import { fontStyle, fontSize } from '../../theme/typografy.css'
import { slideDownIn20 } from '../../theme/animation.css'
import { normalize, getBorderCss, getLabelStyle } from '../../theme/mixins.css'
import {
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  redDark,
  themePrimary,
  white
} from '../../theme/color.css'

const backgroundDisabledColor = neutralLighter

const borderColor = neutralSecondary
const borderHoverColor = neutralPrimary
const borderFocusColor = themePrimary
const borderInvalidColor = redDark

export default css`
  :host {
    display: block;
  }

  #root {
    ${normalize}
    ${fontStyle.medium};
    position: relative;
  }

  :host([disabled]) #root {
    pointer-events: none;
  }

  ${getLabelStyle('#label')}

  #fieldGroup {
    ${normalize};
    border: 0;
    background: ${white};
    min-height: 32px;
    display: flex;
    flex-direction: row;
    position: relative;
  }

  :host([disabled]) #fieldGroup {
    background-color: ${backgroundDisabledColor};
  }

  :host(:not([disabled]):not([underlined]):not([borderless]))
    #fieldGroup::after {
    ${getBorderCss({ color: borderColor })}
  }

  :host(:not([disabled]):not([borderless])) #fieldGroup:hover::after {
    border-color: ${borderHoverColor};
  }

  :host(:not([disabled]):not([underlined]):not([borderless]):not([open]))
    #fieldGroup:focus-within::after {
    ${getBorderCss({ color: borderFocusColor, width: 2 })}
  }

  :host(:not([disabled]):not([underlined]):not([borderless]))
    #root.invalid
    #fieldGroup::after {
    border-color: ${borderInvalidColor};
  }

  #description {
    color: ${neutralSecondary};
    ${fontSize.xSmall};
  }

  #errorMessage {
    ${fontSize.small};
    color: ${redDark};
    margin: 0;
    padding-top: 5px;
    display: flex;
    align-items: center;
  }

  :host(:not([underlined])) #root.requiredPlaceholder #elementWrapper::after {
    content: '*';
    color: ${redDark};
    position: absolute;
    top: -5px;
    right: -10px;
  }

  /* Underlined */

  :host([underlined]) #elementWrapper {
    text-overflow: ellipsis;
    position: relative;
    display: flex;
  }

  :host([underlined]) #label {
    margin-right: 8px;
    padding-left: 12px;
    line-height: 22px;
    height: 32px;
  }

  :host([underlined][required]) #label {
    position: relative;
    margin-right: 10px;
  }

  :host([underlined][required]) #label::after {
    position: absolute;
    right: -20px;
  }

  :host([underlined]) #fieldWrapper {
    position: relative;
    flex: 1 1 0px;
    max-width: 100%;
    width: 0%;
  }

  :host([underlined]) #root.requiredPlaceholder #fieldGroup::after {
    content: '*';
    color: ${redDark};
    position: absolute;
    top: -5px;
    right: -10px;
  }

  :host([underlined]) #elementWrapper::after {
    ${getBorderCss({ color: borderColor, type: 'borderBottom' })}
  }

  :host([underlined]:not([disabled]):not([open]))
    #elementWrapper:focus-within::after {
    ${getBorderCss({ color: borderFocusColor, width: 2, type: 'borderBottom' })}
  }

  :host([underlined]:not([disabled])) #root.invalid #elementWrapper::after {
    border-color: ${borderInvalidColor};
  }

  :host([underlined][disabled]) #elementWrapper::after {
    border-color: ${backgroundDisabledColor};
  }

  #dropdown {
    ${normalize};
    display: none;
    position: absolute;
    width: 100%;
    z-index: 400;
    user-select: none;
  }

  :host([open]) #dropdown {
    display: flex;
  }

  ${slideDownIn20}
`
