export const convertToKebabCase = (input: string): string =>
  input.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-')
