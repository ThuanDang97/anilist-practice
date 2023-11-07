interface DateObj {
  year: number
  month: number
  day: number
}

export const ConvertDateTime = (date: DateObj) => {
  return new Date(date.year, date.month - 1, date.day).toISOString()
}
