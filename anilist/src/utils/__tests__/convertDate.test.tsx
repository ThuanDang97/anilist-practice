import { ConvertDateTime, DateObj } from '@utils/convertDate'

describe('ConvertDateTime', () => {
  it('should convert DateObj to UTC string', () => {
    const dateObj: DateObj = { year: 2023, month: 12, day: 11 }
    const result = ConvertDateTime(dateObj)

    expect(result).toBe('2023-12-11T00:00:00.000Z')
  })

  it('should handle leap year correctly', () => {
    const dateObj: DateObj = { year: 2024, month: 2, day: 29 }
    const result = ConvertDateTime(dateObj)

    expect(result).toBe('2024-02-29T00:00:00.000Z')
  })

  it('should handle timezone correctly', () => {
    const dateObj: DateObj = { year: 2023, month: 12, day: 11 }
    const result = ConvertDateTime(dateObj)

    expect(result).toBe('2023-12-11T00:00:00.000Z')
  })
})
