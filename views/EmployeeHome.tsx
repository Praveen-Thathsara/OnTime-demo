import React, { useState } from 'react';
import { LayoutDashboard, Calendar, History, FileCheck, User, LogOut } from 'lucide-react';
import { Logo } from '../components/Logo';
import { MOCK_USER } from '../constants';
import { DashboardOverview } from './employee/DashboardOverview';
import { MyShifts } from './employee/MyShifts';
import { AttendanceHistory } from './employee/AttendanceHistory';
import { Claims } from './employee/Claims';
import { Profile } from './employee/Profile';

type EmployeePage = 'Dashboard' | 'My Shifts' | 'Attendance' | 'Claims' | 'Profile';

export const EmployeeHome: React.FC = () => {
  const [activePage, setActivePage] = useState<EmployeePage>('Dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard': return <DashboardOverview />;
      case 'My Shifts': return <MyShifts />;
      case 'Attendance': return <AttendanceHistory />;
      case 'Claims': return <Claims />;
      case 'Profile': return <Profile />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col p-6">
        <Logo className="mb-10" />

        <nav className="space-y-2 flex-1">
          {[
            { name: 'Dashboard', icon: LayoutDashboard },
            { name: 'My Shifts', icon: Calendar },
            { name: 'Attendance', icon: History },
            { name: 'Claims', icon: FileCheck },
            { name: 'Profile', icon: User }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name as EmployeePage)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors flex items-center gap-3 ${activePage === item.name
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="bg-brand-pale/50 p-4 rounded-xl mt-auto">
          <p className="text-xs font-bold text-brand-dark mb-2">Employee Profile</p>
          <div className="flex items-center gap-2">
            <img
              src={MOCK_USER.avatarUrl}
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-200"
            />
            <div className="text-xs text-gray-600">
              <p className="font-bold">{MOCK_USER.name}</p>
              <p>{MOCK_USER.role}</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs text-red-500 font-medium mt-3 hover:text-red-600 transition-colors">
            <LogOut size={12} /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        {renderContent()}
      </div>
    </div>
  );
};