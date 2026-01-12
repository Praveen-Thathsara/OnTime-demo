import React from 'react';
import { User, Bell, Shield, Globe, Award } from 'lucide-react';
import { Button } from '../../components/Button';

export const Settings: React.FC = () => {
    return (
        <div className="animate-fade-in max-w-4xl">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-brand-dark">Settings</h1>
                <p className="text-gray-400 text-sm">Manage system preferences and account configuration.</p>
            </header>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 bg-gray-50 p-4 border-r border-gray-100">
                        {['General', 'Notifications', 'Security', 'Company Profile', 'Integrations'].map((item, i) => (
                            <button key={item} className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium mb-1 ${i === 0 ? 'bg-white text-brand-orange shadow-sm' : 'text-gray-500 hover:text-brand-dark hover:bg-gray-100'}`}>
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8">
                        <h3 className="font-bold text-lg text-brand-dark mb-6">General Settings</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
                                <input type="text" defaultValue="OnTime Smart Attendance" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white">
                                        <option>UTC+05:30 (Sri Lanka)</option>
                                        <option>UTC+00:00 (London)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">DateFormat</label>
                                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white">
                                        <option>DD/MM/YYYY</option>
                                        <option>MM/DD/YYYY</option>
                                    </select>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium text-brand-dark">Auto-check out</h4>
                                    <p className="text-xs text-gray-500">Automatically check out employees at midnight if they forgot.</p>
                                </div>
                                <div className="w-12 h-6 bg-brand-orange rounded-full relative cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <Button>Save Changes</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
