import { css } from 'lit-element'
import {
  fontStyle,
  fontWeight,
  fontSize,
  iconFontSize
} from '../../../theme/typografy.css'
import {
  neutralDark,
  neutralLight,
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  neutralSecondaryAlt,
  white
} from '../../../theme/color.css'
import { iconCss } from '../../../theme/mixins.css'

export default css`
  :host() {
    display: inline-block;
  }

  #root {
    ${fontStyle.medium}
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    height: 32px;
    min-width: 80px;
    padding: 0 16px;
    color: ${neutralPrimary};
    background-color: ${white};
    border: 1px solid ${neutralSecondaryAlt};
    user-select: none;
    outline: transparent;
    text-decoration: none;
    border-radius: 2px;
  }

  #root:hover {
    background-color: ${neutralLighter};
    color: ${neutralDark};
  }

  :host([checked]) #root,
  #root:active {
    background-color: ${neutralLight};
    color: ${neutralDark};
  }

  #container {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  #textContainer {
    flex-grow: 1;
    display: block;
  }

  #label {
    display: block;
    margin: 0px 4px;
    line-height: 100%;
    ${fontWeight.semibold}
  }

  #description {
    display: block;
    ${fontSize.small};
    font-weight: 400;
    line-height: 100%;
    color: ${neutralSecondary};
  }

  i {
    ${iconCss};
    ${iconFontSize.medium};
    margin: 0px 4px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    flex-shrink: 0;
  }
`
