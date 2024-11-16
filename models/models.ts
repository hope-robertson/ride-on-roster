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
  startDate: Date
  shifts: Shift[]
}

export interface Availability {
  clerkId: number
  shiftId: number
  available: boolean
}

// Mock roster data
export const mockRosterData: RosterData = {
  startDate: new Date(),
  shifts: [
    {
      id: 1,
      day: 'Wednesday',
      startTime: '12:00',
      endTime: '15:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 2,
      day: 'Wednesday',
      startTime: '15:00',
      endTime: '18:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },

    {
      id: 3,
      day: 'Thursday',
      startTime: '12:00',
      endTime: '15:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 4,
      day: 'Thursday',
      startTime: '15:00',
      endTime: '18:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 5,
      day: 'Friday',
      startTime: '12:00',
      endTime: '15:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 6,
      day: 'Friday',
      startTime: '15:00',
      endTime: '18:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 7,
      day: 'Saturday',
      startTime: '12:00',
      endTime: '14:30',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 8,
      day: 'Saturday',
      startTime: '14:30',
      endTime: '17:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 9,
      day: 'Sunday',
      startTime: '12:00',
      endTime: '14:30',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    {
      id: 10,
      day: 'Sunday',
      startTime: '14:30',
      endTime: '17:00',
      available: true,
      clerkId: null,
      clerkName: null,
    },
    // ... other shifts for the week
  ],
}
