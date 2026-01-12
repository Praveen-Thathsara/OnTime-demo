import React from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

interface LoginViewProps {
  onLogin: (role: 'ADMIN' | 'EMPLOYEE') => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-orange/5 border border-brand-pale text-center">
          <div className="flex justify-center mb-8">
            <Logo variant="full" />
          </div>
          
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Welcome Back</h2>
          <p className="text-gray-400 mb-8">Enter your mobile number to continue</p>

          <div className="space-y-4 mb-8 text-left">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+94 77 123 4567" 
                className="w-full mt-1 p-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
              />
            </div>
            <div>
               <label className="text-xs font-bold text-gray-500 uppercase ml-1">Company Code</label>
               <input 
                 type="text" 
                 placeholder="Enter code (e.g. NTB-01)" 
                 className="w-full mt-1 p-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
               />
            </div>
          </div>

          <div className="space-y-3">
             <Button fullWidth onClick={() => onLogin('EMPLOYEE')}>
               Login as Employee
             </Button>
             <button 
                onClick={() => onLogin('ADMIN')}
                className="text-sm text-gray-400 hover:text-brand-orange transition-colors font-medium"
             >
                Login as Administrator
             </button>
          </div>
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-8">
          On Time © 2025 Group 09. Sabaragamuwa University of Sri Lanka.
        </p>
      </div>
    </div>
  );
};