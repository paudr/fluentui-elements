import { css } from 'lit-element'

import { getLabelStyle } from '../../theme/mixins.css'
import { fontStyle, iconFontSize, fontWeight } from '../../theme/typografy.css'
import {
  neutralSecondary,
  neutralTertiaryAlt,
  white,
  themePrimary
} from '../../theme/color.css'

export default css`
  ${getLabelStyle('#fieldLabel')}

  #root {
    ${fontStyle.medium};
    margin-bottom: 8px;
  }

  #container {
    display: inline-flex;
    position: relative;
  }

  button {
    position: relative;
    ${iconFontSize.large};
    box-sizing: border-box;
    width: 40px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 3px;
    outline: transparent;
    transition: all 0.1s ease 0s;
    border-radius: 10px;
    border: 1px solid ${neutralSecondary};
    background: ${white};
  }

  button.checked {
    justify-content: flex-end;
    background: ${themePrimary};
    border-color: transparent;
  }

  button span {
    display: block;
    width: 12px;
    height: 12px;
    background-color: ${neutralSecondary};
    box-sizing: border-box;
    border-radius: 50%;
    transition: all 0.1s ease 0s;
    border-color: transparent;
    border-width: 0.28em;
    border-style: solid;
  }

  button.checked span {
    background-color: ${white};
  }

  #stateText {
    padding: 0;
    margin: 0px 8px;
    ${fontWeight.regular};
    user-select: none;
  }

  :host([disabled]) button {
    cursor: default;
    border-color: ${neutralTertiaryAlt};
  }

  :host([disabled]) button.checked,
  :host([disabled]) button span {
    background-color: ${neutralTertiaryAlt};
  }

  :host([disabled]) button.checked span {
    background-color: ${white};
  }

  :host([disabled]) #stateText {
    color: ${neutralTertiaryAlt};
  }

  :host([inline]) #root {
    display: flex;
    align-items: center;
  }

  :host([inline]) #root > * {
    text-overflow: ellipsis;
  }

  :host([inline]) #root #fieldLabel {
    margin-right: 16px;
  }

  :host([inline]) #root.withoutText {
    align-items: center;
  }

  :host([inline]) #root.withoutText #fieldLabel {
    order: 1;
    margin-right: 0px;
    margin-left: 16px;
  }
`
