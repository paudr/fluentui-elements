import { css } from 'lit-element'

import { iconCss } from '../../theme/mixins.css'
import { fontStyle, fontWeight } from '../../theme/typografy.css'
import {
  neutralDark,
  neutralLight,
  neutralPrimary,
  white
} from '../../theme/color.css'

export default css`
  #root {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: auto;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${white};
    box-shadow: rgba(0, 0, 0, 0.22) 0px 25.6px 57.6px 0px,
      rgba(0, 0, 0, 0.18) 0px 4.8px 14.4px 0px;
  }

  :host([type='extraSmall']) #root {
    width: 272px;
  }

  :host([type='small']) #root {
    width: 340px;
  }

  :host([type='medium']) #root {
    width: 592px;
  }

  :host([type='large']) #root {
    width: 644px;
  }

  :host([type='extraLarge']) #root {
    width: 940px;
  }

  :host([type='fluid']) #root {
    width: 100%;
  }

  :host([left]) #root {
    left: 0px;
    right: auto;
  }

  #commands {
    margin-top: 18px;
  }

  #navigation {
    display: flex;
    justify-content: flex-end;
  }

  #navigation > button {
    position: relative;
    font-size: 20px;
    font-weight: 400;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 0px 4px;
    width: 32px;
    height: 32px;
    background-color: transparent;
    color: ${neutralPrimary};
    margin-right: 14px;
    user-select: none;
    outline: transparent;
    border-style: none;
    text-decoration: none;
    border-radius: 2px;
  }

  #navigation > button:hover,
  #navigation > button:active {
    color: ${neutralDark};
    background-color: ${neutralLight};
  }

  #navigation > button > i {
    ${iconCss}
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  #header {
    padding: 0px 24px;
    align-self: flex-start;
  }

  #navigation #header {
    flex-grow: 1;
  }

  #header > div {
    ${fontStyle.xLarge};
    ${fontWeight.semibold};
    color: ${neutralPrimary};
    line-height: 27px;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  #contentInner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: hidden;
  }

  #scrollableContent {
    overflow-y: auto;
    flex-grow: 1;
  }

  #content {
    padding: 0px 24px 20px 24px;
  }

  #footer {
    flex-shrink: 0;
    border-top: 1px solid transparent;
    transition: opacity 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s;
  }

  #footerInner {
    padding: 16px 24px 16px 24px;
  }
`
