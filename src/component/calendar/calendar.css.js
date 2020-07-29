import { css } from 'lit-element'
import { iconCss } from '../../theme/mixins.css'
import { fontStyle, fontWeight, iconFontSize } from '../../theme/typografy.css'
import {
  black,
  neutralDark,
  neutralLight,
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  themeDark,
  themePrimary,
  white
} from '../../theme/color.css'

const calendarDay = css`28px`
const calendarMonth = css`40px`

export default css`
  #root {
    display: inline-block;
    position: relative;
    background-color: ${white};
  }

  #header {
    position: relative;
    display: inline-flex;
    height: ${calendarDay};
    line-height: ${calendarDay};
    width: 100%;
  }

  #title {
    display: inline-flex;
    flex-grow: 1;
    ${fontStyle.medium};
    ${fontWeight.semibold};
    color: ${neutralPrimary};
    padding: 0 5px;
  }

  #title > div {
    display: flex;
    align-items: center;
    padding: 4px 8px;
  }

  #title > div:hover {
    color: ${black};
    cursor: pointer;
  }

  #titleComponents {
    display: inline-flex;
    align-self: flex-end;
    overflow: visible;
  }

  #navContainer i {
    ${iconCss}
  }

  #prev,
  #next {
    width: ${calendarDay};
    height: ${calendarDay};
    display: inline-block;
    text-align: center;
    line-height: ${calendarDay};
    text-align: center;
    ${iconFontSize.small};
    color: ${neutralPrimary};
    border-radius: 2px;
    position: relative;
    background-color: transparent;
    border: none;
    padding: 0;
  }

  #prev:hover,
  #next:hover,
  #prev:focus,
  #next:focus {
    color: ${neutralDark};
    cursor: pointer;
    outline: 1px solid transparent;
  }

  table {
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    font-size: inherit;
    margin-top: 4px;
    width: 197px;
  }

  td {
    margin: 0;
    padding: 0;
  }

  .day,
  #weekday th {
    width: ${calendarDay};
    height: ${calendarDay};
    padding: 0;
    line-height: ${calendarDay};
    ${fontStyle.small};
    color: ${neutralPrimary};
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    cursor: default;
    outline: transparent;
    position: relative;
  }

  #weekday th {
    text-transform: uppercase;
  }

  .day button {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    background-color: transparent;
    line-height: 100%;
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
  }

  .day:focus,
  .day button:focus {
    border-color: transparent;
    outline: transparent;
  }

  .day button:hover {
    cursor: pointer;
    background: ${neutralLighter};
    color: ${neutralDark};
  }

  .today button,
  .today button:hover {
    position: relative;
    color: ${white};
    ${fontWeight.semibold};
    background: ${themePrimary};
    border-radius: 100%;
  }

  .otherMonth:not(.today) button {
    color: ${neutralSecondary};
  }

  .otherMonth:not(.today) button:hover {
    background-color: transparent;
  }

  .day.selected {
    background-color: ${neutralLight};
    border-radius: 2px;
  }

  #monthsGrid {
    position: relative;
    height: 210px;
    width: 196px;
    margin: 4px 0 0 0;
  }

  #monthsGrid > div > button {
    width: ${calendarMonth};
    height: ${calendarMonth};
    line-height: 100%;
    cursor: pointer;
    float: left;
    margin: 0 12px 16px 0;
    ${fontStyle.smallPlus};
    color: ${neutralPrimary};
    text-align: center;
    border: none;
    padding: 0;
    background-color: transparent;
    border-radius: 2px;
  }

  #monthsGrid > div > button:nth-child(4) {
    margin: 0 0px 16px 0;
  }

  #monthsGrid > div > button:hover {
    color: ${neutralDark};
    background-color: ${neutralLighter};
    outline: 1px solid transparent;
  }

  #monthsGrid > div > button.selected {
    background-color: ${neutralLight};
  }

  #monthsGrid > div > button.selected:hover {
    background-color: ${neutralLighter};
  }

  #root.showGoToday {
    padding-bottom: 28px;
  }

  #goToday {
    bottom: 0;
    color: ${themePrimary};
    cursor: pointer;
    ${fontStyle.small};
    color: ${neutralPrimary};
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: transparent;
    border: none;
    position: absolute !important;
    box-sizing: content-box;
    right: 13px;
  }

  #goToday:hover {
    color: ${themePrimary};
    outline: 1px solid transparent;
  }

  #goToday:active {
    color: ${themeDark};
  }

  #goToday:focus {
    outline: 0;
  }
`
