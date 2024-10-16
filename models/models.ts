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
}

export interface Roster {
  id: number
  startDate: Date
  shifts: Shift[]
}

export interface Availability {
  clerkId: number
  shiftId: number
  available: boolean
}
