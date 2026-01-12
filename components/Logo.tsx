import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon Part */}
      <img src="/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
    </div>
  );
};