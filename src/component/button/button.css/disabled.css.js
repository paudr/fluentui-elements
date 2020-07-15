import { css } from 'lit-element'
import {
  neutralLighter,
  neutralTertiary,
  neutralTertiaryAlt,
  white
} from '../../../theme/color.css'

export default css`
  :host([disabled]) #root:active,
  :host([disabled]) #root:hover,
  :host([disabled]) #root {
    cursor: default;
    background-color: ${neutralLighter};
    color: ${neutralTertiary};
    border-color: ${neutralLighter};
  }

  :host([disabled]) #description {
    color: ${neutralTertiary};
  }

  :host([disabled]) i {
    color: ${neutralTertiaryAlt};
  }

  :host([disabled][type='command']) #root,
  :host([disabled][type='action']) #root {
    border-color: ${white};
    background-color: ${white};
  }
`
