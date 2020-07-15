import { css } from 'lit-element'
import { neutralQuaternaryAlt, themePrimary } from '../../../theme/color.css'
import { fontWeight } from '../../../theme/typografy.css'

export default css`
  :host([type='command']) #root {
    padding-top: 0px 4px;
    height: 44px;
    min-width: 40px;
    border-width: 0px;
    text-decoration: none;
  }

  :host([type='command'][checked]) #root:hover {
    background-color: ${neutralQuaternaryAlt};
  }

  :host([type='command']) i {
    color: ${themePrimary};
  }

  :host([type='command']) #label {
    ${fontWeight.regular};
  }
`
