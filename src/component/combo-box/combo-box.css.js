import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import {
  neutralDark,
  neutralLight,
  neutralLighter,
  neutralQuaternaryAlt,
  neutralSecondary,
  white
} from '../../theme/color.css'

export default css`
  #title {
    flex: 1 1 0px;
    ${normalize};
    padding: 0px 28px 0px 8px;
    cursor: pointer;
    display: block;
    height: 32px;
    line-height: 30px;
    position: relative;
    white-space: nowrap;
    color: ${neutralSecondary};
    border: 0px solid transparent;
  }

  fluent-autofill {
    background-color: ${white};
    ${normalize}
    width: 100%;
    height: 100%;
    border-style: none;
    outline: none;
  }

  #caret {
    position: absolute;
    ${fontStyle.small};
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    cursor: default;
    padding: 0px 4px;
    width: 32px;
    height: 100%;
    background-color: transparent;
    color: ${neutralSecondary};
    top: 0px;
    right: 0px;
    line-height: 30px;
    user-select: none;
    outline: transparent;
    border: 0px none transparent;
    text-decoration: none;
    border-radius: 2px;
  }

  #caret span {
    ${normalize}
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  #caret i {
    ${iconCss}
    font-size: 12px;
    margin: 0px 4px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    flex-shrink: 0;
  }

  :host([open]) #caret {
    color: ${neutralDark};
    background-color: ${neutralLight};
  }

  #caret:hover {
    color: ${neutralDark};
    background-color: ${neutralLighter};
    cursor: pointer;
  }

  :host([open]) #caret:hover {
    background-color: ${neutralQuaternaryAlt};
  }

  :host([disabled]) #title {
    cursor: default;
  }

  :host([disabled]) #caret {
    cursor: default;
    pointer-events: none;
    background-color: ${neutralLighter};
  }
`
