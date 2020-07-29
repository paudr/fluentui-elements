import { css } from 'lit-element'

import {
  normalize,
  getLabelStyle,
  getFocusStyle,
  iconCss
} from '../../theme/mixins.css'
import { fontSize, fontStyle } from '../../theme/typografy.css'
import {
  redDark,
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  themePrimary,
  white
} from '../../theme/color.css'
import { slideDownIn20 } from '../../theme/animation.css'

export default css`
  :host {
    display: block;
  }

  ${getLabelStyle('label')}

  #wrapper {
    ${fontStyle.medium}
    ${normalize}
    position: relative;
  }

  #fieldGroup {
    ${normalize}
    cursor: text;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: relative;
    border: 1px solid ${neutralSecondary};
    border-radius: 2px;
    background: ${white};
  }

  ${getFocusStyle('#fieldGroup:focus-within', {
    color: themePrimary,
    radius: css`2px`
  })}

  #field {
    ${fontStyle.medium}
    ${normalize}
    padding: 0px 24px 0px 8px;
    color: ${neutralPrimary};
    width: 100%;
    min-width: 0px;
    text-overflow: ellipsis;
    border-width: 0px;
    background: none transparent;
    outline: 0px;
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

  #calendar {
    display: block;
    position: absolute;
    z-index: 400;
    box-shadow: rgba(0, 0, 0, 0.133) 0px 3.2px 7.2px 0px, rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px 0px;
  }

  #description {
    color: ${neutralSecondary};
    ${fontSize.xSmall};
  }

  #errorMessage {
    ${fontStyle.small}
    color: ${redDark};
    padding-top: 5px;
  }

  .invalid #fieldGroup {
    border-color: ${redDark}
  }

  ${getFocusStyle('.invalid #fieldGroup:focus-within', {
    color: redDark,
    radius: css`2px`
  })}

  :host([notWritable]) #field {
    cursor: pointer;
  }

  :host([disabled]) #fieldGroup {
    border-color: ${neutralLighter};
    background-color: ${neutralLighter};
  }

  :host([disabled]) #field {
    cursor: default;
    color: ${neutralTertiary};
  }

  :host([disabled]) i {
    cursor: default;
    color: ${neutralTertiary};
    pointer-events: none;
  }

  ${slideDownIn20}
`
