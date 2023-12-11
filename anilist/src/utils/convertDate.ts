export interface DateObj {
  year: number
  month: number
  day: number
}

export const ConvertDateTime = (date: DateObj): string => {
  // Create a Date object, set its local time to midnight
  const localMidnightDate = new Date(
    date.year,
    date.month - 1,
    date.day,
    0,
    0,
    0,
    0,
  )

  localMidnightDate.setDate(localMidnightDate.getDate())

  const utcDate = new Date(
    localMidnightDate.getTime() - localMidnightDate.getTimezoneOffset() * 60000,
  )

  return utcDate.toISOString()
}
