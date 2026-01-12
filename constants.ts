import { AttendanceRecord, Claim, NewsItem, Shift, User, UserRole } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Alex Rathnayaka',
  role: UserRole.EMPLOYEE,
  avatarUrl: 'https://picsum.photos/100/100',
};

export const MOCK_ADMIN: User = {
  id: 'a1',
  name: 'Sarah Adeeba',
  role: UserRole.ADMIN,
  avatarUrl: 'https://picsum.photos/101/101',
};

export const NEWS_ITEMS: NewsItem[] = [
  { id: '1', title: 'Holiday declared for upcoming Poya Day', priority: 'High' },
  { id: '2', title: 'New medical claim policy effective next month', priority: 'Normal' },
  { id: '3', title: 'Annual general meeting scheduled for Friday', priority: 'Normal' },
];

export const UPCOMING_SHIFTS: Shift[] = [
  { id: 's1', title: 'Morning Shift', startTime: '08:00 AM', endTime: '05:00 PM', type: 'Morning' },
  { id: 's2', title: 'Evening Shift', startTime: '02:00 PM', endTime: '10:00 PM', type: 'Evening' },
];

export const ATTENDANCE_HISTORY: AttendanceRecord[] = [
  { id: 'at1', date: '2025-10-24', checkIn: '08:02 AM', checkOut: '05:05 PM', status: 'Present', locationStatus: 'Inside Zone' },
  { id: 'at2', date: '2025-10-23', checkIn: '08:15 AM', checkOut: '05:00 PM', status: 'Late', locationStatus: 'Inside Zone' },
  { id: 'at3', date: '2025-10-22', checkIn: '08:00 AM', checkOut: '05:00 PM', status: 'Present', locationStatus: 'Inside Zone' },
];

export const RECENT_CLAIMS: Claim[] = [
  { id: 'c1', type: 'Medical', amount: 4500, status: 'Pending', date: '2025-10-20' },
  { id: 'c2', type: 'Travel', amount: 1200, status: 'Approved', date: '2025-10-15' },
];