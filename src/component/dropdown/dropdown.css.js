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
  neutralLight,
  neutralLighter,
  neutralPrimary,
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
    border: 1px solid ${neutralSecondary};
    border-radius: 2px;
    overflow: hidden;
  }

  #caret {
    position: absolute;
    top: 1px;
    right: 8px;
    height: 32px;
    line-height: 30px;
    cursor: pointer;
  }

  i {
    ${iconCss};
    color: ${neutralSecondary};
    font-size: 12px;
    pointer-events: none;
  }

  ${getFocusStyle('#container:not(.open):focus #title', {
    color: themePrimary,
    radius: css`2px`
  })}

  #container:hover #title {
    border-color: ${neutralPrimary}
  }

  #container.open #title {
    border-color: ${neutralSecondary}
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

  #container.invalid #title {
    border-color: ${redDark};
  }

  #container.disabled #title {
    background: ${neutralLighter};
    border-color: ${neutralLighter};
    cursor: default;
  }

  ${getFocusStyle('#container.invalid:not(.open):focus #title', {
    color: redDark,
    radius: css`2px`
  })}

  ${slideDownIn20}
`
