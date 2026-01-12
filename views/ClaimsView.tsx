import React from 'react';
import { Camera, Upload, Plus } from 'lucide-react';
import { Button } from '../components/Button';
import { RECENT_CLAIMS } from '../constants';

export const ClaimsView: React.FC = () => {
  return (
    <div className="pb-24 p-6 pt-8">
      <h1 className="text-2xl font-bold text-black mb-6">Claims & Leave</h1>

      {/* New Claim Button */}
      <button className="w-full bg-white border-2 border-dashed border-brand-orange/40 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 mb-8 group hover:border-brand-orange hover:bg-brand-light transition-all">
        <div className="w-12 h-12 rounded-full bg-brand-pale flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
          <Plus size={24} />
        </div>
        <span className="font-semibold text-brand-dark">New Request</span>
        <span className="text-xs text-gray-400">Apply for leave or submit medical bill</span>
      </button>

      {/* Categories */}
      <h3 className="text-lg font-bold text-brand-dark mb-4">Recent Requests</h3>
      <div className="space-y-4">
        {RECENT_CLAIMS.map((claim) => (
          <div key={claim.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-brand-light p-3 rounded-lg text-brand-orange">
                {claim.type === 'Medical' ? <Camera size={20} /> : <Upload size={20} />}
              </div>
              <div>
                <p className="font-semibold text-brand-dark">{claim.type} Claim</p>
                <p className="text-xs text-gray-400">{claim.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-brand-dark">LKR {claim.amount}</p>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                claim.status === 'Approved' ? 'bg-green-100 text-green-600' :
                claim.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                'bg-red-100 text-red-600'
              }`}>
                {claim.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};