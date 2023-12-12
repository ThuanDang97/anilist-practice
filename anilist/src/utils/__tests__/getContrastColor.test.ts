import getContrastColor from '@utils/getContrastColor'

describe('getContrastColor', () => {
  test('returns white for dark input color', () => {
    const darkColor = '#333333'
    expect(getContrastColor(darkColor)).toEqual('#ffffff')
  })

  test('returns black for light input color', () => {
    const lightColor = '#ffffff'
    expect(getContrastColor(lightColor)).toEqual('#000000')
  })

  test('returns default RGB when input is empty', () => {
    expect(getContrastColor('')).toEqual('#ffffff')
  })
})
