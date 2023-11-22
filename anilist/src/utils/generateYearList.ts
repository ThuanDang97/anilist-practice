const GenerateYearList = (): string[] => {
  const currentYear: number = new Date().getFullYear()
  const endYear: number = 1940
  const years: string[] = []

  for (let year: number = currentYear + 1; year >= endYear; year--) {
    years.push(year.toString())
  }

  return years
}

export default GenerateYearList
