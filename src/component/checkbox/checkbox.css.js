import { css } from 'lit-element'

import { iconCss } from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import {
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  neutralTertiaryAlt,
  themeDark,
  themePrimary,
  white
} from '../../theme/color.css'

const transitionDuration = css`200ms`
const transitionTiming = css`cubic-bezier(0.4, 0, 0.23, 1)`

export default css`
  label {
    ${fontStyle.medium}
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    position: relative;
    user-select: none;
  }

  div {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    transition-property: background, border, border-color;
    transition-duration: ${transitionDuration};
    transition-timing-function: ${transitionTiming};
    margin-right: 4px;
    border: 1px solid ${neutralPrimary};
    border-radius: 2px;
    overflow: hidden;
  }

  i {
    ${iconCss}
    opacity: 0;
    color: ${white};
  }

  span {
    ${fontStyle.medium};
    color: ${neutralPrimary};
    line-height: 20px;
    margin-left: 4px;
  }

  label.checked div {
    background: ${themePrimary};
    border-color: ${themePrimary};
  }

  label.checked i {
    opacity: 1;
  }

  :host([indeterminate]) label div {
    border-color: ${themePrimary};
  }

  :host([indeterminate]) label div::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 4px;
    left: 4px;
    box-sizing: border-box;
    transition-property: border-width, border, border-color;
    transition-duration: ${transitionDuration};
    transition-timing-function: ${transitionTiming};
    border-radius: 2px;
    border-width: 5px;
    border-style: solid;
    border-color: ${themePrimary};
  }

  :host([disabled]) label {
    cursor: default;
  }

  :host([disabled]) label div {
    border-color: ${neutralTertiaryAlt};
  }

  :host([disabled]) label.checked div {
    background: ${neutralTertiaryAlt};
    border-color: ${neutralTertiaryAlt};
  }

  :host([disabled]) label span {
    color: ${neutralTertiary};
  }

  :host([indeterminate][disabled]) label div,
  :host([indeterminate][disabled]) label div::after {
    border-color: ${neutralTertiaryAlt};
  }

  :host(:not([indeterminate]):not([disabled]) label:not(.checked):hover i {
    color: ${neutralSecondary};
    opacity: 1;
  }

  :host(:not([disabled]) label.checked:hover div {
    background: ${themeDark};
    border-color: ${themeDark};
  }

  :host([indeterminate]:not(.disabled)) label:hover div,
  :host([indeterminate]:not(.disabled)) label:hover div:after {
    border-color: ${themeDark};
  }
`
