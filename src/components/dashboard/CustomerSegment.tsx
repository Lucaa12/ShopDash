import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Sample data for customer segments
const data = [
  { name: 'New', value: 35, color: '#3B82F6' },
  { name: 'Returning', value: 45, color: '#10B981' },
  { name: 'Loyal', value: 20, color: '#F97316' },
];

export const CustomerSegment: React.FC = () => {
  return (
    <div className="card">
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Customer Segments</h2>
      </div>
      <div className="p-4 sm:p-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Percentage']}
                contentStyle={{ borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={10}
                formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 mt-4">
          {data.map((segment) => (
            <div key={segment.name} className="text-center">
              <div className="text-2xl font-bold" style={{ color: segment.color }}>
                {segment.value}%
              </div>
              <div className="text-sm text-gray-500 mt-1">{segment.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};