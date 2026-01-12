import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Search } from 'lucide-react';
import { UPCOMING_SHIFTS } from '../../constants';

export const MyShifts: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <header className="mb-6">
                <h1 className="text-2xl font-bold text-brand-dark">My Shifts</h1>
                <p className="text-gray-400 text-sm">View your upcoming work schedule and history.</p>
            </header>

            {/* Toolbar */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {['Upcoming', 'Past', 'Time Off Request'].map((tab, i) => (
                    <button key={tab} className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-brand-orange text-white' : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'}`}>
                        {tab}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {UPCOMING_SHIFTS.map((shift) => (
                    <div key={shift.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex gap-4">
                            <div className="bg-brand-pale text-brand-orange p-3 rounded-xl h-fit">
                                <CalendarIcon size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-dark text-lg">{shift.title}</h3>
                                <p className="text-gray-500 text-sm mb-2">{shift.type} • {shift.startTime} - {shift.endTime}</p>
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <MapPin size={12} /> Main Branch, Colombo
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-right hidden md:block">
                                <p className="text-xs font-bold text-gray-400 uppercase">Duration</p>
                                <p className="font-medium text-brand-dark">8h 30m</p>
                            </div>
                            <div className="h-8 w-px bg-gray-100 hidden md:block"></div>
                            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-xs font-bold">
                                CONFIRMED
                            </span>
                        </div>
                    </div>
                ))}

                {/* Mock Future Shifts */}
                {[1, 2].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="flex gap-4">
                            <div className="bg-gray-50 text-gray-400 p-3 rounded-xl h-fit">
                                <CalendarIcon size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-dark text-lg">Regular Shift</h3>
                                <p className="text-gray-500 text-sm mb-2">2026-01-{20 + i} • 09:00 AM - 05:00 PM</p>
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <MapPin size={12} /> Main Branch, Colombo
                                </div>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-bold w-fit">
                            SCHEDULED
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
