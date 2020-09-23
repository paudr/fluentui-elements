import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import {
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  neutralTertiary
} from '../../theme/color.css'
import { slideDownIn20 } from '../../theme/animation.css'

export default css`
  /* Normal field */

  #field {
    ${normalize};
    padding: 0px 8px;
    color: ${neutralPrimary};
    flex: 1 1 0px;
    min-width: 0px;
    text-overflow: ellipsis;
    border: 0;
    background: none transparent;
    outline: 0;
  }

  #field::placeholder {
    color: ${neutralSecondary};
    opacity: 1;
  }

  :host([disabled]) #field::placeholder {
    color: ${neutralTertiary};
  }

  #field.hasIcon {
    padding-right: 24px;
  }

  i {
    ${iconCss};
    user-select: none;
    position: absolute;
    bottom: 6px;
    right: 8px;
    top: auto;
    font-size: 16px;
    line-height: 18px;
    color: ${neutralPrimary};
  }

  #prefix,
  #sufix {
    background: ${neutralLighter};
    color: ${neutralTertiary};
    display: flex;
    align-items: center;
    padding: 0 10px;
    line-height: 1px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Multiline field */

  :host([multiline]) #fieldGroup {
    height: auto;
    min-height: 60px;
  }

  :host([multiline]) #field {
    padding: 6px 8px;
    min-height: inherit;
    line-height: 17px;
    flex-grow: 1;
    outline: 0;
    overflow: auto;
  }

  :host([multiline]) #field.hasIcon {
    padding-right: 40px;
  }

  :host([multiline]) i {
    padding-right: 24px;
  }

  :host([multiline]) #field.unresizable {
    resize: none;
  }

  ${slideDownIn20}
`
