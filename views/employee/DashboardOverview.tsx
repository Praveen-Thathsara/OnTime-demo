import React, { useState } from 'react';
import { Clock, Calendar, ChevronRight, FileCheck, MapPin } from 'lucide-react';
import { Button } from '../../components/Button';
import { EmergencyButton } from '../../components/EmergencyButton';
import { UPCOMING_SHIFTS, ATTENDANCE_HISTORY, RECENT_CLAIMS, MOCK_USER } from '../../constants';

export const DashboardOverview: React.FC = () => {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [isInZone, setIsInZone] = useState(true);

    const handleCheckInOut = () => {
        if (!isInZone) {
            alert("⚠️ You are outside the designated geofence zone! Alert will be sent to manager.");
            return;
        }
        setIsCheckedIn(!isCheckedIn);
    };

    return (
        <div className="animate-fade-in">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Employee Dashboard</h1>
                    <p className="text-gray-400 text-sm">Welcome back, {MOCK_USER.name}. Here's your status for today.</p>
                </div>
                <div className="flex gap-3">
                    <EmergencyButton />
                </div>
            </header>

            {/* Action Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Check In/Out Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Clock size={100} className="text-brand-orange" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-brand-dark">Attendance</h3>
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${isInZone ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <span className="text-xs text-gray-400">
                                    {isInZone ? 'In Zone' : 'Out of Zone'}
                                </span>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <div className="text-4xl font-bold text-brand-dark mb-2">
                                {isCheckedIn ? '08:00 AM' : '--:-- --'}
                            </div>
                            <p className="text-sm text-gray-400">
                                {isCheckedIn ? 'Checked In' : 'Not Checked In Yet'}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Button
                                fullWidth
                                onClick={handleCheckInOut}
                                variant={isCheckedIn ? 'secondary' : 'primary'}
                            >
                                {isCheckedIn ? 'Check Out' : 'Check In Now'}
                            </Button>
                            <button
                                onClick={() => setIsInZone(!isInZone)}
                                className="w-full text-xs text-gray-400 hover:text-brand-orange transition-colors"
                            >
                                {isInZone ? 'Simulate: Step Out of Zone' : 'Simulate: Return to Zone'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Current Shift Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-brand-dark">Today's Schedule</h3>
                        <span className="bg-brand-pale text-brand-orange text-xs font-bold px-2 py-1 rounded">ACTIVE</span>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                        <div className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-brand-orange">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-brand-dark">{UPCOMING_SHIFTS[0].title}</p>
                                <p className="text-sm text-gray-500">{UPCOMING_SHIFTS[0].startTime} - {UPCOMING_SHIFTS[0].endTime}</p>
                                <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                                    <MapPin size={12} /> Main Branch
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button variant="outline" fullWidth className="text-sm">View Full Schedule</Button>
                </div>

                {/* Pending Claims Card */}
                <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-sm relative overflow-hidden">
                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="font-bold mb-1">Expense Claims</h3>
                        <p className="text-gray-400 text-sm mb-6">Manage your reimbursements</p>

                        <div className="mt-auto">
                            <div className="text-3xl font-bold text-brand-orange mb-1">
                                {RECENT_CLAIMS.filter(c => c.status === 'Pending').length}
                            </div>
                            <p className="text-sm text-gray-400 mb-4">Pending Approvals</p>

                            <Button variant="outline" fullWidth className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                                Submit New Claim
                            </Button>
                        </div>
                    </div>
                    <FileCheck size={120} className="absolute -bottom-4 -right-4 text-white/5" />
                </div>
            </div>

            {/* History Table Snippet */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-brand-dark">Recent Activity</h3>
                    <button className="text-sm font-medium text-brand-orange hover:text-brand-dark transition-colors">View All History</button>
                </div>

                <table className="w-full">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4 text-left">Date</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-left">Check In</th>
                            <th className="px-6 py-4 text-left">Check Out</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {ATTENDANCE_HISTORY.slice(0, 3).map((record) => (
                            <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-brand-dark">
                                    {new Date(record.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${record.status === 'Present' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        {record.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{record.checkIn}</td>
                                <td className="px-6 py-4 text-gray-500">{record.checkOut}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
