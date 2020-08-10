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

  ${getLabelStyle('#label')}

  #fieldGroup {
    ${normalize};
    border: 0px solid transparent;
    border-radius: 2px;
    background: ${white};
    height: 32px;
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: text;
  }

  :host([disabled]) #fieldGroup {
    background-color: ${backgroundDisabledColor};
    cursor: auto;
  }

  :host(:not([disabled]):not([underlined]):not([borderless]))
    #fieldGroup::after {
    ${getBorderCss({ color: borderColor })}
  }

  :host(:not([disabled]):not([underlined]):not([borderless]))
    #fieldGroup:hover::after {
    border-color: ${borderHoverColor};
  }

  :host(:not([disabled]):not([underlined]):not([borderless]))
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

  :host(:not([underlined])) #root.requiredPlaceholder #wrapper::after {
    content: '*';
    color: ${redDark};
    position: absolute;
    top: -5px;
    right: -10px;
  }

  /* Underlined */

  :host([underlined]) #wrapper {
    text-overflow: ellipsis;
    position: relative;
    display: flex;
    width: 100%;
  }

  :host([underlined]) #label {
    margin-right: 8px;
    padding-left: 12px;
    line-height: 22px;
    height: 32px;
  }

  :host([underlined][required]) #label {
    position: relative;
    padding-right: 2px;
  }

  :host([underlined][required]) #label::after {
    position: absolute;
    right: -20px;
  }

  :host([underlined]) #root #fieldGroup {
    flex: 1 1 0px;
    border-width: 0;
    text-align: left;
  }

  :host([underlined]) #root.requiredPlaceholder #fieldGroup::after {
    content: '*';
    color: ${redDark};
    position: absolute;
    top: -5px;
    right: -10px;
  }

  :host([underlined]) #wrapper::after {
    ${getBorderCss({ color: borderColor, type: 'borderBottom' })}
  }

  :host([underlined]) #wrapper:focus-within::after {
    ${getBorderCss({ color: borderFocusColor, width: 2, type: 'borderBottom' })}
  }

  :host([underlined]) #root.invalid #wrapper::after {
    border-color: ${borderInvalidColor};
  }

  :host([underlined][disabled]) #wrapper::after {
    border-color: ${backgroundDisabledColor};
  }

  ${slideDownIn20}
`
