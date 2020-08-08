import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import {
  neutralLighter,
  neutralPrimary,
  neutralTertiary,
  white
} from '../../theme/color.css'

const defaultHeight = 32

export default css`
  i {
    ${iconCss}
  }

  #field {
    ${normalize}
    font-size: 14px;
    color: ${neutralPrimary};
    background-color: ${white};
    height: 100%;
    padding: 0px 8px 0px 9px;
    display: block;
    min-width: 61px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: text;
    user-select: text;
    border-style: none;
    flex: 1 1 0%;
    outline: 0px;
    overflow: hidden;
    border-radius: 2px 0px 0px 2px;
  }

  #arrowBox {
    display: block;
    height: 100%;
    cursor: default;
  }

  #arrowBox button {
    background: transparent;
    position: relative;
    outline: none;
    border: none;
    border-radius: 0 2px 0 0;
    display: block;
    width: 23px;
    height: 50%;
  }

  #arrowBox button.up {
    border-radius: 0px 2px 0px 0px;
  }

  #arrowBox button.down {
    border-radius: 0px 0px 2px 0px;
  }

  #arrowBox button:hover {
    background-color: ${neutralLighter};
  }

  #arrowBox i {
    display: inline-block;
    font-size: ${defaultHeight / 4}px;
    height: ${defaultHeight / 2}px;
    line-height: ${defaultHeight / 2}px;
    margin
  }

  :host([disabled]) #field,
  :host([disabled]) #arrowBox button {
    background-color: ${neutralLighter};
  }

  :host([disabled]) i {
    color: ${neutralTertiary};
  }

  :host([underlined]) #label {
    position: relative;
  }

  :host([underlined]) #label::after {
    position: absolute;
    top: 6px;
    right: -20px;
  }
`
