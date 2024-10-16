import express from 'express'
// import * from 'node:path'; // For path resolution

import rosterRoutes from './routes/roster.ts' // Import the roster routes

const app = express()
app.use(express.json()) // Parse incoming JSON data

// Mount your roster routes
app.use('/api/v1/roster', rosterRoutes) // Assuming v1 API version

// ... other routes or middleware (if applicable)

// Production environment serving static assets
if (process.env.NODE_ENV === 'production') {
  // ... serving static content logic (if needed)
}

export default app
