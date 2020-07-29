import { css } from 'lit-element'

import {
  normalize,
  iconCss,
  getLabelStyle,
  getFocusStyle
} from '../../theme/mixins.css'
import { fontStyle, fontSize } from '../../theme/typografy.css'
import {
  redDark,
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  themePrimary,
  white
} from '../../theme/color.css'
import { slideDownIn20 } from '../../theme/animation.css'

const backgroundColor = white
const backgroundDisabledColor = neutralLighter

const borderColor = neutralSecondary
const borderDisabledColor = white
const borderHoverColor = neutralPrimary
const borderFocusColor = themePrimary
const borderErrorColor = redDark

const textColor = neutralPrimary
const textDisabledColor = neutralTertiary

const placeholderColor = neutralSecondary
const placeholderDisabledColor = neutralTertiary

const descriptionColor = neutralSecondary
const errorColor = redDark

export default css`
  :host {
    display: block;
  }

  #root {
    ${normalize};
    ${fontStyle.medium};
    position: relative;
  }

  ${getLabelStyle('label')}

  /* Normal field */

  #fieldGroup {
    ${normalize};
    border: 1px solid ${borderColor};
    border-radius: 2px;
    background: ${backgroundColor};
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: relative;
    cursor: text;
  }

  #fieldGroup:hover {
    border-color: ${borderHoverColor};
  }

  #field {
    ${normalize};
    border-radius: 0;
    padding: 0px 8px;
    color: ${textColor};
    width: 100%;
    min-width: 0px;
    text-overflow: ellipsis;
    border: none;
    border-radius: 0px;
    border-style: none;
    background: none transparent;
    outline: 0px;
  }

  #field::placeholder {
    color: ${placeholderColor};
    opacity: 1;
  }

  #description {
    color: ${descriptionColor};
    ${fontSize.xSmall};
  }

  #errorMessage {
    ${fontSize.small};
    color: ${errorColor};
    margin: 0;
    padding-top: 5px;
    display: flex;
    align-items: center;
  }

  #root.requiredPlaceholder #fieldGroup::after {
    content: '*';
    color: ${redDark};
    position: absolute;
    top: -5px;
    right: -10px;
  }

  /* Normal field -> focused  */

  ${getFocusStyle(
    '#root:not(.underlined):not(.borderless):focus-within #fieldGroup',
    {
      color: borderFocusColor,
      radius: css`2px`
    }
  )}

  /* Normal field -> invalid  */

  #root.invalid #fieldGroup {
    border-color: ${borderErrorColor};
  }

  ${getFocusStyle(
    '#root.invalid:not(.underlined):not(.borderless):focus-within #fieldGroup',
    {
      color: borderErrorColor,
      radius: css`2px`
    }
  )}

  /* Normal field -> disabled */

  :host([disabled]) #fieldGroup {
    background-color: ${backgroundDisabledColor};
    border-color: ${borderDisabledColor};
    cursor: auto;
  }

  :host([disabled]) #field::placeholder {
    color: ${placeholderDisabledColor};
  }

  /* Normal field -> hasIcon */

  #field.hasIcon {
    padding-right: 24px;
  }

  i {
    ${iconCss};
    pointer-events: none;
    position: absolute;
    bottom: 6px;
    right: 8px;
    top: auto;
    font-size: 16px;
    line-height: 18px;
    color: ${neutralPrimary};
  }

  /* Normal field -> prefix/sufix */

  #prefix,
  #sufix {
    background: ${backgroundDisabledColor};
    color: ${textDisabledColor};
    display: flex;
    align-items: center;
    padding: 0 10px;
    line-height: 1px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Borderless field */

  #root.borderless #fieldGroup {
    border-color: transparent;
    border-width: 0;
  }

  /* Underlined field */

  #root.underlined {
    text-overflow: ellipsis;
  }

  #root.underlined #wrapper {
    position: relative;
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${borderColor};
  }

  #root.underlined label {
    margin-right: 8px;
    padding-left: 12px;
    line-height: 22px;
    height: 32px;
  }

  #root.underlined #fieldGroup {
    flex: 1 1 0px;
    border-width: 0;

    text-align: left;
  }

  /* Underlined field -> focused */

  ${getFocusStyle('#root.underlined:focus-within #wrapper', {
    color: borderFocusColor,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  /* Underlined field -> invalid */

  #root.underlined.invalid #wrapper {
    border-bottom: 1px solid ${borderErrorColor};
  }

  ${getFocusStyle('#root.underlined.invalid:focus-within #wrapper', {
    color: borderErrorColor,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  /* Underlined field -> disabled */

  :host([disabled]) #root.underlined #wrapper {
    border-color: ${backgroundDisabledColor};
  }

  :host([disabled]) #root.underlined #fieldGroup {
    background-color: transparent;
  }

  :host([disabled]) #root.underlined #field {
    background-color: ${backgroundDisabledColor};
    color: ${textDisabledColor};
  }

  /* Multiline field */

  :host([multiline]) #fieldGroup {
    height: auto;
    min-height: 60px;
  }

  :host([multiline]) #field {
    padding: 6px 8px;
    min-height: inherit;
    line-height: 17px;
    flex-grow: 1;
    outline: 0px;
    overflow: auto;
  }

  /* Multiline field -> hasIcon */

  :host([multiline]) #field.hasIcon {
    padding-right: 40px;
  }

  :host([multiline]) i {
    padding-right: 24px;
  }

  /* Multiline field -> unresizable */

  :host([multiline]) #field.unresizable {
    resize: none;
  }

  ${slideDownIn20}
`
