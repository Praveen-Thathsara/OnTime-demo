import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '../../components/Button';

export const Shifts: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Shift Management</h1>
                    <p className="text-gray-400 text-sm">Plan and organize work schedules.</p>
                </div>
                <Button>
                    <Plus size={18} /> Create New Shift
                </Button>
            </header>

            {/* Calendar Controls */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-bold text-brand-dark">January 2026</h2>
                    <div className="flex gap-1">
                        <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft size={20} /></button>
                        <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-sm font-medium text-brand-dark">Week</button>
                    <button className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-brand-dark">Month</button>
                    <button className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-brand-dark">Day</button>
                </div>
            </div>

            {/* Week Grid (Simple Mockup) */}
            <div className="grid grid-cols-7 gap-4">
                {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16', 'Sat 17', 'Sun 18'].map((day, i) => (
                    <div key={i} className="space-y-3">
                        <div className={`text-center p-3 rounded-xl border ${i === 0 ? 'bg-brand-orange text-white border-brand-orange' : 'bg-white border-gray-100'}`}>
                            <p className="font-bold">{day}</p>
                        </div>

                        {/* Mock Shift Cards */}
                        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                            <p className="text-xs font-bold text-gray-500 mb-1">09:00 - 17:00</p>
                            <p className="text-sm font-bold text-brand-dark">Morning Shift</p>
                            <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                                <Users size={12} /> 12 Employees
                            </div>
                        </div>

                        {i % 2 === 0 && (
                            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-purple-500">
                                <p className="text-xs font-bold text-gray-500 mb-1">17:00 - 01:00</p>
                                <p className="text-sm font-bold text-brand-dark">Night Shift</p>
                                <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                                    <Users size={12} /> 5 Employees
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
