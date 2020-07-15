import { css, unsafeCSS } from 'lit-element'
import { fontFamily, fontWeight, fontStyle } from './typografy.css'
import { redDark, neutralPrimary, neutralTertiary } from './color.css'

export const normalize = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-shadow: none;
`

export const iconCss = css`
  display: inline-block;
  ${fontFamily.icon};
  ${fontWeight.regular};
  font-style: normal;
  speak: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`

export function getLabelStyle (selector = '') {
  const safeSelector = selector ? ' ' + selector : ''
  return unsafeCSS(`
    :host${safeSelector} {
      ${normalize};
      ${fontStyle.medium};
      ${fontWeight.semibold};
      color: ${neutralPrimary};
      box-sizing: border-box;
      display: block;
      padding: 5px 0px;
      overflow-wrap: break-word;
    }

    :host([disabled])${safeSelector} {
      color: ${neutralTertiary};
    }

    :host([required])${safeSelector}::after {
      content: ' *';
      color: ${redDark};
      padding-right: 12px;
    }

    :host([required][disabled])${safeSelector}::after {
      color: ${neutralTertiary};
    }
  `)
}

export function getFocusStyle (
  selector,
  {
    color,
    radius,
    type = 'border',
    position = css`-1px`,
    width = css`2px`
  } = {}
) {
  const isBorderBottom = type === 'borderBottom'
  return unsafeCSS(`
    ${selector} {
      border-color: ${color};
    }

    ${selector}:after {
      pointer-events: none;
      content: '';
      position: absolute;
      left: ${isBorderBottom ? '0px' : position};
      top: ${position};
      bottom: ${position};
      right: ${isBorderBottom ? '0px' : position};
      border${isBorderBottom ? '-bottom' : ''}: ${width} solid ${color};
      border-radius: ${radius};
      ${isBorderBottom ? 'width: 100%;' : ''}
    }
  `)
}
