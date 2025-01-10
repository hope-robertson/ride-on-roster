// server/routes/shiftAssignments.ts
import express from 'express'
import {
  createShiftAssignment,
  getAllShifts,
  fetchCurrentWeekShiftAssignments,
} from '../db/db'

const router = express.Router()

router.get('/test', (req, res) => {
  res.json({ message: 'Test route successful' })
})

// Existing route for creating shift assignments
router.post('/', async (req, res) => {
  const { shiftId, clerkId } = req.body

  try {
    await createShiftAssignment(shiftId, clerkId)
    res.status(201).json({ message: 'Shift assignment created successfully' })
  } catch (error) {
    console.error('Error creating shift assignment:', error)
    res.status(500).json({ error: 'Failed to create shift assignment' })
  }
})

// New route for fetching current week shift assignments
router.get('/current-week', async (req, res) => {
  try {
    const shiftAssignments = await fetchCurrentWeekShiftAssignments()
    res.json(shiftAssignments)
  } catch (error) {
    console.error('Error fetching shift assignments:', error)
    res.status(500).json({ message: 'Failed to fetch shift assignments' })
  }
})

router.get('/all', async (req, res) => {
  try {
    const allShifts = await getAllShifts()
    res.json(allShifts)
  } catch (error) {
    console.error('Error fetching all shifts:', error)
    res.status(500).json({ error: 'Failed to fetch all shifts' })
  }
})

export default router
