import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

// Sample data - in a real app this would come from an API
const data = [
  { name: 'Jan', revenue: 4000, orders: 240 },
  { name: 'Feb', revenue: 3000, orders: 198 },
  { name: 'Mar', revenue: 5000, orders: 281 },
  { name: 'Apr', revenue: 7800, orders: 390 },
  { name: 'May', revenue: 5500, orders: 430 },
  { name: 'Jun', revenue: 6000, orders: 380 },
  { name: 'Jul', revenue: 7300, orders: 460 },
];

const timeRanges = ['7 Days', '30 Days', '3 Months', '12 Months', 'All'];

export const SalesChart: React.FC = () => {
  const [activeRange, setActiveRange] = useState('30 Days');

  return (
    <div className="card overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold">Sales Overview</h2>
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {timeRanges.map((range) => (
              <button
                key={range}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeRange === range
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-semibold mt-1">$38,600</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="text-xl font-semibold mt-1">2,379</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Avg. Order Value</p>
            <p className="text-xl font-semibold mt-1">$162.3</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Conversion Rate</p>
            <p className="text-xl font-semibold mt-1">3.2%</p>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                tickFormatter={(value) => `$${value}`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                domain={[0, 'dataMax + 100']}
              />
              <Tooltip />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#3B82F6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
                activeDot={{ r: 6 }}
                name="Revenue"
                unit="$"
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#F97316"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorOrders)"
                activeDot={{ r: 6 }}
                name="Orders"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};