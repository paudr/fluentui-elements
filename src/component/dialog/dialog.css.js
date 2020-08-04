import { css } from 'lit-element'

import { iconCss } from '../../theme/mixins.css'
import { fontStyle, fontWeight } from '../../theme/typografy.css'
import {
  neutralDark,
  neutralLight,
  neutralPrimary,
  neutralSecondary,
  themePrimary,
  white
} from '../../theme/color.css'

export default css`
  #root {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 25.6px 57.6px 0px,
      rgba(0, 0, 0, 0.18) 0px 4.8px 14.4px 0px;
    background-color: ${white};
    box-sizing: border-box;
    position: relative;
    text-align: left;
    max-height: calc(100% - 32px);
    border-radius: 2px;
    outline: transparent solid 3px;
    overflow-y: auto;
  }

  #header {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }

  #title {
    ${fontStyle.xLarge};
    ${fontWeight.semibold};
    color: ${neutralPrimary};
    margin: 0px;
    min-height: 20px;
    padding: 16px 46px 20px 24px;
    line-height: normal;
  }

  #root.largeHeader {
    border-top: 4px solid ${themePrimary};
  }

  #root.largeHeader #title {
    color: ${themePrimary};
  }

  #topButton {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 15px 15px 0px 0px;
  }

  #topButton > button {
    position: relative;
    color: ${neutralPrimary};
    flex: 0 0 auto;
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 9px;
    width: 32px;
    height: 32px;
    background-color: transparent;
    user-select: none;
    outline: transparent;
    border-style: none;
    text-decoration: none;
    border-radius: 2px;
  }

  #topButton > button:hover,
  #topButton > button:active {
    color: ${neutralDark};
    background-color: ${neutralLight};
  }

  #topButton > button > i {
    ${iconCss}
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  #inner {
    padding: 0px 24px 24px 24px;
  }

  #subText {
    ${fontStyle.medium};
    margin: 0px 0px 24px 0px;
    color: ${neutralSecondary};
    line-height: 1.5;
    overflow-wrap: break-word;
  }

  #content {
    position: relative;
    width: 100%;
  }
`

export const overlay = css`
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
