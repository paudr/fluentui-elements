import { css } from 'lit-element'

export default css`
  :host([type='compound']) #root {
    padding: 16px 12px;
    max-width: 280px;
    min-height: 72px;
    height: auto;
  }

  :host([type='compound']) #container {
    align-items: flex-start;
  }

  :host([type='compound']) #textContainer {
    text-align: left;
  }

  :host([type='compound']) #label {
    margin: 0px;
    margin-bottom: 5px;
  }
`
