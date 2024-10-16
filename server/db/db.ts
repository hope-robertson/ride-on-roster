import Knex from 'knex'
import { RosterData } from '../../models/models'

const knex = Knex // Assuming you have a knexfile.js configured

export async function fetchRoster(): Promise<RosterData> {
  try {
    const roster = await knex('roster').where({ id: 1 }).first() // Assuming only one roster
    return roster.data // Assuming the roster data is stored in a JSON column
  } catch (error) {
    throw new Error('Failed to fetch roster data')
  }
}

export async function saveRoster(rosterData: RosterData) {
  try {
    await knex('roster').where({ id: 1 }).update({ data: rosterData })
  } catch (error) {
    throw new Error('Failed to save roster data')
  }
}
