import { css } from 'lit-element'

import { normalize, iconCss } from '../../theme/mixins.css'
import { fontStyle, fontSize, fontWeight } from '../../theme/typografy.css'
import {
  neutralLight,
  neutralLighter,
  neutralPrimary,
  neutralSecondary,
  themePrimary,
  white
} from '../../theme/color.css'

export const expanderWidth = 36

export default css`
  :host {
    display: block;
  }

  i {
    ${iconCss}
  }

  table {
    ${normalize}
    width: 100%;
    table-layout: fixed;
    ${fontStyle.small}
    color: ${neutralPrimary};
    background: ${white};
    border-collapse: collapse;
    border-color: ${neutralLight};
  }

  :host([auto]) table {
    table-layout: auto;
  }

  :host([full-auto]) table {
    table-layout: auto;
    width: auto;
  }

  /* Row */

  tr {
    height: 42px;
  }

  #header tr,
  tbody tr {
    border-bottom: 1px solid ${neutralLight};
  }

  thead.group tr {
    border-bottom: 1px solid ${white};
  }

  tbody tr:hover,
  thead.group tr:hover {
    background: ${neutralLighter};
  }

  /* Row -> Selected */

  tbody tr.selected,
  thead.group tr.selected {
    background: ${neutralLight};
    border-bottom: 1px solid ${white};
  }

  /* Row Data -> compact */

  :host([compact]) tbody tr {
    height: 32px;
    border-bottom: 0;
  }

  /* Cell */

  th > div,
  td > div {
    box-sizing: border-box;
    min-height: 42px;
    padding: 0px 8px 0px 12px;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    outline: 0;
  }

  /* Header */

  th {
    text-align: left;
  }

  .title {
    display: flex;
    ${fontSize.medium};
    ${fontWeight.semibold};
  }

  #header .title:hover {
    background: ${neutralLighter};
  }

  /* Grpoup Header */

  .groupWrapper {
    ${normalize}
    display: flex;
  }

  /* Header -> Collapsed */

  .title.collapsed {
    ${fontWeight.regular};
  }

  /* Check */

  .checkCell {
    width: 48px;
  }

  .checkCell > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    opacity: 0;
  }

  tr:hover > .checkCell > div {
    opacity: 1;
  }

  .checkCell > div > div {
    line-height: 1;
    width: 18px;
    height: 18px;
    vertical-align: top;
    position: relative;
    user-select: none;
    color: ${neutralSecondary};
  }

  .checkCell > div > div::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    opacity: 1;
    border-radius: 50%;
    background: ${white};
  }

  .checkCell > div > div > i:first-child {
    font-size: 18px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 18px;
    height: 18px;
    text-align: center;
    vertical-align: middle;
  }

  .checkCell > div > div > i:last-child {
    font-size: 16px;
    position: absolute;
    left: 0.5px;
    top: 0px;
    width: 18px;
    height: 18px;
    text-align: center;
    vertical-align: middle;
    opacity: 0;
  }

  .checkCell > div > div:hover > i:last-child {
    opacity: 1;
  }

  /* Check -> selected */

  #header tr.selected > .checkCell > div,
  tbody tr.selected > .checkCell > div {
    opacity: 1;
  }

  tr.selected > .checkCell > div > div::before {
    background: ${themePrimary};
  }

  tr.selected > .checkCell > div > div > i {
    color: ${white};
    opacity: 1;
  }

  /* Expander */

  .expanderCell {
    width: ${expanderWidth}px;
  }

  .expander {
    position: relative;
    color: ${neutralSecondary};
    width: ${expanderWidth}px;
    display: inline-flex;
    padding: 0;
    margin: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    cursor: pointer;
    user-select: none;
  }

  .expander > i {
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    transition: transform 0.1s linear 0s;
  }

  /* Expander -> Expanded */

  .expander.expanded > i {
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    transition: transform 0.1s linear 0s;
  }

  /* Compact */

  :host([compact]) tr {
    border-bottom: 0;
  }

  :host([compact]) tr > td > div {
    height: 32px;
    min-height: 32px;
  }
`
