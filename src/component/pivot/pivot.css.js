import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import { fontStyle, fontSize, fontWeight } from '../../theme/typografy.css'
import {
  neutralDark,
  neutralLight,
  neutralLighter,
  neutralPrimary,
  themePrimary,
  white
} from '../../theme/color.css'

const animationDuration = css`0.267s`
const animationEaseFunction = css`cubic-bezier(0.1, 0.25, 0.75, 0.9)`

export default css`
  i {
    ${iconCss}
  }

  #root {
    border: 0;
    vertical-align: baseline;
    text-decoration: none;
    ${normalize};
    ${fontStyle.medium};
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
  }

  button {
    ${fontStyle.medium};
    ${fontWeight.semibold}
    display: inline-block;
    cursor: pointer;

    position: relative;

    border: 0;
    outline: transparent;
    white-space: nowrap;
    background: transparent;

    margin: 0 8px 0 0;
    padding: 0 8px;
    box-sizing: border-box;

    height: 44px;
    line-height: 44px;

    overflow: visible;
    text-transform: none;
    text-align: center;
    color: ${neutralPrimary};
    user-select: none;
  }

  button:hover {
    background-color: ${neutralLighter};
    color: ${neutralDark};
    cursor: pointer;
  }

  button:active {
    background-color: ${neutralLight};
  }

  button:before {
    content: '';
    background-color: transparent;
    position: absolute;
    bottom: 0px;
    height: 2px;
    left: 8px;
    right: 8px;
    transition: left ${animationDuration} ${animationEaseFunction} 0s,
      right ${animationDuration} ${animationEaseFunction} 0s;
  }

  button > span {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    cursor: pointer;

    height: 100%;
    white-space: nowrap;
    text-transform: none;
    color: rgb(50, 49, 48);
    user-select: none;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }

  button > span > span {
    white-space: nowrap;
    text-transform: none;
    text-align: center;
    cursor: pointer;
    color: ${neutralPrimary};
    user-select: none;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    flex: 0 1 100%;
  }

  .icon {
    margin-left: 0px;
  }

  .label {
    display: inline-block;
    vertical-align: top;
    margin-left: 0px;
  }

  .count {
    margin-left: 4px;
    display: inline-block;
    vertical-align: top;
  }

  button.selected:before {
    background-color: rgb(0, 120, 212);
  }

  button.selected:hover:before {
    left: 0px;
    right: 0px;
  }

  :host([large]) .label {
    ${fontSize.large}
  }

  :host([tabStyle]) button.selected {
    margin: 0;
    padding: 0 10px;
    color: ${white};
    background-color: ${themePrimary};
    vertical-align: top;
  }

  :host([tabStyle]) button:before {
    background-color: transparent;
    bottom: 0px;
    content: '';
    height: auto;
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    transition: none 0s ease 0s;
  }

  :host([tabStyle]) button.selected .icon,
  :host([tabStyle]) button.selected .label,
  :host([tabStyle]) button.selected .count {
    color: ${white};
  }
`
