import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  CreditCard, 
  Settings, 
  Package, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search
} from 'lucide-react';
import { UserProfile } from '../shared/UserProfile';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-30 h-screen w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white p-1.5 rounded">
                <ShoppingCart size={20} />
              </div>
              <h1 className="text-xl font-bold">ShopDash</h1>
            </div>
            <button 
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={toggleSidebar}
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 py-6 overflow-y-auto">
            <nav className="px-3 space-y-1">
              <a href="#" className="sidebar-item active">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </a>
              <a href="#" className="sidebar-item">
                <ShoppingCart size={20} />
                <span>Orders</span>
              </a>
              <a href="#" className="sidebar-item">
                <Package size={20} />
                <span>Products</span>
              </a>
              <a href="#" className="sidebar-item">
                <Users size={20} />
                <span>Customers</span>
              </a>
              <a href="#" className="sidebar-item">
                <CreditCard size={20} />
                <span>Payments</span>
              </a>
              <a href="#" className="sidebar-item">
                <BarChart3 size={20} />
                <span>Analytics</span>
              </a>
            </nav>
          </div>

          <div className="border-t border-gray-200 p-4">
            <nav className="space-y-1">
              <a href="#" className="sidebar-item">
                <Settings size={20} />
                <span>Settings</span>
              </a>
              <a href="#" className="sidebar-item text-red-500 hover:bg-red-50">
                <LogOut size={20} />
                <span>Log out</span>
              </a>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white border-b border-gray-200 z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button 
                  className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={toggleSidebar}
                >
                  <Menu size={24} />
                </button>
                <div className="ml-4 lg:ml-0 relative max-w-md w-full hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>
                <UserProfile 
                  name="Alex Morgan" 
                  role="Store Owner"
                  imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};