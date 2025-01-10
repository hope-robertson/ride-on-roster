import raw from 'knex'
import Knex from 'knex'
import { RosterData } from '../../models/models'

const knex = Knex({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './dev.sqlite3',
  },
})

export async function fetchRosterDB(): Promise<RosterData> {
  try {
    console.log('Fetching roster data from database')
    const roster = await knex('roster').where({ id: 1 }).first<RosterData>()
    console.log('Fetched roster data:', roster)
    return roster
  } catch (error) {
    console.error('Error fetching roster data:', error)
    throw new Error('Failed to fetch roster data')
  }
}

export async function saveRosterDB(rosterData: RosterData) {
  try {
    await knex('roster').where({ id: 1 }).update(rosterData) // Update the entire roster object
  } catch (error) {
    throw new Error('Failed to save roster data')
  }
}

export async function createShiftAssignment(shiftId: number, clerkId: number) {
  try {
    // Get the current date (assuming you want the start of the current week)
    const today = new Date()
    const currentWeekStart = today.setDate(
      today.getDate() - ((today.getDay() || 7) % 7),
    ) // Adjust for weekday (Sunday=0)

    await knex('create_shift_assignments').insert({
      shift_id: shiftId,
      clerk_id: clerkId,
      assigned_at: raw('CURRENT_TIMESTAMP'),
      week_start_date: currentWeekStart,
    })
  } catch (error) {
    throw new Error('Failed to create shift assignment')
  }
}
