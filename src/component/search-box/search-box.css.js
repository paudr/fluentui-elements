import { css } from 'lit-element'

import { iconCss } from '../../theme/mixins.css'
import { iconFontSize } from '../../theme/typografy.css'
import {
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  themePrimary,
  white
} from '../../theme/color.css'

export default css`
  #fieldGroup {
    padding: 1px 0px 1px 4px;
  }

  i {
    ${iconCss}
  }

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

  #fieldGroup:focus-within #icon {
    width: 4px;
  }

  #icon i {
    opacity: 1;
  }

  :host(:not([disableAnimation])) #icon i {
    transition: opacity 0.167s ease 0s;
  }

  #fieldGroup:focus-within #icon i {
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
    outline: 0;
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
    outline: 0;
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

  :host([disabled]) i {
    color: ${neutralTertiary};
  }

  :host([underlined][disabled]) #fieldGroup {
    background-color: ${white};
  }
`
