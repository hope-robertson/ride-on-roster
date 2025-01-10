import Knex from 'knex'

const knex = Knex({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './dev.sqlite3',
  },
})

export async function createShiftAssignment(shiftId: number, clerkId: number) {
  try {
    // Get the current date (assuming you want the start of the current week)
    const today = new Date()
    const currentWeekStart = today.setDate(
      today.getDate() - ((today.getDay() || 7) % 7),
    )

    await knex('shift_assignments').insert({
      shift_id: shiftId,
      clerk_id: clerkId,
      assigned_at: knex.fn.now(),
      week_start_date: currentWeekStart,
    })
  } catch (error) {
    throw new Error('Failed to create shift assignment')
  }
}

export async function getAllShifts(): Promise<unknown[]> {
  try {
    console.log('Fetching all shifts from database')
    const allShifts = await knex('shifts').select('*')
    console.log('Fetched all shifts:', allShifts)
    return allShifts
  } catch (error) {
    console.error('Error fetching all shifts:', error)
    console.error('Error message:', error as Error) // Log the error message
    throw new Error('Failed to fetch all shifts')
  }
}

export async function fetchCurrentWeekShiftAssignments(): Promise<unknown[]> {
  try {
    console.log('Fetching current week shift assignments from database') // Added console log

    const today = new Date()
    const currentWeekStart = today.setDate(
      today.getDate() - ((today.getDay() || 7) % 7),
    )

    const shiftAssignments = await knex('shift_assignments')
      .where('week_start_date', currentWeekStart)
      .select('*')

    console.log('Fetched shift assignments:', shiftAssignments) // Added console log
    return shiftAssignments
  } catch (error) {
    console.error('Error fetching shift assignments:', error)
    throw new Error('Failed to fetch shift assignments')
  }
}
