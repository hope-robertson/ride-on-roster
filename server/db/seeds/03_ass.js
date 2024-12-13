export async function seed(knex) {
  const currentWeekStart = new Date('2024-12-11') // Adjust the date as needed

  await knex('shift_assignments').insert([
    { shift_id: 1, clerk_id: 1, week_start_date: currentWeekStart },
    { shift_id: 2, clerk_id: 2, week_start_date: currentWeekStart },
    // Add more shift assignments as needed
  ])
}
