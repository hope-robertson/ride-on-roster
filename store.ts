import { create } from 'zustand'
import { produce } from 'immer'
import { RosterData } from './models/models'

interface AppState {
  selectedClerkId: number | null
  isClerkSelectorOpen: boolean
  rosterData: RosterData | null
  setRosterData: (rosterData: RosterData) => void
}

const useStore = create<AppState>((set) => ({
  selectedClerkId: null,
  isClerkSelectorOpen: false,
  rosterData: null,

  // Actions to update state

  setSelectedClerkId: (clerkId: number) =>
    set(
      produce((draft) => {
        draft.selectedClerkId = clerkId
      }),
    ),
  setIsClerkSelectorOpen: (isOpen: boolean) =>
    set(
      produce((draft) => {
        draft.isClerkSelectorOpen = isOpen
      }),
    ),
  setRosterData: (rosterData: RosterData) =>
    set(
      produce((draft: AppState) => {
        draft.rosterData = rosterData
      }),
    ),
}))

export default useStore
