interface RGB {
  r: number
  g: number
  b: number
}

const hexToRgb = (hex: string): RGB => {
  hex = hex.replace(/^#/, '')
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

const getContrast = (rgb1: RGB, rgb2: RGB): number => {
  const luminance1 = 0.299 * rgb1.r + 0.587 * rgb1.g + 0.114 * rgb1.b
  const luminance2 = 0.299 * rgb2.r + 0.587 * rgb2.g + 0.114 * rgb2.b
  return Math.abs(luminance1 - luminance2)
}

const getContrastColor = (hexColor: string): string => {
  const whiteColor: RGB = { r: 255, g: 255, b: 255 }
  const blackColor: RGB = { r: 0, g: 0, b: 0 }

  const inputColor: RGB = hexToRgb(hexColor)

  const contrastWithWhite = getContrast(inputColor, whiteColor)
  const contrastWithBlack = getContrast(inputColor, blackColor)

  const contrastColor =
    contrastWithWhite > contrastWithBlack ? '#ffffff' : '#000000'

  return contrastColor
}

export default getContrastColor
