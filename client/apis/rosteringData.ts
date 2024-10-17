import superagent from 'superagent'
import { RosterData } from '../../models/models'

export async function fetchRoster(): Promise<RosterData> {
  try {
    const response = await superagent.get('/api/v1/roster')
    return response.body
  } catch (error) {
    throw new Error('Failed to fetch roster data')
  }
}

export async function saveRoster(rosterData: RosterData) {
  try {
    await superagent.post('/api/v1/roster').send(rosterData)
  } catch (error) {
    throw new Error('Failed to save roster data')
  }
}
