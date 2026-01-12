import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { DashboardOverview } from './admin/DashboardOverview';
import { Employees } from './admin/Employees';
import { Shifts } from './admin/Shifts';
import { Geofencing } from './admin/Geofencing';
import { Reports } from './admin/Reports';
import { Settings } from './admin/Settings';

type AdminPage = 'Dashboard' | 'Employees' | 'Shifts' | 'Geofencing' | 'Reports' | 'Settings';

export const AdminDashboard: React.FC = () => {
  const [activePage, setActivePage] = useState<AdminPage>('Dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard': return <DashboardOverview />;
      case 'Employees': return <Employees />;
      case 'Shifts': return <Shifts />;
      case 'Geofencing': return <Geofencing />;
      case 'Reports': return <Reports />;
      case 'Settings': return <Settings />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col p-6">
        <Logo className="mb-10" />

        <nav className="space-y-2 flex-1">
          {['Dashboard', 'Employees', 'Shifts', 'Geofencing', 'Reports', 'Settings'].map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item as AdminPage)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${activePage === item
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="bg-brand-pale/50 p-4 rounded-xl mt-auto">
          <p className="text-xs font-bold text-brand-dark mb-2">Admin Profile</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs">SA</div>
            <div className="text-xs text-gray-600">
              <p className="font-bold">Mrs. Adeeba</p>
              <p>Supervisor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        {renderContent()}
      </div>
    </div>
  );
};