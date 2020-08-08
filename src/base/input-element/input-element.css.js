import { css } from 'lit-element'

import { fontStyle, fontSize } from '../../theme/typografy.css'
import { slideDownIn20 } from '../../theme/animation.css'
import { normalize, getFocusStyle, getLabelStyle } from '../../theme/mixins.css'
import {
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  redDark,
  themePrimary,
  white
} from '../../theme/color.css'

const backgroundDisabledColor = neutralLighter

const borderColor = neutralSecondary
const borderHoverColor = neutralPrimary
const borderFocusColor = themePrimary
const borderInvalidColor = redDark

export default css`
  :host {
    display: block;
  }

  #root {
    ${normalize}
    ${fontStyle.medium};
    position: relative;
  }

  ${getLabelStyle('#label')}

  #fieldGroup {
    ${normalize};
    border: 0px solid transparent;
    border-radius: 2px;
    background: ${white};
    height: 32px;
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: text;
  }

  :host([disabled]) #fieldGroup {
    background-color: ${backgroundDisabledColor};
    cursor: auto;
  }

  ${getFocusStyle(
    ':host(:not([disabled]):not([underlined]):not([borderless])) #fieldGroup',
    {
      color: borderColor,
      position: css`0px`,
      width: css`1px`,
      radius: css`2px`
    }
  )}

  ${getFocusStyle(
    ':host(:not([disabled]):not([underlined]):not([borderless])) #fieldGroup:hover',
    {
      color: borderHoverColor,
      position: css`0px`,
      width: css`1px`,
      radius: css`2px`
    }
  )}

  ${getFocusStyle(
    ':host(:not([disabled]):not([underlined]):not([borderless])) #fieldGroup:focus-within',
    {
      color: borderFocusColor,
      radius: css`2px`
    }
  )}

  ${getFocusStyle(
    ':host(:not([disabled]):not([underlined]):not([borderless])) #root.invalid #fieldGroup',
    {
      color: borderInvalidColor,
      position: css`0px`,
      width: css`1px`,
      radius: css`2px`
    }
  )}

  ${getFocusStyle(
    ':host(:not([disabled]):not([underlined]):not([borderless])) #root.invalid #fieldGroup:focus-within',
    {
      color: borderInvalidColor,
      radius: css`2px`
    }
  )}

  #description {
    color: ${neutralSecondary};
    ${fontSize.xSmall};
  }

  #errorMessage {
    ${fontSize.small};
    color: ${redDark};
    margin: 0;
    padding-top: 5px;
    display: flex;
    align-items: center;
  }

  :host(:not([underlined])) #root.requiredPlaceholder #wrapper::after {
    content: '*';
    color: ${redDark};
    position: absolute;
    top: -5px;
    right: -10px;
  }

  /* Underlined */

  :host([underlined]) #wrapper {
    text-overflow: ellipsis;
    position: relative;
    display: flex;
    width: 100%;
  }
  
  :host([underlined]) #label {
    margin-right: 8px;
    padding-left: 12px;
    line-height: 22px;
    height: 32px;
  }
  
  :host([underlined]) #root #fieldGroup {
    flex: 1 1 0px;
    border-width: 0;
    text-align: left;
  }

  :host([underlined]) #root.requiredPlaceholder #fieldGroup::after {
    content: '*';
    color: ${redDark};
    position: absolute;
    top: -5px;
    right: -10px;
  }

  ${getFocusStyle(':host([underlined]) #wrapper', {
    color: borderColor,
    width: css`1px`,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  ${getFocusStyle(':host([underlined]) #wrapper:focus-within', {
    color: borderFocusColor,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  ${getFocusStyle(':host([underlined]) #root.invalid #wrapper', {
    color: borderInvalidColor,
    width: css`1px`,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  ${getFocusStyle(':host([underlined]) #root.invalid #wrapper:focus-within', {
    color: borderInvalidColor,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  ${getFocusStyle(':host([underlined][disabled]) #wrapper', {
    color: backgroundDisabledColor,
    width: css`1px`,
    radius: css`0px`,
    type: 'borderBottom'
  })}

  ${slideDownIn20}
`
