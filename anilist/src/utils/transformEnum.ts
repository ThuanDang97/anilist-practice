const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const transformEnumToList = (enumObj: Record<string, string>): string[] => {
  return Object.values(enumObj).map((value) => capitalizeFirstLetter(value))
}

export { capitalizeFirstLetter, transformEnumToList }
