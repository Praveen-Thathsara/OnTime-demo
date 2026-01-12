import React from 'react';
import { Filter, Download } from 'lucide-react';
import { ATTENDANCE_HISTORY } from '../../constants';
import { Button } from '../../components/Button';

export const AttendanceHistory: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Attendance History</h1>
                    <p className="text-gray-400 text-sm">Review your past check-ins and performance.</p>
                </div>
                <Button variant="outline" className="text-sm">
                    <Download size={16} /> Export
                </Button>
            </header>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                        <Filter size={14} /> Filter by Month
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                        Status: All
                    </button>
                </div>

                <table className="w-full">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4 text-left">Date</th>
                            <th className="px-6 py-4 text-left">Check In</th>
                            <th className="px-6 py-4 text-left">Check Out</th>
                            <th className="px-6 py-4 text-left">Total Hours</th>
                            <th className="px-6 py-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {ATTENDANCE_HISTORY.map((record) => (
                            <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-brand-dark">
                                    {new Date(record.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                                </td>
                                <td className="px-6 py-4 text-gray-600">{record.checkIn}</td>
                                <td className="px-6 py-4 text-gray-600">{record.checkOut}</td>
                                <td className="px-6 py-4 font-medium text-gray-600">8h 30m</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${record.status === 'Present' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        {record.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {/* Mock more data */}
                        {[1, 2, 3].map((i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-brand-dark">
                                    {new Date(`2026-01-0${i}`).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                                </td>
                                <td className="px-6 py-4 text-gray-600">09:05 AM</td>
                                <td className="px-6 py-4 text-gray-600">05:00 PM</td>
                                <td className="px-6 py-4 font-medium text-gray-600">7h 55m</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-600">Present</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
