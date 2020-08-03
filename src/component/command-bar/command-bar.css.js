import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import {
  fontFamily,
  fontStyle,
  fontWeight,
  fontSize,
  iconFontSize
} from '../../theme/typografy.css'
import {
  neutralLight,
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  themePrimary,
  white
} from '../../theme/color.css'

export default css`
  i {
    ${iconCss}
  }

  #root {
    ${fontStyle.medium};
    display: flex;
    background-color: ${white};
    padding: 0px 14px 0px 24px;
    height: 44px;
  }

  #root > div {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
  }

  #root > div:first-child {
    flex-grow: 1;
  }

  #root > div:last-child {
    flex-shrink: 0;
  }

  .commandButton {
    ${fontStyle.medium};
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 0px 4px 0px 4px;
    min-width: 40px;
    background-color: ${white};
    color: ${neutralPrimary};
    height: 100%;
    user-select: none;
    outline: transparent;
    border: 0;
    text-decoration: none;
  }

  .commandButton:hover {
    background-color: ${neutralLighter};
  }

  .commandButton:active {
    background-color: ${neutralLight};
  }

  .contextualPanel .commandButton,
  .contextualPanel .splitButton {
    position: relative;
    box-sizing: border-box;
    width: 100%;
  }

  .commandItem {
    position: relative;
    flex-shrink: 0;
    display: block;
  }

  .contextualPanel .commandItem {
    box-sizing: border-box;
    height: 36px;
  }

  .commandButton > span {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .commandButton .icon {
    ${iconFontSize.medium};
    margin: 0px 4px 0px 4px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    flex-shrink: 0;
    color: ${themePrimary};
  }

  .empty {
    display: inline-block;
    min-height: 1px;
    max-height: 36px;
    font-size: 16px;
    width: 16px;
    margin: 0px 4px 0px 4px;
    vertical-align: middle;
    flex-shrink: 0;
  }

  .commandButton .text {
    flex-grow: 1;
    display: block;
    text-align: left;
  }

  .commandButton .text > span {
    ${normalize};
    ${fontFamily.base};
    ${fontSize.medium};
    ${fontWeight.regular};
    color: ${neutralPrimary};
    box-sizing: border-box;
    display: block;
    padding: 5px 0;
    margin: 0px 4px 0px 4px;
    line-height: 100%;
    display: block;
    white-space: nowrap;
  }

  .commandButton .expand {
    ${iconFontSize.small};
    margin: 0px 4px 0px 4px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    flex-shrink: 0;
    color: ${neutralSecondary};
  }

  .splitButton {
    position: relative;
    display: inline-flex;
    height: 100%;
    outline: transparent;
  }

  .contextualPanel .splitButton > span {
    width: 100%;
  }

  .splitButton .commandButton {
    position: relative;
    display: inline-flex;
    height: 100%;
    outline: transparent;
  }

  .splitButton .commandButton:last-of-type {
    padding: 6px 6px 6px 6px;
    height: auto;
    vertical-align: top;
    min-width: 32px;
    width: 32px;
    margin: 0px 0px 0px -1px;
  }

  .splitButton .divisor {
    position: absolute;
    width: 1px;
    right: 31px;
    top: 8px;
    bottom: 8px;
    background-color: rgb(200, 198, 196);
  }

  .contextualPanel {
    display: block;
    position: absolute;
    background-color: ${white};
    z-index: 100;
    min-width: 180px;
    box-shadow: rgba(0, 0, 0, 0.133) 0px 3.2px 7.2px 0px,
      rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px 0px;
  }

  .contextualPanel.right {
    position: absolute;
    top: 0px;
    left: 100%;
  }

  .contextualPanel ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .divider {
    display: block;
    height: 1px;
    background-color: rgb(237, 235, 233);
    position: relative;
  }

  .contextTitle {
    ${fontSize.small};
    font-weight: 600;
    color: ${themePrimary};
    height: 36px;
    line-height: 36px;
    cursor: default;
    padding: 0px 6px 0px 6px;
    text-align: left;
    user-select: none;
    background: none transparent;
    border: 0;
  }

  .contextTitle div {
    white-space: nowrap;
    height: inherit;
    display: flex;
    align-items: center;
    max-width: 100%;
  }

  .contextTitle span {
    margin: 0px 4px 0px 4px;
    vertical-align: middle;
    display: inline-block;
    flex-grow: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
