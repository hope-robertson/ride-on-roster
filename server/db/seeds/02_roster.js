// import { Knex } from 'knex';
// import { generateShifts } from '../../utils/roster'

export async function seed(knex) {
  await knex('roster').insert({
    startDate: new Date(),
    shifts: [
      { day: 'Monday', startTime: '12:00', endTime: '15:00', available: true },
      { day: 'Monday', startTime: '15:00', endTime: '18:00', available: true },
      { day: 'Tuesday', startTime: '12:00', endTime: '15:00', available: true },
      { day: 'Tuesday', startTime: '15:00', endTime: '18:00', available: true },
      {
        day: 'Wednesday',
        startTime: '12:00',
        endTime: '15:00',
        available: true,
      },
      {
        day: 'Wednesday',
        startTime: '15:00',
        endTime: '18:00',
        available: true,
      },
      {
        day: 'Thursday',
        startTime: '12:00',
        endTime: '15:00',
        available: true,
      },
      {
        day: 'Thursday',
        startTime: '15:00',
        endTime: '18:00',
        available: true,
      },
      { day: 'Friday', startTime: '12:00', endTime: '15:00', available: true },
      { day: 'Friday', startTime: '15:00', endTime: '18:00', available: true },

      // ... other weekdays
      {
        day: 'Saturday',
        startTime: '12:00',
        endTime: '14:30',
        available: true,
      },
      {
        day: 'Saturday',
        startTime: '14:30',
        endTime: '17:00',
        available: true,
      },

      {
        day: 'Sunday',
        startTime: '12:00',
        endTime: '14:30',
        available: true,
      },
      {
        day: 'Sunday',
        startTime: '14:30',
        endTime: '17:00',
        available: true,
      },
    ],
  })
}
