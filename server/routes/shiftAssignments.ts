// server/routes/shiftAssignments.ts
import express from 'express'
import { createShiftAssignment } from '../db/db'

const router = express.Router()

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

export default router
