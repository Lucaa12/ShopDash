import React from 'react';
import { ShoppingCart, TrendingUp, Users, CreditCard, Package } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { SalesChart } from '../components/dashboard/SalesChart';
import { TopProducts } from '../components/dashboard/TopProducts';
import { RecentOrders } from '../components/dashboard/RecentOrders';
import { CustomerSegment } from '../components/dashboard/CustomerSegment';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, here's what's happening with your store today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Sales"
          value="$38,621"
          percentageChange={12.5}
          icon={<TrendingUp size={18} />}
          color="blue"
        />
        <StatCard
          title="Total Orders"
          value="2,379"
          percentageChange={8.2}
          icon={<ShoppingCart size={18} />}
          color="green"
        />
        <StatCard
          title="Total Customers"
          value="1,843"
          percentageChange={4.9}
          icon={<Users size={18} />}
          color="orange"
        />
        <StatCard
          title="Average Order"
          value="$162.34"
          percentageChange={-2.4}
          icon={<CreditCard size={18} />}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <CustomerSegment />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopProducts />
        </div>
        <div>
          <RecentOrders />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Inventory Status</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">Low Stock Items</span>
                <span className="text-red-600 font-medium">24 products</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">Out of Stock Items</span>
                <span className="text-orange-600 font-medium">8 products</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">Well Stocked Items</span>
                <span className="text-green-600 font-medium">68 products</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="btn btn-primary w-full">Manage Inventory</button>
          </div>
        </div>
        
        <div className="card p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-outline flex items-center justify-center py-4">
              <Package size={20} className="mr-2" />
              <span>Add Product</span>
            </button>
            <button className="btn btn-outline flex items-center justify-center py-4">
              <TrendingUp size={20} className="mr-2" />
              <span>View Reports</span>
            </button>
            <button className="btn btn-outline flex items-center justify-center py-4">
              <ShoppingCart size={20} className="mr-2" />
              <span>Process Orders</span>
            </button>
            <button className="btn btn-outline flex items-center justify-center py-4">
              <Users size={20} className="mr-2" />
              <span>Customer List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;