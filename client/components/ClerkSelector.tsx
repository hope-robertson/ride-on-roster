import { useState, useEffect } from 'react'
import { fetchClerks } from '../apis/clerksData'
import { Clerk } from '../../models/models'

interface ClerkSelectorProps {
  onSelect: (clerkId: number) => void
  onClose: () => void
}

function ClerkSelector({ onSelect, onClose }: ClerkSelectorProps) {
  const [clerks, setClerks] = useState<Clerk[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const data = await fetchClerks()
        setClerks(data)
      } catch (error) {
        setError('Error fetching clerks')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="clerk-selector-popup">
      <h2>Select Clerk</h2>
      {isLoading ? (
        <p>Loading clerks...</p>
      ) : error ? (
        <p>Error fetching clerks: {error}</p>
      ) : (
        <select onChange={(e) => onSelect(parseInt(e.target.value, 10))}>
          <option value="">Select a clerk</option>
          {clerks.map((clerk) => (
            <option key={clerk.id} value={clerk.id}>
              {clerk.name}
            </option>
          ))}
        </select>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default ClerkSelector
