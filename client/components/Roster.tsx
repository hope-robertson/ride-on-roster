import React, { useEffect } from 'react'
import { fetchRoster } from '../apis/rosteringData'
import { RosterData, Shift } from '../../models/models'
import useStore from '../../store'
import { produce } from 'immer'
import { create } from 'zustand'

const Roster: React.FC<RosterProps> = ({ selectedClerkId, onSaveRoster }) => {
  const { rosterData, setRosterData } = useStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRoster()
        setRosterData(data)
      } catch (error) {
        console.error('Error fetching roster data:', error)
      }
    }

    fetchData() // Call the function on component mount
  }, [])

  const handleShiftSelect = (shiftId: number) => {
    if (!rosterData || !selectedClerkId) return // Handle potential errors

    // Use Immer to update state immutably
    setRosterData(
      produce((draft) => {
        const updatedShiftIndex = draft.shifts.findIndex(
          (s) => s.id === shiftId,
        )
        if (updatedShiftIndex !== -1) {
          draft.shifts[updatedShiftIndex] = {
            ...draft.shifts[updatedShiftIndex],
            clerkId: selectedClerkId,
          }
        }
      }),
    )

    // Call the onSaveRoster callback if provided
    onSaveRoster?.(rosterData) // Use the updated roster data from the store
  }

  if (!rosterData) {
    return <p>Loading roster data...</p>
  }

  const shifts: Shift[] = rosterData.shifts || [] // Handle empty shifts array

  return (
    <div>
      <h2>Roster</h2>
      {/* Loop through the rosterData.shifts array and render each shift */}
      {shifts.map((shift) => (
        <div key={shift.day}>
          <p
            onClick={() => shift.available && handleShiftSelect(shift.id)} // Handle click only on available shifts
          >
            {shift.day}: {shift.startTime} - {shift.endTime} (
            {shift.available ? 'Available' : 'Unavailable'})
            {/* Conditionally render clerk name or "Nobody" */}
            {shift.clerkId
              ? ` (Assigned to ${shift.clerkName})`
              : ' (Nobody assigned)'}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Roster
