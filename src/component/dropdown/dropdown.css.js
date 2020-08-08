import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import { neutralLighter, neutralSecondary, white } from '../../theme/color.css'

export default css`
  #container {
    ${normalize};
    ${fontStyle.medium};
    width: 100%;
    max-width: 100%;
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
    border: 0px solid transparent;
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

  :host([disabled]) #title {
    background: ${neutralLighter};
    border-color: ${neutralLighter};
    cursor: default;
  }
`
