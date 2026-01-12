import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const EmergencyButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleTrigger = () => {
    setIsOpen(true);
  };

  const startSOS = () => {
    setCountdown(5);
    // Simulation of countdown
    let count = 5;
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        alert("Emergency Alert Sent to Managers via SMS & Push Notification!");
        setIsOpen(false);
        setCountdown(null);
      }
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={handleTrigger}
        className="fixed top-20 right-4 bg-red-100 text-red-600 p-2 rounded-full shadow-sm hover:bg-red-200 transition-colors z-40 flex items-center gap-2 pr-4 pl-2"
      >
        <div className="bg-red-600 text-white p-1 rounded-full">
            <AlertTriangle size={16} />
        </div>
        <span className="text-xs font-bold">SOS</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm text-center relative animate-in zoom-in duration-300">
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
                <X size={24} />
            </button>
            
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
              <AlertTriangle size={40} />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency Alert</h2>
            <p className="text-gray-500 mb-6 text-sm">
              This will instantly notify your manager and admin with your live location.
            </p>

            {countdown !== null ? (
              <div className="text-4xl font-black text-brand-orange mb-6">
                {countdown}
              </div>
            ) : (
              <button
                onClick={startSOS}
                className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-500/40 active:scale-95 transition-transform"
              >
                PRESS TO SEND ALERT
              </button>
            )}
            
            <p className="mt-4 text-xs text-gray-400">
              Only use in case of genuine emergencies.
            </p>
          </div>
        </div>
      )}
    </>
  );
};