import Knex from 'knex'
import { RosterData } from '../../models/models'

const knex = Knex // Assuming you have a knexfile.js configured

export async function fetchRosterDB(): Promise<RosterData> {
  try {
    console.log('Fetching roster data from database')
    const roster = await knex('roster').where({ id: 1 }).first() // Assuming only one roster
    console.log('Fetched roster dara:', roster)
    return roster.data // Assuming the roster data is stored in a JSON column
  } catch (error) {
    throw new Error('Failed to fetch roster data')
  }
}

export async function saveRosterDB(rosterData: RosterData) {
  try {
    await knex('roster').where({ id: 1 }).update({ data: rosterData })
  } catch (error) {
    throw new Error('Failed to save roster data')
  }
}
