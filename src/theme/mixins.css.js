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

export function getBorderCss ({
  color,
  type = 'border',
  width = 1,
  offset = 0,
  radius = 2
} = {}) {
  const position = 1 + offset - width
  return type === 'borderBottom'
    ? css`
        pointer-events: none;
        content: '';
        position: absolute;
        left: 0px;
        top: ${position}px;
        bottom: ${position}px;
        right: 0px;
        border-bottom: ${width}px solid ${color};
        width: 100%;
      `
    : css`
        pointer-events: none;
        content: '';
        position: absolute;
        left: ${position}px;
        top: ${position}px;
        bottom: ${position}px;
        right: ${position}px;
        border: ${width}px solid ${color};
        border-radius: ${radius}px;
      `
}
