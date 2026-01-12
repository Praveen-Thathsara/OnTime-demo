import React from 'react';
import { User, Mail, Phone, MapPin, Shield, Key, ChevronRight } from 'lucide-react';
import { MOCK_USER } from '../../constants';
import { Button } from '../../components/Button';

export const Profile: React.FC = () => {
    return (
        <div className="animate-fade-in max-w-4xl">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-brand-dark">My Profile</h1>
                <p className="text-gray-400 text-sm">Manage your personal information and preferences.</p>
            </header>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                        <img src={MOCK_USER.avatarUrl} alt="Profile" className="w-32 h-32 rounded-full border-4 border-brand-pale" />
                        <button className="absolute bottom-0 right-0 bg-brand-orange text-white p-2 rounded-full shadow-md hover:bg-orange-600 transition-colors">
                            <User size={16} />
                        </button>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-2xl font-bold text-brand-dark mb-1">{MOCK_USER.name}</h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                            <span className="bg-brand-pale text-brand-dark px-3 py-1 rounded-full text-xs font-bold">{MOCK_USER.role}</span>
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Active Employee</span>
                        </div>
                    </div>

                    <Button variant="outline">Edit Profile</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-brand-dark mb-4">Personal Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Email Address</p>
                                <p className="font-medium text-brand-dark">praveen.kumar@example.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Phone Number</p>
                                <p className="font-medium text-brand-dark">+94 77 123 4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Address</p>
                                <p className="font-medium text-brand-dark">123, Main Street, Colombo 03</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-brand-dark mb-4">Security & Settings</h3>
                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 hover:border-brand-pale group">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-50 text-blue-500 p-2 rounded-lg">
                                    <Key size={18} />
                                </div>
                                <span className="font-medium text-brand-dark text-sm">Change Password</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-orange" />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 hover:border-brand-pale group">
                            <div className="flex items-center gap-3">
                                <div className="bg-purple-50 text-purple-500 p-2 rounded-lg">
                                    <Shield size={18} />
                                </div>
                                <span className="font-medium text-brand-dark text-sm">Two-Factor Auth</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-orange" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
