import { css } from 'lit-element'

import {
  normalize,
  iconCss,
  getLabelStyle,
  getFocusStyle
} from '../../theme/mixins.css'
import {
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  themePrimary,
  white
} from '../../theme/color.css'
import { fontSize } from '../../theme/typografy.css'

const defaultHeight = 32

export default css`
  i {
    ${iconCss}
  }

  ${getLabelStyle('label')}

  #root {
    outline: none;
    ${fontSize.medium};
    width: 100%;
  }

  #labelWrapper {
    display: inline-flex;
    align-items: center;
  }

  :host([labelPosition="start"]) #labelWrapper {
    margin-right: 10px;
  }

  :host([labelPosition="end"]) #labelWrapper {
    margin-left: 10px;
  }

  :host([labelPosition="start"]) #labelWrapper,
  :host([labelPosition="end"]) #labelWrapper {
    height: ${defaultHeight}px;
  }

  #labelWrapper i {
    padding: 0px 5px;
    font-size: 20px;
  }

  :host([labelPosition="end"]) #labelWrapper i {
    padding-left: 0px
  }

  :host([labelPosition="start"]) #labelWrapper {
    float: left;
  }

  :host([labelPosition="end"]) #labelWrapper {
    float: right;
  }

  #fieldWrapper {
    display: flex;
    position: relative;
    box-sizing: border-box;
    height: ${defaultHeight}px;
    border: 0px solid transparent;
    border-radius: 2px;
  }

  ${getFocusStyle('#fieldWrapper', {
    color: neutralSecondary,
    position: css`0px`,
    width: css`1px`,
    radius: css`2px`
  })}

  ${getFocusStyle('#fieldWrapper:focus-within', {
    color: themePrimary,
    radius: css`2px`
  })}

  #fieldWrapper > input {
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

  :host([disabled]) #fieldWrapper > input,
  :host([disabled]) #arrowBox button {
    background-color: ${neutralLighter};
  }

  ${getFocusStyle(':host([disabled]) #fieldWrapper', {
    color: neutralTertiary,
    position: css`0px`,
    width: css`1px`,
    radius: css`2px`
  })}

  :host([disabled]) i {
    color: ${neutralTertiary};
  }

  :host([disabled]) #fieldWrapper::after {
    border-color: ${neutralLighter};
  }
`
