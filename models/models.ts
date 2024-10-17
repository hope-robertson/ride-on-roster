export interface Clerk {
  id: number
  name: string
  role: string
  status: boolean
}

export interface Shift {
  id: number
  day: string
  startTime: string
  endTime: string
  available: boolean
  clerkId: number | null
  clerkName: string | null
}

export interface RosterData {
  id: number
  startDate: Date
  shifts: Shift[]
}

export interface Availability {
  clerkId: number
  shiftId: number
  available: boolean
}
