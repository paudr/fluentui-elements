import { css } from 'lit-element'

function mapObject (object, transform) {
  const target = { ...object }
  for (const property in target) {
    target[property] = transform(target[property], property, target)
  }
  return target
}

function createFont (fontFamily, fontSizeValue, fontWeightValue) {
  return css`
    ${fontFamily};
    font-size: ${fontSizeValue}px;
    font-weight: ${fontWeightValue};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  `
}

export const fontFamily = {
  base: css`
    font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system,
      BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
  `,
  icon: css`
    font-family: FabricMDL2Icons;
  `
}

export const fontSizeValue = {
  mini: 10,
  xSmall: 10,
  small: 12,
  smallPlus: 12,
  medium: 14,
  mediumPlus: 16,
  icon: 16,
  large: 18,
  xLarge: 20,
  xLargePlus: 24,
  xxLarge: 28,
  xxLargePlus: 32,
  superLarge: 42,
  mega: 68
}

export const fontSize = mapObject(
  fontSizeValue,
  value =>
    css`
      font-size: ${value}px;
    `
)

export const fontWeightValue = {
  light: 100,
  semilight: 300,
  regular: 400,
  semibold: 600,
  bold: 700
}

export const fontWeight = mapObject(
  fontWeightValue,
  value =>
    css`
      font-weight: ${value};
    `
)

export const iconFontSizeValue = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20
}

export const iconFontSize = mapObject(
  iconFontSizeValue,
  value =>
    css`
      font-size: ${value}px;
    `
)

export const fontStyle = {
  tiny: createFont(
    fontFamily.base,
    fontSizeValue.mini,
    fontWeightValue.regular
  ),
  xSmall: createFont(
    fontFamily.base,
    fontSizeValue.xSmall,
    fontWeightValue.regular
  ),
  small: createFont(
    fontFamily.base,
    fontSizeValue.small,
    fontWeightValue.regular
  ),
  smallPlus: createFont(
    fontFamily.base,
    fontSizeValue.smallPlus,
    fontWeightValue.regular
  ),
  medium: createFont(
    fontFamily.base,
    fontSizeValue.medium,
    fontWeightValue.regular
  ),
  mediumPlus: createFont(
    fontFamily.base,
    fontSizeValue.mediumPlus,
    fontWeightValue.regular
  ),
  large: createFont(
    fontFamily.base,
    fontSizeValue.large,
    fontWeightValue.regular
  ),
  xLarge: createFont(
    fontFamily.base,
    fontSizeValue.xLarge,
    fontWeightValue.semibold
  ),
  xLargePlus: createFont(
    fontFamily.base,
    fontSizeValue.xLargePlus,
    fontWeightValue.semibold
  ),
  xxLarge: createFont(
    fontFamily.base,
    fontSizeValue.xxLarge,
    fontWeightValue.semibold
  ),
  xxLargePlus: createFont(
    fontFamily.base,
    fontSizeValue.xxLargePlus,
    fontWeightValue.semibold
  ),
  superLarge: createFont(
    fontFamily.base,
    fontSizeValue.superLarge,
    fontWeightValue.semibold
  ),
  mega: createFont(
    fontFamily.base,
    fontSizeValue.mega,
    fontWeightValue.semibold
  )
}
