import React from 'react';
import { Search, Plus, Filter, MoreHorizontal, Mail, Phone } from 'lucide-react';
import { Button } from '../../components/Button';

export const Employees: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Employees</h1>
                    <p className="text-gray-400 text-sm">Manage your workforce, view profiles and statuses.</p>
                </div>
                <Button>
                    <Plus size={18} /> Add New Employee
                </Button>
            </header>

            {/* Toolbar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex justify-between items-center">
                <div className="relative w-96">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name, ID or role..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                        <Filter size={16} /> Filter
                    </button>
                </div>
            </div>

            {/* Employee List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4 text-left">Employee</th>
                            <th className="px-6 py-4 text-left">Role</th>
                            <th className="px-6 py-4 text-left">Contact</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-brand-pale flex items-center justify-center text-brand-dark font-bold">
                                            {['JD', 'AS', 'MR', 'TK', 'PL'][i]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-brand-dark">Employee Name {i + 1}</p>
                                            <p className="text-xs text-gray-400">ID: EMP-00{i + 1}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {['Software Engineer', 'Product Manager', 'Designer', 'QA Engineer', 'HR Manager'][i]}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                                        <div className="flex items-center gap-1"><Mail size={12} /> user{i + 1}@example.com</div>
                                        <div className="flex items-center gap-1"><Phone size={12} /> +94 77 123 456{i}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${i % 3 === 0 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                        {i % 3 === 0 ? 'Active' : 'On Leave'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-brand-dark">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
