import { css } from 'lit-element'
import {
  themePrimary,
  themeDark,
  themeDarkAlt,
  white
} from '../../../theme/color.css'

export default css`
  :host([primary]) #root {
    color: ${white};
    background-color: ${themePrimary};
    border-color: ${themePrimary};
  }

  :host([primary]) #description {
    color: ${white};
  }

  :host([primary]) #root:hover {
    background-color: ${themeDarkAlt};
    border-color: ${themeDarkAlt};
  }

  :host([primary]) #root:active {
    background-color: ${themeDark};
    border-color: ${themeDark};
  }

  :host([primary][checked]) #root {
    background-color: ${themeDark};
    border-color: ${themePrimary};
  }
`
