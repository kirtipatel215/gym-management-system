import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, Calendar, Settings, 
  LogOut, Bell, Search, Activity, 
  CreditCard, UserCircle, Dumbbell, Shield, CheckCircle2
} from 'lucide-react';
import { APP_NAME } from '../constants';
import { UserRole } from '../App';
import AdminDashboard from './AdminDashboard';
import MemberDashboard from './MemberDashboard';
import TrainerDashboard from './TrainerDashboard';

interface DashboardProps {
  role: UserRole;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ role, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Reset tab when role changes
  useEffect(() => {
    setActiveTab('overview');
  }, [role]);
  
  // Define navigation items based on role
  const getNavItems = (role: UserRole) => {
      switch(role) {
          case 'member':
              return [
                  { id: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
                  { id: 'workouts', icon: Dumbbell, label: 'My Workouts' },
                  { id: 'progress', icon: Activity, label: 'Progress' },
                  { id: 'attendance', icon: Calendar, label: 'Attendance' },
                  { id: 'billing', icon: CreditCard, label: 'Membership' },
                  { id: 'settings', icon: Settings, label: 'Settings' },
              ];
          case 'trainer':
              return [
                  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
                  { id: 'schedule', icon: Calendar, label: 'Schedule' },
                  { id: 'clients', icon: Users, label: 'Clients' },
                  { id: 'workouts', icon: Dumbbell, label: 'Workouts' },
              ];
          case 'admin':
          default:
              return [
                  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
                  { id: 'members', icon: Users, label: 'Members' },
                  { id: 'schedule', icon: Calendar, label: 'Schedule' },
                  { id: 'financials', icon: CreditCard, label: 'Financials' },
              ];
      }
  };

  const navItems = getNavItems(role);

  const getRoleLabel = (role: UserRole) => {
      if (role === 'admin') return 'Gym Owner';
      if (role === 'trainer') return 'Head Trainer';
      return 'Premium Member';
  };

  const renderContent = () => {
      switch(role) {
          case 'member': return <MemberDashboard activeTab={activeTab} />;
          case 'trainer': return <TrainerDashboard activeTab={activeTab} />;
          case 'admin': return <AdminDashboard activeTab={activeTab} />;
          default: return <AdminDashboard activeTab={activeTab} />;
      }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      {/* Glass Sidebar */}
      <aside className="w-20 lg:w-72 bg-white/60 backdrop-blur-xl border-r border-white/40 flex flex-col justify-between p-4 z-20 transition-all duration-300">
        <div>
          <div className="flex items-center gap-3 px-2 mb-10 mt-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
              L
            </div>
            <span className="font-bold text-slate-800 text-lg hidden lg:block tracking-tight">{APP_NAME}</span>
          </div>

          <div className="mb-6 px-4 py-2 bg-indigo-50/50 rounded-xl hidden lg:block">
             <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Current Role</div>
             <div className="text-sm font-bold text-indigo-900 capitalize flex items-center gap-2">
                {role === 'admin' && <Shield className="w-4 h-4" />}
                {role === 'trainer' && <Users className="w-4 h-4" />}
                {role === 'member' && <UserCircle className="w-4 h-4" />}
                {role}
             </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group
                  ${activeTab === item.id 
                    ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-white/50 hover:text-slate-900'
                  }
                `}
              >
                <item.icon className={`w-6 h-6 ${activeTab === item.id ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="font-medium hidden lg:block">{item.label}</span>
                {activeTab === item.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 hidden lg:block" />}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all duration-300"
          >
            <LogOut className="w-6 h-6" />
            <span className="font-medium hidden lg:block">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background blobs for depth */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
           <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
        </div>

        {/* Top Header */}
        <header className="h-20 px-8 flex items-center justify-between bg-white/40 backdrop-blur-md border-b border-white/40 shrink-0">
           <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
              <span>App</span>
              <span>/</span>
              <span className="text-slate-900 capitalize">{role} Dashboard</span>
              <span>/</span>
              <span className="text-indigo-600 capitalize font-semibold">{activeTab.replace('-', ' ')}</span>
           </div>

           <div className="flex items-center gap-6">
              <div className="relative hidden md:block">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-10 pr-4 py-2 rounded-full bg-white/60 border border-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 w-64 transition-all"
                 />
              </div>
              
              <button className="relative p-2 rounded-full bg-white/60 hover:bg-white transition-colors text-slate-500">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
              </button>
              
              <div className="flex items-center gap-3 pl-6 border-l border-slate-200/60">
                 <div className="text-right hidden md:block">
                    <div className="text-sm font-bold text-slate-900">Alex Morgan</div>
                    <div className="text-xs text-slate-500">{getRoleLabel(role)}</div>
                 </div>
                 <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                 />
              </div>
           </div>
        </header>

        {/* Dashboard Content Container */}
        <div className="flex-1 overflow-auto p-6 lg:p-10 pb-20 scroll-smooth">
           {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;