import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Play, TrendingUp, Calendar, Flame, CheckCircle2, Sparkles, 
    Watch, CreditCard, ArrowRight, Activity, Clock, MapPin, 
    Download, Settings as SettingsIcon, Shield, Bell, User
} from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface MemberDashboardProps {
    activeTab: string;
}

const MemberDashboard: React.FC<MemberDashboardProps> = ({ activeTab }) => {
    
    // Greeting Logic
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    // Sub-components for different views
    const Overview = () => (
        <div className="space-y-8 max-w-7xl mx-auto">
             {/* Welcome Banner */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 md:p-8 rounded-[2rem] bg-gradient-to-r from-indigo-50/50 to-blue-50/50 flex flex-col md:flex-row justify-between items-center gap-6"
            >
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                            alt="Profile" 
                            className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                        />
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">{getGreeting()}, Alex!</h1>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium text-xs">Active Membership</span>
                            <span>•</span>
                            <span>Consistency Score: <span className="text-slate-900 font-bold">94%</span></span>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="text-center px-4">
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Streak</div>
                        <div className="flex items-center gap-1 text-orange-500 font-bold text-xl">
                            <Flame className="w-5 h-5 fill-orange-500" /> 14 Days
                        </div>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div className="text-center px-4">
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Workouts</div>
                        <div className="text-slate-900 font-bold text-xl">
                            18/24
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Smart Insights Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2 glass-card p-6 rounded-[2rem] relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500" />
                    <div className="relative z-10 flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                Daily Recommendation
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 uppercase tracking-wider">AI Insight</span>
                            </h3>
                            <p className="text-slate-600 mt-2 leading-relaxed max-w-xl">
                                Your recovery score is <span className="font-bold text-slate-800">High (92%)</span> today. It's a great day to push for a Personal Best in your Deadlift session.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-6 rounded-[2rem] flex flex-col justify-between"
                >
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                            <Watch className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-900">Apple Watch</div>
                            <div className="text-xs text-green-600 font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Connected
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-xs text-slate-400">Steps Today</div>
                            <div className="text-2xl font-bold text-slate-900">8,432</div>
                        </div>
                        <Activity className="w-8 h-8 text-slate-200" />
                    </div>
                </motion.div>
            </div>

            {/* Today's Focus */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-2 relative group rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px]"
                >
                    <div className="absolute inset-0">
                        <img 
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200" 
                            alt="Workout" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    </div>

                    <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-end">
                        <div className="mb-auto flex justify-between items-start">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-4">
                                <Calendar className="w-3 h-3" /> TODAY'S PLAN
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Upper Body Power</h2>
                        <p className="text-slate-200 mb-8 max-w-lg">
                            Focus on chest and triceps. 50 minutes of hypertrophy training guided by Trainer Marcus.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary" size="lg" className="shadow-indigo-500/50 hover:shadow-indigo-500/70 border-none">
                                <Play className="w-4 h-4 fill-white mr-2" /> Start Workout
                            </Button>
                            <Button variant="glass" className="text-white border-white/30 hover:bg-white/10 bg-black/20">
                                <CheckCircle2 className="w-4 h-4 mr-2" /> Check In
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Progress Mini */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card p-6 rounded-[2rem] flex flex-col"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-900">Body Weight</h3>
                        <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">-1.2kg</div>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-2 min-h-[150px]">
                        {[65, 64.8, 64.5, 64.9, 64.2, 64.0, 63.8].map((w, i) => (
                             <div key={i} className="w-full bg-indigo-50 rounded-t-lg relative overflow-hidden group flex flex-col justify-end">
                                <div className={`w-full bg-indigo-500 rounded-t-lg transition-all duration-500 group-hover:bg-indigo-600`} style={{ height: `${(w - 60) * 15}%` }}></div>
                             </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-slate-400 font-medium">
                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                    <Button variant="secondary" className="w-full mt-6 text-sm">Full Progress Report</Button>
                </motion.div>
            </div>
        </div>
    );

    const Workouts = () => (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Your Training Plan</h2>
                <div className="flex gap-2">
                    <Button variant="secondary" size="sm">Download PDF</Button>
                </div>
            </div>

            {/* Calendar Strip */}
            <div className="glass-card p-4 rounded-3xl flex justify-between items-center overflow-x-auto">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <div key={i} className={`flex flex-col items-center justify-center w-14 h-20 rounded-2xl cursor-pointer transition-all ${i === 2 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'hover:bg-white/50 text-slate-500'}`}>
                        <span className="text-xs font-medium mb-1">{day}</span>
                        <span className="text-xl font-bold">{23 + i}</span>
                        {i === 2 && <div className="w-1.5 h-1.5 rounded-full bg-white mt-1" />}
                    </div>
                ))}
            </div>

            {/* Today's Exercises */}
            <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Wednesday • Upper Body Power</h3>
                
                {[
                    { name: "Barbell Bench Press", sets: "4 sets", reps: "8-10 reps", weight: "60kg", done: true },
                    { name: "Incline Dumbbell Press", sets: "3 sets", reps: "10-12 reps", weight: "24kg", done: false },
                    { name: "Overhead Press", sets: "3 sets", reps: "10 reps", weight: "40kg", done: false },
                    { name: "Tricep Pushdowns", sets: "3 sets", reps: "15 reps", weight: "20kg", done: false },
                ].map((ex, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`glass-card p-6 rounded-2xl flex items-center justify-between group ${ex.done ? 'opacity-60 bg-slate-50' : 'hover:bg-white/60'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors cursor-pointer ${ex.done ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 text-transparent hover:border-indigo-500'}`}>
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className={`font-bold text-lg ${ex.done ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{ex.name}</h4>
                                <div className="text-sm text-slate-500 flex gap-4 mt-1">
                                    <span>{ex.sets}</span>
                                    <span>{ex.reps}</span>
                                    <span className="font-medium text-indigo-600">{ex.weight}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="sm">History</Button>
                            <Button variant="secondary" size="sm">Notes</Button>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="flex justify-center pt-8">
                <Button variant="primary" size="lg" className="px-12">Complete Workout</Button>
            </div>
        </div>
    );

    const Progress = () => (
        <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Performance Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-[2.5rem]">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                             <h3 className="text-lg font-bold text-slate-900">Body Weight</h3>
                             <p className="text-sm text-slate-500">Last 30 days</p>
                        </div>
                        <div className="text-2xl font-bold text-indigo-600">63.8 kg</div>
                    </div>
                    {/* Mock Chart Area */}
                    <div className="h-64 flex items-end gap-3 px-2">
                         {[60, 50, 70, 60, 80, 75, 65, 55, 75, 85, 70, 80].map((h, i) => (
                             <div key={i} className="flex-1 bg-indigo-50 rounded-t-md relative overflow-hidden group">
                                <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.05 }}
                                    className="w-full absolute bottom-0 bg-indigo-500 rounded-t-md group-hover:bg-indigo-600 transition-colors" 
                                />
                             </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-3xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Strength Score</h3>
                                <p className="text-xs text-slate-500">Based on 1RM est.</p>
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">845</div>
                    </div>

                    <div className="glass-card p-6 rounded-3xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Total Time</h3>
                                <p className="text-xs text-slate-500">This month</p>
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">14h 20m</div>
                    </div>

                    <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-100">
                         <h3 className="font-bold text-slate-900 mb-2">AI Coach Insight</h3>
                         <p className="text-sm text-slate-600 leading-relaxed">
                             Your squat strength has increased by 5% this month. Consider increasing your baseline weight by 2.5kg for the next cycle.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const Attendance = () => (
        <div className="max-w-4xl mx-auto space-y-8">
             <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Attendance History</h2>
                <Button variant="primary">
                    <MapPin className="w-4 h-4 mr-2" /> Quick Check-In
                </Button>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
                <div className="p-6 border-b border-white/50 bg-white/30 backdrop-blur-sm flex justify-between items-center">
                    <div className="font-bold text-slate-900">October 2023</div>
                    <div className="text-sm text-slate-500">18 Visits</div>
                </div>
                <div className="divide-y divide-slate-100">
                    {[
                        { date: 'Oct 24', time: '09:00 AM - 10:15 AM', type: 'Gym Visit', gym: 'Downtown Branch' },
                        { date: 'Oct 22', time: '06:30 PM - 07:45 PM', type: 'Class: HIIT', gym: 'Downtown Branch' },
                        { date: 'Oct 20', time: '09:00 AM - 10:30 AM', type: 'Gym Visit', gym: 'Downtown Branch' },
                        { date: 'Oct 18', time: '08:45 AM - 09:45 AM', type: 'Gym Visit', gym: 'Downtown Branch' },
                    ].map((entry, i) => (
                        <div key={i} className="p-6 flex items-center justify-between hover:bg-white/40 transition-colors">
                            <div className="flex items-center gap-6">
                                <div className="w-16 text-center">
                                    <div className="font-bold text-slate-900 text-lg">{entry.date.split(' ')[1]}</div>
                                    <div className="text-xs text-slate-500 uppercase font-bold">{entry.date.split(' ')[0]}</div>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{entry.type}</div>
                                    <div className="text-sm text-slate-500 flex items-center gap-2">
                                        <Clock className="w-3 h-3" /> {entry.time}
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm font-medium text-slate-400 hidden md:block">
                                {entry.gym}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const Billing = () => (
        <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Membership & Billing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Active Plan Card */}
                <div className="glass-card p-8 rounded-[2rem] relative overflow-hidden bg-gradient-to-br from-indigo-900 to-slate-900 text-white border-none shadow-2xl">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                                Pro Plan
                            </div>
                            <CreditCard className="w-6 h-6 text-indigo-300" />
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-bold mb-2">$79<span className="text-lg text-indigo-200 font-normal">/mo</span></div>
                            <div className="text-indigo-200 text-sm">Next billing on November 1, 2023</div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="secondary" className="bg-white text-slate-900 hover:bg-indigo-50 border-none">Manage Plan</Button>
                            <Button variant="glass" className="bg-white/10 text-white border-white/20 hover:bg-white/20">Cancel</Button>
                        </div>
                     </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-3xl">
                        <h3 className="font-bold text-slate-900 mb-2">Payment Method</h3>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                            <div>
                                <div className="text-sm font-bold text-slate-900">•••• •••• •••• 4242</div>
                                <div className="text-xs text-slate-500">Expires 12/25</div>
                            </div>
                            <Button variant="ghost" size="sm" className="ml-auto">Update</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Invoices */}
            <div className="glass-card rounded-[2rem] p-6">
                <h3 className="font-bold text-slate-900 mb-6">Invoice History</h3>
                <div className="space-y-2">
                    {[
                        { id: 'INV-2023-001', date: 'Oct 01, 2023', amount: '$79.00', status: 'Paid' },
                        { id: 'INV-2023-002', date: 'Sep 01, 2023', amount: '$79.00', status: 'Paid' },
                        { id: 'INV-2023-003', date: 'Aug 01, 2023', amount: '$79.00', status: 'Paid' },
                    ].map((inv, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/50 transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <Download className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">{inv.date}</div>
                                    <div className="text-xs text-slate-500">{inv.id}</div>
                                </div>
                             </div>
                             <div className="flex items-center gap-4">
                                <div className="text-sm font-bold text-slate-900">{inv.amount}</div>
                                <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">{inv.status}</div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const Settings = () => (
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Account Settings</h2>
            
            <div className="glass-card p-8 rounded-[2rem] space-y-8">
                {/* Profile Section */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-indigo-600" /> Personal Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Full Name" defaultValue="Alex Morgan" />
                        <Input label="Email" defaultValue="alex.morgan@example.com" />
                        <Input label="Phone" defaultValue="+1 (555) 123-4567" />
                        <Input label="Date of Birth" type="date" />
                    </div>
                </div>

                <div className="h-px bg-slate-200" />

                {/* Notifications */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-indigo-600" /> Notifications
                    </h3>
                    <div className="space-y-4">
                        {[
                            'Workout Reminders',
                            'New Challenges',
                            'Account Activity',
                            'Marketing Emails'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-2">
                                <span className="text-slate-700 font-medium">{item}</span>
                                <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${i < 3 ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${i < 3 ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-slate-200" />

                 {/* Security */}
                 <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-indigo-600" /> Security
                    </h3>
                    <div className="flex gap-4">
                        <Button variant="secondary">Change Password</Button>
                        <Button variant="ghost" className="text-red-500 hover:bg-red-50 hover:text-red-600">Log Out All Devices</Button>
                    </div>
                </div>
                
                <div className="flex justify-end pt-4">
                    <Button variant="primary" size="lg">Save Changes</Button>
                </div>
            </div>
        </div>
    );

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                {activeTab === 'overview' && <Overview />}
                {activeTab === 'workouts' && <Workouts />}
                {activeTab === 'progress' && <Progress />}
                {activeTab === 'attendance' && <Attendance />}
                {activeTab === 'billing' && <Billing />}
                {activeTab === 'settings' && <Settings />}
            </motion.div>
        </AnimatePresence>
    );
};

export default MemberDashboard;