import { css } from 'lit-element'
import { fontStyle, fontWeight } from '../../theme/typografy.css'
import {
  neutralDark,
  neutralLight,
  neutralPrimary,
  neutralSecondary,
  neutralTertiary,
  neutralTertiaryAlt,
  themeDark,
  themePrimary,
  white
} from '../../theme/color.css'
import { iconCss, getFocusStyle } from '../../theme/mixins.css'

const OPTION_HEIGHT = css`36px`

export default css`
  :host {
    display: block;
  }

  #root {
    display: block;
    position: relative;
    outline: none;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .header {
    ${fontStyle.medium}
    ${fontWeight.semibold};
    color: ${themePrimary};
    height: ${OPTION_HEIGHT};
    line-height: ${OPTION_HEIGHT};
    cursor: default;
    padding: 0px 8px;
    text-align: left;
    user-select: none;
    background: transparent;
    border: none;
  }

  .header > span {
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 0px;
    max-width: 100%;
    overflow-wrap: break-word;
    margin-top: 1px;
    margin-right: 1px;
    margin-bottom: 1px;
    margin-left: 1px;
    overflow: hidden;
  }

  .header.disabled {
    color: ${neutralTertiary};
  }

  .divider {
    height: 1px;
    background-color: ${neutralLight};
  }

  .option {
    position: relative;
    display: flex;
    background-color: transparent;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 0px;
    min-height: ${OPTION_HEIGHT};
    line-height: 20px;
    overflow-wrap: break-word;
    border: 0px solid transparent;
  }

  button {
    ${fontStyle.medium}
    text-align: left;
    cursor: pointer;
    padding: 0px 8px;
    color: ${neutralPrimary};
    user-select: none;
    outline: transparent;
    text-decoration: none;
  }

  button:hover,
  button.selected:hover {
    color: ${themePrimary};
  }

  button.selected {
    color: ${neutralDark};
    background-color: ${neutralLight};
  }

  button.disabled {
    cursor: default;
    color: ${neutralTertiary};
    pointer-events: none;
  }

  .checkbox {
    padding: 0px;
  }

  .checkbox label {
    ${fontStyle.medium}
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    align-self: stretch;
    padding: 0px;
    width: 100%;
    user-select: none;
  }

  .checkbox div {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    transition-property: background, border, border-color;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
    margin-right: 4px;
    border: 1px solid ${neutralPrimary};
    border-radius: 2px;
    overflow: hidden;
  }

  .checkbox i {
    ${iconCss}
    opacity: 0;
    color: ${white};
  }

  .checkbox:not(.selected):not(.disabled):hover i {
    color: ${neutralSecondary};
    opacity: 1;
  }

  .checkbox span {
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 0px;
    max-width: 100%;
    overflow-wrap: break-word;
    margin: 1px;
    overflow: hidden;
  }

  .checkbox.selected div {
    background: ${themePrimary};
    border-color: ${themePrimary};
  }

  .checkbox.selected i {
    opacity: 1;
  }

  .checkbox.disabled label {
    cursor: default;
  }

  .checkbox.disabled div {
    border-color: ${neutralTertiaryAlt};
  }

  .checkbox.disabled.selected div {
    background: ${neutralTertiaryAlt};
    border-color: ${neutralTertiaryAlt};
  }

  .checkbox.disabled span {
    color: ${neutralTertiary};
  }

  .checkbox.selected:not(.disabled):hover div {
    background: ${themeDark};
    border-color: ${themeDark};
  }

  ${getFocusStyle('button.marked', {
    color: neutralSecondary,
    radius: css`1px`,
    position: css`0px`,
    width: css`1px`
  })}

  ${getFocusStyle('.checkbox.marked', {
    color: neutralSecondary,
    radius: css`1px`,
    position: css`-1px`,
    width: css`1px`
  })}

  .option.highlighted {
    background-color: ${neutralLight};
  }

  .option.highlighted:hover {
    color: ${themeDark};
    background: ${neutralTertiaryAlt};
  }
`
