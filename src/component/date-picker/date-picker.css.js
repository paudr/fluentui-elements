import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import { neutralPrimary, neutralSecondary } from '../../theme/color.css'

export default css`
  #field {
    ${fontStyle.medium}
    ${normalize}
    padding: 0px 24px 0px 8px;
    flex: 1 1 0px;
    color: ${neutralPrimary};
    text-overflow: ellipsis;
    border: 0;
    outline: 0;
    background: none transparent;
  }

  :host([notwritable]:not([disabled])) #field {
    cursor: pointer;
  }

  i {
    ${iconCss}
    color: ${neutralSecondary};
    font-size: 16px;
    line-height: 18px;
    position: absolute;
    right: 4px;
    padding: 7px 5px 5px 5px;
    cursor: pointer;
  }

  fluent-calendar {
    box-shadow: rgba(0, 0, 0, 0.133) 0px 3.2px 7.2px 0px,
      rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px 0px;
  }
`
