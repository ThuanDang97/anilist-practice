/**
 * @description function return color dark when in dark theme and color light
 * in light theme
 *
 * @param {string} colorScheme dark mode or light mode
 * @param {string} InDarkTheme this will show in dark theme
 * @param {string} InLightTheme this will show in light theme
 *
 * @returns {string}
 */
export const getColorScheme = (
  colorScheme: string,
  InDarkTheme: string,
  InLightTheme: string,
): string => (colorScheme === 'dark' ? InDarkTheme : InLightTheme)
