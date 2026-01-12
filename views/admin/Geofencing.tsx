import React from 'react';
import { MapPin, Plus, Navigation } from 'lucide-react';
import { Button } from '../../components/Button';

export const Geofencing: React.FC = () => {
    return (
        <div className="animate-fade-in flex flex-col h-[calc(100vh-80px)]">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Geofencing</h1>
                    <p className="text-gray-400 text-sm">Define and manage safe zones for attendance.</p>
                </div>
                <Button>
                    <Plus size={18} /> Add New Zone
                </Button>
            </header>

            <div className="flex gap-6 flex-1 overflow-hidden">
                {/* Sidebar List */}
                <div className="w-80 flex flex-col gap-4 overflow-y-auto pr-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`p-4 rounded-xl border cursor-pointer transition-all ${i === 1 ? 'bg-white border-brand-orange shadow-md ring-1 ring-brand-orange' : 'bg-white border-gray-100 hover:border-brand-orange/50'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-brand-dark">HQ - Main Office</h3>
                                <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE</span>
                            </div>
                            <p className="text-xs text-gray-500 mb-3">Colombo 03, Sri Lanka</p>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>Radius: 500m</span>
                                <span>24 Employees</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Placeholder */}
                <div className="flex-1 bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden flex items-center justify-center">
                    <div className="text-center text-gray-400">
                        <MapPin size={48} className="mx-auto mb-2 text-gray-300" />
                        <p className="font-medium">Map View Integration</p>
                        <p className="text-sm">Interactive map would be rendered here</p>
                    </div>

                    {/* Mock Map Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-50"><Navigation size={20} /></button>
                        <button className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-50 font-bold">+</button>
                        <button className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-50 font-bold">-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
