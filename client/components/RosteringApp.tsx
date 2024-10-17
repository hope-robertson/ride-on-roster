import React, { useState } from 'react'
import Roster from './Roster'
import ClerkSelector from './ClerkSelector'

interface RosteringAppState {
  selectedClerkId: number | null
  isClerkSelectorOpen: boolean
}

const RosteringApp: React.FC = () => {
  const [state, setState] = useState<RosteringAppState>({
    selectedClerkId: null,
    isClerkSelectorOpen: false,
  })

  const handleClerkSelect = (clerkId: number) => {
    setState((prevState) => ({ ...prevState, selectedClerkId: clerkId }))
    setIsClerkSelectorOpen(false) // Close popup
  }

  const handleOpenClerkSelector = () => {
    setState((prevState) => ({ ...prevState, isClerkSelectorOpen: true }))
  }

  const setIsClerkSelectorOpen = (isOpen: boolean) => {
    setState((prevState) => ({ ...prevState, isClerkSelectorOpen: isOpen }))
  }

  return (
    <div className="container">
      {/* ... other UI elements */}
      {!state.selectedClerkId && (
        <button onClick={handleOpenClerkSelector}>Select Clerk</button>
      )}
      {state.isClerkSelectorOpen && (
        <ClerkSelector
          onSelect={handleClerkSelect}
          onClose={() => setIsClerkSelectorOpen(false)}
        />
      )}
      <Roster selectedClerkId={state.selectedClerkId} />
    </div>
  )
}

export default RosteringApp
