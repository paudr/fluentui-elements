import { css } from 'lit-element'
import { black, themeDarkAlt, themeDarker } from '../../../theme/color.css'
import { fontWeight } from '../../../theme/typografy.css'

export default css`
  :host([type='action']) #root {
    padding: 0px 4px;
    height: 40px;
    color: ${black};
    background-color: transparent;
    border-color: transparent;
  }

  :host([type='action']) i {
    color: ${themeDarkAlt};
  }

  :host([type='action'][checked]) i {
    color: ${themeDarker};
  }

  :host([type='action']) #label {
    ${fontWeight.regular};
  }
`
