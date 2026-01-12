import React, { useState, useEffect } from 'react';
import { LoginView } from './views/LoginView';
import { EmployeeHome } from './views/EmployeeHome';
import { AdminDashboard } from './views/AdminDashboard';
import { ClaimsView } from './views/ClaimsView';
import { BottomNav } from './components/BottomNav';
import { NewsTicker } from './components/NewsTicker';
import { Logo } from './components/Logo';
import { UserRole } from './types';

// Simple SVG Placeholder for views not fully implemented in this demo
const PlaceholderView: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400 p-6 text-center">
    <div className="bg-gray-100 p-6 rounded-full mb-4">
      <Logo variant="icon" />
    </div>
    <h2 className="text-xl font-bold text-brand-dark mb-2">{title}</h2>
    <p>This module is under development for the prototype.</p>
  </div>
);

const App: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial splash screen load
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleLogin = (roleName: 'ADMIN' | 'EMPLOYEE') => {
    setCurrentRole(roleName === 'ADMIN' ? UserRole.ADMIN : UserRole.EMPLOYEE);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-orange flex flex-col items-center justify-center animate-pulse">
        <div className="bg-white p-6 rounded-3xl shadow-2xl">
           <Logo variant="full" />
        </div>
      </div>
    );
  }

  if (!currentRole) {
    return <LoginView onLogin={handleLogin} />;
  }

  // Desktop Admin View
  if (currentRole === UserRole.ADMIN) {
    return <AdminDashboard />;
  }

  // Mobile Employee View Wrapper
  return (
    <div className="min-h-screen bg-brand-light max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-gray-100">
      <NewsTicker />
      
      <main className="h-full overflow-y-auto no-scrollbar scroll-smooth">
        {activeTab === 'home' && <EmployeeHome />}
        {activeTab === 'claims' && <ClaimsView />}
        {activeTab === 'schedule' && <PlaceholderView title="Shift Schedule" />}
        {activeTab === 'action' && <PlaceholderView title="Quick Actions" />}
        {activeTab === 'profile' && <PlaceholderView title="User Profile" />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;