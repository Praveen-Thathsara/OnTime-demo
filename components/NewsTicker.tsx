import React from 'react';
import { Bell } from 'lucide-react';
import { NEWS_ITEMS } from '../constants';

export const NewsTicker: React.FC = () => {
  return (
    <div className="bg-brand-black text-white overflow-hidden py-2 relative flex items-center">
      <div className="absolute left-0 bg-brand-black z-10 px-3 flex items-center gap-2 border-r border-gray-700 h-full">
        <Bell size={14} className="text-brand-orange animate-pulse" />
        <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">News</span>
      </div>
      <div className="whitespace-nowrap animate-marquee flex items-center gap-8 pl-24">
        {NEWS_ITEMS.map((item) => (
          <span key={item.id} className="text-xs font-medium inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            {item.title}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {NEWS_ITEMS.map((item) => (
          <span key={item.id + '_dup'} className="text-xs font-medium inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            {item.title}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};