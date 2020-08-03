import { css } from 'lit-element'

import {
  normalize,
  iconCss,
  getLabelStyle,
  getFocusStyle
} from '../../theme/mixins.css'
import { fontStyle, iconFontSize } from '../../theme/typografy.css'
import {
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  themePrimary,
  white
} from '../../theme/color.css'

export default css`
  :host {
    display: block;
  }

  i {
    ${iconCss}
  }

  ${getLabelStyle('label')}

  #root {
    ${normalize}
    ${fontStyle.medium};
    position: relative;
    padding: 1px 0px 1px 4px;
    color: ${neutralPrimary};
    background-color: ${white};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    height: 32px;
    border-radius: 2px;
    border: 1px solid ${neutralSecondary};
    border-image: initial;
  }

  ${getFocusStyle('#root:not(.underlined):focus-within', {
    color: themePrimary,
    radius: css`2px`
  })}

  #icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    ${iconFontSize.medium};
    width: 32px;
    text-align: center;
    color: ${themePrimary};
    cursor: text;
  }

  :host(:not([disableAnimation])) #icon {
    transition: width 0.167s ease 0s;
  }

  #root:focus-within #icon {
    width: 4px;
  }

  #icon i {
    opacity: 1;
  }

  :host(:not([disableAnimation])) #icon i {
    transition: opacity 0.167s ease 0s;
  }

  #root:focus-within #icon i {
    opacity: 0;
  }

  #field {
    box-shadow: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    padding-bottom: 0.5px;
    background-color: transparent;
    color: ${neutralPrimary};
    min-width: 0px;
    text-overflow: ellipsis;
    border: 0;
    outline: none;
    flex: 1 1 0px;
    overflow: hidden;
  }

  #clear {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    cursor: pointer;
    flex-basis: 32px;
    flex-shrink: 0;
    padding: 0;
    margin: -1px 0px;
  }

  #clear button {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 0px 4px;
    width: 32px;
    height: auto;
    background-color: transparent;
    user-select: none;
    outline: transparent;
    border: 0;
    text-decoration: none;
  }

  #clear span {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: ${neutralSecondary};
  }

  #root.underlined {
    padding: 1px 0px 1px 8px;
    border-radius: 0px;
    border-style: solid;
    border-color: ${neutralSecondary};
    border-width: 0px 0px 1px;
  }

  ${getFocusStyle(':host([underlined]) #root:focus-within', {
    color: themePrimary,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  :host([disabled]:not([underlined])) #root {
    background-color: ${neutralLighter};
    border-color: ${neutralLighter};
  }

  :host([disabled]) #root i {
    color: ${neutralTertiary};
  }

  :host([disabled][underlined]) #root {
    border-color: ${neutralLighter};
  }
`
