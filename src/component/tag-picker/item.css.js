import { css } from 'lit-element'

import { iconCss } from '../../theme/mixins.css'
import {
  neutralDark,
  neutralLight,
  neutralLighter,
  neutralPrimary,
  neutralQuaternaryAlt,
  neutralSecondary,
  themeDark,
  themePrimary,
  white
} from '../../theme/color.css'
import { fontStyle, iconFontSize } from '../../theme/typografy.css'

export default css`
  .item {
    ${fontStyle.medium}
    position: relative;
    box-sizing: content-box;
    flex-shrink: 1;
    margin: 2px;
    height: 26px;
    line-height: 26px;
    cursor: default;
    display: flex;
    flex-wrap: nowrap;
    max-width: 300px;
    min-width: 0px;
    color: ${neutralPrimary};
    user-select: none;
    outline: transparent;
    background: ${neutralLighter};
  }

  .item > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 30px;
    margin: 0px 8px;
    overflow: hidden;
  }

  .item > button {
    position: relative;
    ${fontStyle.medium}
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 0px 4px;
    width: 30px;
    height: 100%;
    background-color: transparent;
    color: ${neutralSecondary};
    user-select: none;
    outline: transparent;
    border: 0px none transparent;
    text-decoration: none;
    border-radius: 0px 2px 2px 0px;
    flex: 0 0 auto;
  }

  .item > button > span {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .item > button > span > i {
    ${iconCss}
    ${iconFontSize.small}
    margin: 0px 4px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    flex-shrink: 0;
  }

  .item:hover {
    color: ${neutralDark};
    background: ${neutralLight};
  }

  .item > button:hover {
    color: ${neutralPrimary};
    background: ${neutralQuaternaryAlt};
  }

  .item:focus {
    background: ${themePrimary};
    color: ${white};
  }

  .item:focus button {
    color: ${white};
  }

  .item:focus button:hover {
    background: ${themeDark};
  }

  :host([disabled]) .item,
  :host([disabled]) .item > button {
    cursor: default;
    pointer-events: none;
    background: ${neutralLight};
  }
`
