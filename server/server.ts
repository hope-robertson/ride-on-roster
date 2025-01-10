import express from 'express'
import shiftAssignmentRoutes from './routes/shiftAssignments'

const app = express()
app.use(express.json()) // Parse incoming JSON data

console.log('Server starting...')

app.use('/api/v1', shiftAssignmentRoutes)

// Production environment serving static assets
if (process.env.NODE_ENV === 'production') {
  // ... serving static content logic (if needed)
}

export default app
