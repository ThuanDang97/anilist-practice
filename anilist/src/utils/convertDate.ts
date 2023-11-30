interface DateObj {
  year: number
  month: number
  day: number
}

export const ConvertDateTime = (date: DateObj): string => {
  return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).toISOString()
}
