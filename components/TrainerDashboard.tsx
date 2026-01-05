import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, MessageCircle, ChevronRight, AlertCircle, CheckCircle, Brain, TrendingUp, Star } from 'lucide-react';

interface TrainerDashboardProps {
  activeTab: string;
}

const TrainerDashboard: React.FC<TrainerDashboardProps> = ({ activeTab }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Trainer Dashboard</h1>
                <p className="text-slate-500 mt-1">You have 4 sessions remaining today.</p>
            </div>
            <div className="flex items-center gap-6">
                 {/* Phase 3: Performance Mini-Stat */}
                 <div className="hidden md:block text-right">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Client Rating</div>
                    <div className="text-lg font-bold text-slate-900 flex items-center justify-end gap-1">
                        4.9 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                 </div>
                 <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                         <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                     ))}
                     <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">+12</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Schedule Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2 glass-card p-8 rounded-[2rem]"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-indigo-600" /> Today's Schedule
                    </h2>
                    <span className="text-sm text-slate-400 font-medium">Oct 24, 2023</span>
                </div>

                <div className="space-y-6">
                    {[
                        { time: '09:00 AM', client: 'Alice Freeman', type: 'HIIT Session', status: 'Completed', color: 'text-slate-400' },
                        { time: '11:00 AM', client: 'Michael Scott', type: 'Strength Training', status: 'In Progress', color: 'text-indigo-600' },
                        { time: '02:00 PM', client: 'Sarah Connor', type: 'Cardio & Core', status: 'Upcoming', color: 'text-slate-900' },
                        { time: '04:30 PM', client: 'David Kim', type: 'Assessment', status: 'Upcoming', color: 'text-slate-900' },
                    ].map((session, i) => (
                        <div key={i} className="flex gap-6 relative group">
                            {/* Timeline Line */}
                            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-slate-100 group-last:hidden"></div>
                            
                            <div className="w-[60px] text-xs font-bold text-slate-400 pt-1">{session.time}</div>
                            
                            <div className={`flex-1 p-4 rounded-2xl border transition-all duration-300 ${session.status === 'In Progress' ? 'bg-indigo-50 border-indigo-100 shadow-sm' : 'bg-white/50 border-slate-100 hover:border-slate-200'}`}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className={`font-bold text-sm ${session.color}`}>{session.client}</h3>
                                        <p className="text-xs text-slate-500 mt-1">{session.type}</p>
                                    </div>
                                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${session.status === 'In Progress' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                                        {session.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Side Panel: Tasks & Alerts */}
            <div className="space-y-6">
                
                {/* Phase 3: AI Client Insights */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-6 rounded-3xl border border-indigo-100 bg-gradient-to-b from-white/60 to-indigo-50/30"
                >
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-indigo-500" /> AI Client Insights
                    </h3>
                    <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-white/60 border border-white shadow-sm">
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-bold text-slate-800">Alice Freeman</span>
                                <span className="text-[10px] font-bold bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full">Fatigue Risk</span>
                             </div>
                             <p className="text-xs text-slate-500 leading-relaxed mb-3">
                                High intensity load for 5 consecutive days. Recommend light session next.
                             </p>
                             <button className="w-full py-1.5 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold hover:bg-indigo-100 transition-colors">
                                Adjust Plan
                             </button>
                        </div>
                    </div>
                </motion.div>

                {/* Client Alerts */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-6 rounded-3xl"
                >
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-500" /> Needs Attention
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50">
                            <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full" alt="" />
                            <div className="flex-1">
                                <div className="text-sm font-bold text-slate-800">Tom H.</div>
                                <div className="text-xs text-red-500 font-medium">Missed 3 sessions</div>
                            </div>
                            <button className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg">
                                <MessageCircle className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Feedback */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card p-6 rounded-3xl"
                >
                    <h3 className="font-bold text-slate-900 mb-4">Pending Feedback</h3>
                    <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white/50 border border-slate-100">
                             <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-slate-600">Morning HIIT Group</span>
                                <span className="text-xs text-slate-400">10:00 AM</span>
                             </div>
                             <p className="text-xs text-slate-500 mb-3">Please rate the intensity of today's group class.</p>
                             <button className="w-full py-2 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold hover:bg-indigo-100">Complete Report</button>
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    </div>
  );
};

export default TrainerDashboard;