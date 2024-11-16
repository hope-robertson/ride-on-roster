import React, { useState } from 'react'
import Roster from './Roster'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ClerkSelector from './ClerkSelector'

interface RosteringAppState {
  selectedDate: Date
  selectedClerkId: number | null
  isClerkSelectorOpen: boolean
}

const RosteringApp: React.FC = () => {
  const [state, setState] = useState<RosteringAppState>({
    selectedDate: new Date(),
    selectedClerkId: null,
    isClerkSelectorOpen: false,
  })

  const handleDateChange = (date: Date) => {
    setState((prevState) => ({ ...prevState, selectedDate: date }))
  }

  const handleClerkSelect = (clerkId: number) => {
    setState((prevState) => ({ ...prevState, selectedClerkId: clerkId }))
    setIsClerkSelectorOpen(false)
  }

  const handleOpenClerkSelector = () => {
    setState((prevState) => ({ ...prevState, isClerkSelectorOpen: true }))
  }

  const setIsClerkSelectorOpen = (isOpen: boolean) => {
    setState((prevState) => ({ ...prevState, isClerkSelectorOpen: isOpen }))
  }

  return (
    <div className="container">
      <Calendar onChange={handleDateChange} value={state.selectedDate} />

      {!state.selectedClerkId && (
        <button onClick={handleOpenClerkSelector}>Select Clerk</button>
      )}

      {state.isClerkSelectorOpen && (
        <ClerkSelector
          onSelect={handleClerkSelect}
          onClose={() => setIsClerkSelectorOpen(false)}
        />
      )}

      <Roster
        selectedDate={state.selectedDate}
        selectedClerkId={state.selectedClerkId}
      />
    </div>
  )
}
