export default class OptionsManager {
  constructor () {
    this.multiple = false
    this.options = []
    this.selectedIndices = []
  }

  get value () {
    if (this.multiple) {
      return this.selectedIndices
        .map(index => this.options[index])
        .filter(option => option)
        .map(option => option.value)
    } else {
      const option = this.options[this.selectedIndices[0]]
      return option && option.value
    }
  }

  set value (value) {
    if (this.multiple) {
      this.selectedIndices = value
        .map(val => this.options.findIndex(option => option.value === val))
        .filter(index => index >= 0)
    } else {
      const index = this.options.findIndex(option => option.value === value)
      this.selectedIndices = index >= 0 ? [index] : []
    }
  }

  isIndexSelected (index) {
    return this.multiple
      ? this.selectedIndices.includes(index)
      : this.selectedIndices[0] === index
  }

  toggleIndex (index) {
    const position = this.selectedIndices.indexOf(index)
    if (position >= 0) {
      this.selectedIndices.splice(position, 1)
      return false
    }
    this.selectedIndices.push(index)
    return true
  }
}
