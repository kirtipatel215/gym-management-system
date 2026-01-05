import React from 'react';
import { motion } from 'framer-motion';
import { Users, CreditCard, TrendingUp, Activity, Settings, ChevronDown, AlertTriangle, TrendingDown, DollarSign, PieChart } from 'lucide-react';
import { Button } from './ui/Button';

interface AdminDashboardProps {
  activeTab: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ activeTab }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Gym Overview</h1>
            <p className="text-slate-500 mt-2">Live performance metrics & financial intelligence.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-white/60 border border-white/60 text-slate-600 text-sm font-medium hover:bg-white transition-all shadow-sm">
                Last 30 Days <ChevronDown className="w-4 h-4 inline ml-1" />
            </button>
            <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
                + New Member
            </button>
          </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Members', value: '1,248', change: '+12%', trend: 'up', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Active Today', value: '342', change: '+5%', trend: 'up', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Monthly Revenue', value: '$84,392', change: '+18%', trend: 'up', icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Churn Rate', value: '2.4%', change: '-0.5%', trend: 'down', icon: TrendingUp, color: 'text-rose-600', bg: 'bg-rose-50' },
          ].map((stat, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-3xl hover:translate-y-[-4px] transition-transform duration-300"
            >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-rose-100 text-rose-700'}`}>
                      {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-slate-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
      </div>

      {/* Phase 3: Advanced Intelligence Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Revenue Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass-card p-8 rounded-3xl"
          >
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-indigo-600" /> Revenue Intelligence
                    </h3>
                    <p className="text-sm text-slate-500">Breakdown by membership tier & add-ons</p>
                </div>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-slate-400" />
                </button>
            </div>
            
            <div className="flex items-end gap-12 mb-8">
                <div>
                    <div className="text-sm text-slate-400 font-medium mb-1">Projected (Oct)</div>
                    <div className="text-3xl font-bold text-slate-900">$92,400</div>
                </div>
                 <div>
                    <div className="text-sm text-slate-400 font-medium mb-1">Recurring</div>
                    <div className="text-3xl font-bold text-indigo-600">$78,250</div>
                </div>
                <div>
                    <div className="text-sm text-slate-400 font-medium mb-1">One-time</div>
                    <div className="text-3xl font-bold text-slate-600">$14,150</div>
                </div>
            </div>

            {/* Mock Complex Chart */}
            <div className="h-48 flex items-end justify-between gap-4 px-2">
                {[40, 65, 45, 80, 55, 70, 48, 85, 60, 75, 50, 90].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-1 h-full justify-end group">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 0.3}%` }}
                        className="w-full bg-indigo-200/50 rounded-md"
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 0.7}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="w-full bg-indigo-500/80 rounded-md group-hover:bg-indigo-600 transition-colors relative"
                      >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            ${h}k
                         </div>
                      </motion.div>
                  </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium px-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </motion.div>

          {/* Retention Intelligence (Churn Risk) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-3xl border-t-4 border-t-amber-400"
          >
             <div className="flex items-center gap-2 mb-6">
                 <AlertTriangle className="w-5 h-5 text-amber-500" />
                 <h3 className="font-bold text-slate-900">Retention Risk</h3>
             </div>
             <p className="text-sm text-slate-500 mb-6">AI detected 3 members at high risk of churning based on attendance patterns.</p>
             
             <div className="space-y-4">
                 {[
                     { name: 'Alex M.', risk: 'High', lastSeen: '14 days ago', img: 'https://i.pravatar.cc/100?img=33' },
                     { name: 'Jordan T.', risk: 'High', lastSeen: '18 days ago', img: 'https://i.pravatar.cc/100?img=11' },
                     { name: 'Casey L.', risk: 'Medium', lastSeen: '9 days ago', img: 'https://i.pravatar.cc/100?img=5' },
                 ].map((user, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                         <img src={user.img} className="w-10 h-10 rounded-full" alt={user.name} />
                         <div className="flex-1">
                             <div className="text-sm font-bold text-slate-900">{user.name}</div>
                             <div className="text-xs text-slate-500">Absent {user.lastSeen}</div>
                         </div>
                         <button className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1.5 rounded-lg hover:bg-amber-200">
                             Contact
                         </button>
                     </div>
                 ))}
             </div>
             <Button variant="ghost" className="w-full mt-6 text-sm">View Retention Report</Button>
          </motion.div>
      </div>

      {/* Recent Activity Card */}
      <div className="glass-card p-8 rounded-3xl">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Live Gym Activity</h3>
        <div className="space-y-6">
            {[
                { name: 'Sarah Wilson', time: '2 mins ago', status: 'Checked In', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80' },
                { name: 'James Rodri', time: '14 mins ago', status: 'Workout Done', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80' },
                { name: 'Marcus Chen', time: '32 mins ago', status: 'Checked In', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80' },
                { name: 'Emily Davis', time: '1 hour ago', status: 'Class Joined', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80' },
            ].map((user, i) => (
                <div key={i} className="flex items-center gap-4">
                    <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full border border-white shadow-sm" />
                    <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900">{user.name}</h4>
                    <p className="text-xs text-slate-500">{user.time}</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                    {user.status}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;