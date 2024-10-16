import { Shift } from '../models/models'

export function generateShifts(startDate: Date): Shift[] {
  const shiftPatterns = {
    weekday: [
      { startTime: '12:00', endTime: '15:00' },
      { startTime: '15:00', endTime: '18:00' },
    ],
    weekend: [
      { startTime: '12:00', endTime: '14:30' },
      { startTime: '14:30', endTime: '17:30' },
    ],
  }

  const shifts: Shift[] = []

  for (let i = 0; i < 7; i++) {
    const day = new Date(startDate)
    day.setDate(startDate.getDate() + i)

    const isWeekday = day.getDay() >= 1 && day.getDay() <= 5

    const pattern = isWeekday ? shiftPatterns.weekday : shiftPatterns.weekend

    pattern.forEach((shift) => {
      shifts.push({
        day: day.toDateString(),
        startTime: shift.startTime,
        endTime: shift.endTime,
        available: true,
        id: 0,
      })
    })
  }

  return shifts
}
