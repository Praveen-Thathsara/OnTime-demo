import React from 'react';
import { Download, FileText, BarChart2, PieChart } from 'lucide-react';
import { Button } from '../../components/Button';

export const Reports: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Reports & Analytics</h1>
                    <p className="text-gray-400 text-sm">Download attendance logs and performance summaries.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: 'Monthly Attendance', desc: 'Detailed log of all employee check-ins for the current month.', icon: FileText, color: 'bg-blue-50 text-blue-600' },
                    { title: 'Late Arrivals', desc: 'Report showing employees with frequent late arrivals.', icon: ClockIcon, color: 'bg-yellow-50 text-yellow-600' },
                    { title: 'Geofence Violations', desc: 'Log of all out-of-zone attendance attempts.', icon: MapPinIcon, color: 'bg-red-50 text-red-600' },
                    { title: 'Payroll Summary', desc: 'Estimated work hours formatted for payroll processing.', icon: DollarSignIcon, color: 'bg-green-50 text-green-600' },
                ].map((report, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className={`w-12 h-12 rounded-xl ${report.color} flex items-center justify-center mb-4`}>
                            <report.icon size={24} />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-2">{report.title}</h3>
                        <p className="text-sm text-gray-500 mb-6 flex-1">{report.desc}</p>
                        <Button variant="outline" className="w-full justify-center">
                            <Download size={16} /> Download CSV
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Icons not imported in main list to keep clean, referencing placeholders here
const ClockIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const MapPinIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const DollarSignIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);
