import { LitElement } from 'lit-element'

const $styleSheet = new WeakMap()

export default class StyledElement extends LitElement {
  get styleSheet () {
    return $styleSheet.get(this)
  }

  set styleSheet (value) {
    const oldStyleSheets = [$styleSheet.get(this)].flat()
    $styleSheet.set(this, value)

    if (this.shadowRoot) {
      const newStylesheets = [
        ...this.shadowRoot.adoptedStyleSheets.filter(
          styleSheet => !oldStyleSheets.includes(styleSheet)
        ),
        value
      ]

      const result = newStylesheets.flat().filter(element => element)
      this.shadowRoot.adoptedStyleSheets = result
    }
  }
}
