import { css } from 'lit-element'
import {
  neutralLight,
  neutralLighter,
  neutralQuaternaryAlt,
  themeDark,
  themeDarkAlt,
  themePrimary
} from '../../../theme/color.css'

export default css`
  :host([type='icon']) #root {
    padding: 0px 4px;
    width: 32px;
    height: 32px;
    min-width: 32px;
    background-color: transparent;
    color: ${themePrimary};
    border-width: 0px;
  }

  :host([type='icon']) #root:hover {
    color: ${themeDarkAlt};
    background-color: ${neutralLighter};
  }

  :host([type='icon'][checked]) #root,
  :host([type='icon']) #root:active {
    color: ${themeDark};
    background-color: ${neutralLight};
  }

  :host([type='icon'][checked]) #root:hover {
    color: ${themeDark};
    background-color: ${neutralQuaternaryAlt};
  }
`
