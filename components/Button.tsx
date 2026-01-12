import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-4 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 hover:bg-orange-600",
    secondary: "bg-brand-pale text-brand-dark hover:bg-orange-200",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10",
    danger: "bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};