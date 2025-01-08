export async function seed(knex) {
  await knex('shifts').insert([
    {
      day: 'Wednesday',
      startTime: '12:00:00',
      endTime: '15:00:00',
      available: true,
    },
    {
      day: 'Wednesday',
      startTime: '15:00:00',
      endTime: '18:00:00',
      available: true,
    },
    {
      day: 'Thursday',
      startTime: '12:00:00',
      endTime: '15:00:00',
      available: true,
    },
    {
      day: 'Thursday',
      startTime: '15:00:00',
      endTime: '18:00:00',
      available: true,
    },
    {
      day: 'Friday',
      startTime: '12:00:00',
      endTime: '15:00:00',
      available: true,
    },
    {
      day: 'Friday',
      startTime: '15:00:00',
      endTime: '18:00:00',
      available: true,
    },
    {
      day: 'Saturday',
      startTime: '12:00:00',
      endTime: '14:30:00',
      available: true,
    },
    {
      day: 'Saturday',
      startTime: '14:30:00',
      endTime: '17:00:00',
      available: true,
    },
    {
      day: 'Sunday',
      startTime: '12:00:00',
      endTime: '14:30:00',
      available: true,
    },
    {
      day: 'Sunday',
      startTime: '14:30:00',
      endTime: '17:00:00',
      available: true,
    },
  ])
}
