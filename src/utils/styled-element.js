import { LitElement } from 'lit-element'

const _styleSheet = new WeakMap()

export default class StyledElement extends LitElement {
  get styleSheet () {
    return _styleSheet.get(this)
  }

  set styleSheet (value) {
    const oldStyleSheets = [_styleSheet.get(this)].flat()
    _styleSheet.set(this, value)

    if (this.renderRoot) {
      const newStylesheets = [
        ...this.renderRoot.adoptedStyleSheets.filter(
          styleSheet => !oldStyleSheets.includes(styleSheet)
        ),
        value
      ]

      const result = newStylesheets.flat().filter(element => element)
      this.renderRoot.adoptedStyleSheets = result
    }
  }
}
