export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  status: 'Present' | 'Late' | 'Absent';
  locationStatus: 'Inside Zone' | 'Outside Zone';
}

export interface Shift {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  type: 'Morning' | 'Evening' | 'Night';
}

export interface NewsItem {
  id: string;
  title: string;
  priority: 'High' | 'Normal';
}

export interface Claim {
  id: string;
  type: 'Medical' | 'Travel' | 'Other';
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  date: string;
}