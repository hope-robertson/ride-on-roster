export async function seed(knex) {
  await knex('shifts').insert([
    {
      day: 'Wednesday',
      shift: 'OPEN',
      start_time: '12:00:00',
      end_time: '15:00:00',
      available: true,
    },
    {
      day: 'Wednesday',
      shift: 'CLOSE',
      start_time: '15:00:00',
      end_time: '18:00:00',
      available: true,
    },
    {
      day: 'Thursday',
      shift: 'OPEN',
      start_time: '12:00:00',
      end_time: '15:00:00',
      available: true,
    },
    {
      day: 'Thursday',
      shift: 'CLOSE',
      start_time: '15:00:00',
      end_time: '18:00:00',
      available: true,
    },
    {
      day: 'Friday',
      shift: 'OPEN',
      start_time: '12:00:00',
      end_time: '15:00:00',
      available: true,
    },
    {
      day: 'Friday',
      shift: 'CLOSE',
      start_time: '15:00:00',
      end_time: '18:00:00',
      available: true,
    },
    {
      day: 'Saturday',
      shift: 'OPEN',
      start_time: '12:00:00',
      end_time: '14:30:00',
      available: true,
    },
    {
      day: 'Saturday',
      shift: 'CLOSE',
      start_time: '14:30:00',
      end_time: '17:00:00',
      available: true,
    },
    {
      day: 'Sunday',
      shift: 'OPEN',
      start_time: '12:00:00',
      end_time: '14:30:00',
      available: true,
    },
    {
      day: 'Sunday',
      shift: 'CLOSE',
      start_time: '14:30:00',
      end_time: '17:00:00',
      available: true,
    },
  ])
}
