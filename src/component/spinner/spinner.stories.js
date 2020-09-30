import argTypes from './arg-types'
import './spinner'

export default {
  title: 'Progress/Spinner',
  component: 'fluent-spinner',
  argTypes
}

export function Standard (args) {
  const spinner = document.createElement('FLUENT-SPINNER')

  for (const prop in args) {
    spinner[prop] = args[prop]
  }

  return spinner
}

export function Styled (args) {
  const spinner = Standard(args)

  const styles = new CSSStyleSheet()
  styles.replaceSync(args.styles)

  spinner.styleSheet = styles
  return spinner
}
Styled.args = {
  styles: `
    #circle {
      border-width: 10px;
      width: 100px;
      height: 100px;
    }
  `
}
