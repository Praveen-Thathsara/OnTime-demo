import React from 'react';
import { Plus, FileText, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../../components/Button';
import { RECENT_CLAIMS } from '../../constants';

export const Claims: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Expense Claims</h1>
                    <p className="text-gray-400 text-sm">Submit and track your reimbursement requests.</p>
                </div>
                <Button>
                    <Plus size={18} /> New Claim
                </Button>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Pending Amount</p>
                    <p className="text-2xl font-bold text-brand-orange">$125.00</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Approved (This Month)</p>
                    <p className="text-2xl font-bold text-green-600">$450.00</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Total Claims</p>
                    <p className="text-2xl font-bold text-brand-dark">12</p>
                </div>
            </div>

            <div className="space-y-4">
                {RECENT_CLAIMS.map((claim) => (
                    <div key={claim.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${claim.status === 'Approved' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-dark">{claim.type} Claim</h3>
                                <p className="text-sm text-gray-500">{claim.date} • ID: #{claim.id}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-bold text-brand-dark text-lg">${claim.amount}</p>
                            <div className={`flex items-center justify-end gap-1 text-xs font-bold ${claim.status === 'Approved' ? 'text-green-600' : 'text-yellow-600'}`}>
                                {claim.status === 'Approved' ? <CheckCircle size={12} /> : <Clock size={12} />}
                                {claim.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
