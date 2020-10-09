const _styleSheet = new WeakMap()

export default function defineStyleSheetProperty (target) {
  return Object.defineProperty(target.prototype, 'styleSheet', {
    enumerable: true,
    get () {
      return _styleSheet.get(this)
    },
    set (value) {
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
  })
}
