import { css } from 'lit-element'

import { getLabelStyle } from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import {
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  themeDark,
  themePrimary,
  white
} from '../../theme/color.css'

const choiceFieldSize = 20

export default css`
  ${getLabelStyle('#label')}

  #container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${fontStyle.medium};
    color: ${neutralPrimary};
    margin: 0;
    padding: 0;
    border: 0;
  }

  #container > div {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: ${neutralPrimary};
    min-height: 26px;
    position: relative;
    margin-top: 8px;
  }

  .field {
    color: ${neutralPrimary};
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }

  .field label {
    display: inline-block;
    cursor: pointer;
    margin-top: 0;
    position: relative;
    vertical-align: top;
    user-select: none;
    min-height: 20px;
  }

  .field label::before {
    content: '';
    display: inline-block;
    background-color: ${white};
    border: 1px solid ${neutralPrimary};
    width: ${choiceFieldSize}px;
    height: ${choiceFieldSize}px;
    font-weight: normal;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    transition: border-color 200ms cubic-bezier(0.4, 0, 0.23, 1);
    border-radius: 50%;
  }

  .field label::after {
    content: '';
    width: 0;
    height: 0;
    border-radius: 50%;
    position: absolute;
    left: ${choiceFieldSize / 2}px;
    right: 0;
    transition: border-width 200ms cubic-bezier(0.4, 0, 0.23, 1);
    box-sizing: border-box;
  }

  .field:not(.disabled) label:hover::after {
    border: 5px solid ${neutralSecondary};
    left: 5px;
    top: 5px;
    width: 10px;
    height: 10px;
  }

  .field label span {
    display: inline-block;
    padding-left: 26px;
  }

  .field.checked label::before {
    border-color: ${themePrimary};
  }

  .field.checked label::after {
    border: 5px solid ${themePrimary};
    left: 5px;
    top: 5px;
    width: 10px;
    height: 10px;
  }

  .field.checked:not(.disabled) label:hover::before,
  .field.checked:not(.disabled) label:hover::after {
    border-color: ${themeDark};
  }

  .field.disabled {
    color: ${neutralTertiary};
  }

  .field.disabled label {
    cursor: default;
  }

  .field.disabled label::before,
  .field.checked.disabled label::before,
  .field.checked.disabled label::after {
    border-color: ${neutralTertiary};
  }

  :host([inRow]) #container {
    flex-direction: row;
  }

  :host([inRow]) #container > div {
    margin: 8px 16px 0 0;
  }
`
