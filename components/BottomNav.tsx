import React from 'react';
import { Home, Calendar, PlusCircle, FileText, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'schedule', icon: Calendar, label: 'Shift' },
    { id: 'action', icon: PlusCircle, label: 'Action', highlight: true },
    { id: 'claims', icon: FileText, label: 'Claims' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        if (item.highlight) {
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="bg-brand-orange text-white p-4 rounded-full -mt-8 shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform"
            >
              <Icon size={28} />
            </button>
          );
        }

        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-brand-orange' : 'text-gray-400'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};