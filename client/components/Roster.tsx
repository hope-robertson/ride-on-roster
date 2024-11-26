import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { fetchRoster } from '../apis/rosteringData'
import { RosterData } from '../../models/models'
import useStore from '../../store'

interface RosterProps {
  selectedDate: Date
  selectedClerkId: number | null
  selectedWeekStart?: Date
  onSaveRoster?: (updatedRoster: RosterData) => void // Optional callback function
}

const Roster: React.FC<RosterProps> = ({ onSaveRoster }) => {
  const isWithinWeek = (shift: any) => {
    const shiftStart = moment(shift.startTime)
    const weekStart = moment(selectedWeekStart).startOf('week')
    const weekEnd = moment(selectedWeekStart).endOf('week')

    return shiftStart.isBetween(weekStart, weekEnd, 'day', '[]')
  }

  const { selectedClerkId } = useStore()
  const [rosterData, setRosterData] = useState<RosterData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRoster()
        // filter shifts based on selectedWeekStart
        const filteredShifts = selectedWeekStart
          ? data.shifts.filter(isWithinWeek)
          : data.shifts

        setRosterData({ ...data, shifts: filteredShifts })
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching roster data:', error)
        setError('Failed to fetch roster data')
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedWeekStart])

  const handleShiftSelect = (shiftId: number) => {
    if (!rosterData || !selectedClerkId) return

    const updatedShifts = rosterData.shifts.map((shift) => {
      if (shift.id === shiftId) {
        return {
          ...shift,
          clerkId: selectedClerkId,
          clerkName: 'record store guy',
        }
      }
      return shift
    })

    setRosterData({
      ...rosterData,
      shifts: updatedShifts,
    })

    onSaveRoster?.({ ...rosterData, shifts: updatedShifts })
  }

  if (isLoading) {
    return <p>Loading roster data...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h2>Roster</h2>
      {rosterData?.shifts.map((shift) => (
        <div key={shift.id}>
          <button
            disabled={!shift.available}
            onClick={() => handleShiftSelect(shift.id)}
          >
            {shift.day}: {shift.startTime} - {shift.endTime} (
            {shift.available ? 'Available' : 'Unavailable'})
            {shift.clerkId
              ? ` (Assigned to ${shift.clerkName})`
              : ' (Nobody assigned)'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Roster
