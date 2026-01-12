import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Clock, AlertTriangle, Calendar, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';

const DATA_ATTENDANCE = [
  { name: 'Mon', present: 40, absent: 5, late: 2 },
  { name: 'Tue', present: 38, absent: 7, late: 2 },
  { name: 'Wed', present: 42, absent: 3, late: 2 },
  { name: 'Thu', present: 41, absent: 4, late: 2 },
  { name: 'Fri', present: 35, absent: 10, late: 2 },
];

const DATA_DISTRIBUTION = [
  { name: 'On Time', value: 75 },
  { name: 'Late', value: 15 },
  { name: 'Absent', value: 10 },
];

const COLORS = ['#F79F21', '#5A5757', '#FFE5C0'];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col p-6">
        <Logo className="mb-10" />
        
        <nav className="space-y-2 flex-1">
          {['Dashboard', 'Employees', 'Shifts', 'Geofencing', 'Reports', 'Settings'].map((item, idx) => (
            <button key={item} className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${idx === 0 ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' : 'text-gray-500 hover:bg-gray-50'}`}>
              {item}
            </button>
          ))}
        </nav>

        <div className="bg-brand-pale/50 p-4 rounded-xl mt-auto">
          <p className="text-xs font-bold text-brand-dark mb-2">Admin Profile</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs">SA</div>
            <div className="text-xs text-gray-600">
              <p className="font-bold">Mrs. Adeeba</p>
              <p>Supervisor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-brand-dark">Dashboard Overview</h1>
            <p className="text-gray-400 text-sm">Welcome back, here's what's happening today.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="text-sm py-2">
                <Download size={16} /> Export Report
             </Button>
             <Button className="text-sm py-2">
                <Calendar size={16} /> Create Shift
             </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Employees', val: '48', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Checked In', val: '42', icon: Clock, color: 'text-green-500', bg: 'bg-green-50' },
            { label: 'Late Arrivals', val: '5', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
            { label: 'Outside Zone Alerts', val: '2', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
          ].map((stat, idx) => {
             const Icon = stat.icon;
             return (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                 <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                   <Icon size={24} />
                 </div>
                 <div>
                   <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                   <h3 className="text-2xl font-bold text-brand-dark">{stat.val}</h3>
                 </div>
               </div>
             )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
            <h3 className="font-bold text-brand-dark mb-6">Weekly Attendance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DATA_ATTENDANCE}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                  <Tooltip cursor={{fill: '#F3F4F6'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                  <Bar dataKey="present" fill="#F79F21" radius={[4, 4, 0, 0]} barSize={20} />
                  <Bar dataKey="absent" fill="#E5E7EB" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-brand-dark mb-6">Daily Status</h3>
             <div className="h-64">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie
                      data={DATA_DISTRIBUTION}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {DATA_DISTRIBUTION.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                 </PieChart>
               </ResponsiveContainer>
               <div className="flex justify-center gap-4 mt-4">
                  {DATA_DISTRIBUTION.map((item, index) => (
                    <div key={index} className="flex items-center gap-1 text-xs text-gray-500">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                      {item.name}
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </div>

        {/* Recent Alerts Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
             <h3 className="font-bold text-brand-dark">Recent Geofence Alerts</h3>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4 text-left">Employee</th>
                <th className="px-6 py-4 text-left">Time</th>
                <th className="px-6 py-4 text-left">Location</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-medium text-brand-dark">Kasun Bandara</td>
                <td className="px-6 py-4 text-gray-500">10:45 AM</td>
                <td className="px-6 py-4 text-gray-500">Site B - Perimeter</td>
                <td className="px-6 py-4"><span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">OUTSIDE ZONE</span></td>
              </tr>
               <tr>
                <td className="px-6 py-4 font-medium text-brand-dark">D. Disanayaka</td>
                <td className="px-6 py-4 text-gray-500">09:15 AM</td>
                <td className="px-6 py-4 text-gray-500">Main Office</td>
                <td className="px-6 py-4"><span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-bold">VERIFIED</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};