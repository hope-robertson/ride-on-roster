import express from 'express'
import { fetchRosterDB, saveRosterDB } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const rosterData = await fetchRosterDB()
    res.json(rosterData)
  } catch (error) {
    console.error('Error fetching roster data:', error)
    res.status(500).json({ message: 'Failed to fetch roster' })
  }
})

router.post('/', async (req, res) => {
  try {
    const updatedRoster = req.body
    await saveRosterDB(updatedRoster)
    res.json({ message: 'Roster updated successfully' })
  } catch (error) {
    console.error('Error saving roster data:', error)
    res.status(500).json({ message: 'Failed to save roster' })
  }
})

// ... add additional routes for other roster operations (optional)

export default router
