import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import {
  blackTranslucent40,
  neutralLight,
  neutralSecondary,
  white
} from '../../theme/color.css'

export default css`
  #container {
    ${normalize};
    ${fontStyle.medium};
    flex: 1 1 0px;
    max-width: 100%;
    color: ${neutralSecondary};
    display: block;
    user-select: none;
    outline: 0;
  }

  #title {
    ${normalize};
    padding: 0px 28px 0px 8px;
    cursor: pointer;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 32px;
    line-height: 30px;
    position: relative;
    color: ${neutralSecondary};
    border: 0;
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

  fluent-select {
    flex: 1 1 0px;
    background-color: ${white};
    box-shadow: 0 0px 15px -5px ${blackTranslucent40};
    border: 1px solid ${neutralLight};
  }
`
