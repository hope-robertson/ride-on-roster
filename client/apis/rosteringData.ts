import superagent from 'superagent'

export async function fetchRoster(): Promise<RosterData> {
  try {
    const response = await superagent.get('/api/roster')
    return response.body
  } catch (error) {
    throw new Error('Failed to fetch roster data')
  }
}

export async function saveRoster(rosterData: RosterData) {
  try {
    await superagent.post('/api/roster').send(rosterData)
  } catch (error) {
    throw new Error('Failed to save roster data')
  }
}
