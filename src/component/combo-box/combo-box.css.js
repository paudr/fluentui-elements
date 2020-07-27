import { css } from 'lit-element'

import {
  normalize,
  iconCss,
  getLabelStyle,
  getFocusStyle
} from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import {
  blackTranslucent40,
  redDark,
  neutralDark,
  neutralLight,
  neutralLighter,
  neutralQuaternaryAlt,
  neutralSecondary,
  themePrimary,
  white
} from '../../theme/color.css'
import { slideDownIn20 } from '../../theme/animation.css'

export default css`
  ${getLabelStyle('label')}

  #container {
    position: relative;
    ${normalize};
    ${fontStyle.medium};
    color: ${neutralSecondary};
    user-select: none;
    outline: 0px;
  }

  #wrapper {
    position: relative;
    ${normalize};
    user-select: none;
    outline: 0px;
}

  ${getFocusStyle('#container:not(:focus-within) #wrapper', {
    color: neutralSecondary,
    width: css`1px`,
    radius: css`2px`
  })}

  ${getFocusStyle('#container:focus-within #wrapper', {
    color: themePrimary,
    radius: css`2px`
  })}

  ${getFocusStyle('#container:not(.open):focus-within #wrapper', {
    color: themePrimary,
    radius: css`2px`
  })}

  #title {
    ${normalize};
    padding: 0px 28px 0px 8px;
    background-color: ${white};
    cursor: pointer;
    display: block;
    height: 32px;
    line-height: 30px;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${neutralSecondary};
    border-radius: 2px;
    overflow: hidden;
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
    ${iconCss};
    font-size: 12px;
    margin: 0px 4px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    flex-shrink: 0;
  }

  .open #caret {
    color: ${neutralDark};
    background-color: ${neutralLight};
  }

  #caret:hover {
    color: ${neutralDark};
    background-color: ${neutralLighter};
    cursor: pointer;
  }

  .open #caret:hover {
    background-color: ${neutralQuaternaryAlt};
  }

  #items {
    ${normalize};
    background-color: ${white};
    display: none;
    position: absolute;
    width: 100%;
    z-index: 400;
    max-width: 100%;
    box-shadow: 0 0px 15px -5px ${blackTranslucent40};
    border: 1px solid ${neutralLight};
    user-select: none;
  }

  #container.open #items {
    display: block;
  }

  #errorMessage {
    ${fontStyle.small}
    color: ${redDark};
    padding-top: 5px;
  }

  :host([disabled]) #container #title {
    background: ${neutralLighter};
    border-color: ${neutralLighter};
    cursor: default;
  }

  ${getFocusStyle(':host([disabled]) #container #wrapper', {
    color: neutralLighter,
    width: css`1px`,
    radius: css`2px`
  })}


  ${getFocusStyle('#container.invalid:not(:focus-within) #wrapper', {
    color: redDark,
    width: css`1px`,
    radius: css`2px`
  })}

  ${getFocusStyle('#container.invalid:not(.open):focus-within #wrapper', {
    color: redDark,
    radius: css`2px`
  })}

  ${slideDownIn20}
`
