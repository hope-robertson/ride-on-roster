import superagent from 'superagent'
import { Clerk } from '../../models/models'

export async function fetchClerks(): Promise<Clerk[]> {
  try {
    const response = await superagent.get('/api/v1/clerks')
    return response.body
  } catch (error) {
    throw new Error('Failed to fetch clerks')
  }
}
