import argTypes from './arg-types'
import './spinner'

function renderSpinner (args) {
  const spinner = document.createElement('FLUENT-SPINNER')

  for (const prop in args) {
    spinner[prop] = args[prop]
  }

  return spinner
}

export default {
  title: 'Progress/Spinner',
  component: 'fluent-spinner',
  argTypes
}

export const ExtraSmallSpinner = renderSpinner.bind({})
ExtraSmallSpinner.args = {
  type: 'xSmall'
}

export const SmallSpinner = renderSpinner.bind({})
SmallSpinner.args = {
  type: 'small'
}

export const MediumSpinner = renderSpinner.bind({})
MediumSpinner.args = {
  type: 'medium'
}

export const LargeSpinner = renderSpinner.bind({})
LargeSpinner.args = {
  type: 'large'
}

export const SpinnerWithLabel = renderSpinner.bind({})
SpinnerWithLabel.args = {
  label: 'I am definitely loading...'
}

export const LargeSpinnerWithLabel = renderSpinner.bind({})
LargeSpinnerWithLabel.args = {
  type: 'large',
  label: 'I am definitely loading...'
}

export function Styled (args) {
  const spinner = renderSpinner(args)

  const styles = new CSSStyleSheet()
  styles.replaceSync(`
    #circle {
      border-width: 10px;
      width: 100px;
      height: 100px;
    }
  `)

  spinner.styleSheet = styles
  return spinner
}
