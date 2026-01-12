import React, { useState } from 'react';
import { MapPin, Clock, Calendar, ChevronRight, FileCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { UPCOMING_SHIFTS, ATTENDANCE_HISTORY, RECENT_CLAIMS, MOCK_USER } from '../constants';
import { EmergencyButton } from '../components/EmergencyButton';

export const EmployeeHome: React.FC = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isInZone, setIsInZone] = useState(true); // Simulation toggle

  const handleCheckInOut = () => {
    if (!isInZone) {
      alert("⚠️ You are outside the designated geofence zone! Alert will be sent to manager.");
      return;
    }
    setIsCheckedIn(!isCheckedIn);
  };

  return (
    <div className="pb-24">
      {/* Welcome Section */}
      <div className="p-6 pt-8 bg-gradient-to-br from-white to-brand-light">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-brand-dark text-sm mb-1">Welcome back,</p>
            <h1 className="text-2xl font-bold text-black">{MOCK_USER.name}</h1>
          </div>
          <img src={MOCK_USER.avatarUrl} alt="Profile" className="w-12 h-12 rounded-full border-2 border-brand-pale" />
        </div>

        <EmergencyButton />

        {/* Attendance Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-100 border border-brand-light relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Clock size={120} className="text-brand-orange" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${isInZone ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-xs text-gray-500">
                {isInZone ? 'Inside Office Zone' : 'Outside Office Zone'}
              </span>
              {/* Simulation Toggle */}
              <button
                onClick={() => setIsInZone(!isInZone)}
                className="ml-auto text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-400"
              >
                Simulate GPS
              </button>
            </div>

            <div className="text-center mb-6">
              <span className="text-gray-400 text-sm font-medium">Current Status</span>
              <h2 className="text-3xl font-bold text-brand-dark mt-1">
                {isCheckedIn ? 'Checked In' : 'Not Checked In'}
              </h2>
              {isCheckedIn && <p className="text-brand-orange font-medium mt-1">Since 08:00 AM</p>}
            </div>

            <Button
              fullWidth
              onClick={handleCheckInOut}
              variant={isCheckedIn ? 'secondary' : 'primary'}
            >
              {isCheckedIn ? 'Check Out' : 'Check In Now'}
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats / Today's Shift */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-bold text-brand-dark mb-4">Today's Schedule</h3>
        <div className="bg-brand-pale/30 p-4 rounded-2xl flex items-center justify-between border border-brand-pale">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-xl text-brand-orange shadow-sm">
              <Calendar size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-dark">{UPCOMING_SHIFTS[0].title}</p>
              <p className="text-sm text-gray-500">{UPCOMING_SHIFTS[0].startTime} - {UPCOMING_SHIFTS[0].endTime}</p>
            </div>
          </div>
          <span className="text-xs font-bold bg-brand-orange/10 text-brand-orange px-2 py-1 rounded">
            ACTIVE
          </span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-brand-dark">Recent History</h3>
          <button className="text-brand-orange text-sm font-medium">View All</button>
        </div>

        <div className="space-y-4">
          {ATTENDANCE_HISTORY.map(record => (
            <div key={record.id} className="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm">
              <div className="flex gap-4">
                <div className="bg-gray-50 p-2 rounded-lg flex flex-col items-center justify-center min-w-[50px]">
                  <span className="text-xs font-bold text-gray-400">{record.date.split('-')[1]}/{record.date.split('-')[2]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{record.status}</p>
                  <p className="text-xs text-gray-400">In: {record.checkIn} • Out: {record.checkOut}</p>
                </div>
              </div>
              <div className={`text-xs px-2 py-1 rounded ${record.status === 'Present' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                {record.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Claims Teaser */}
      <div className="px-6 mt-8">
        <div className="bg-brand-dark text-white p-6 rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1">Pending Claims</h3>
            <p className="text-gray-300 text-sm mb-4">You have {RECENT_CLAIMS.filter(c => c.status === 'Pending').length} pending approval</p>
            <button className="flex items-center gap-2 text-sm font-medium text-brand-orange">
              View Status <ChevronRight size={16} />
            </button>
          </div>
          <FileCheck size={100} className="absolute -bottom-4 -right-4 text-white/5" />
        </div>
      </div>
    </div>
  );
};