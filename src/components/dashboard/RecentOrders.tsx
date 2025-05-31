import React from 'react';
import { Calendar, Clock } from 'lucide-react';

// Sample order data - would come from an API in a real app
const orders = [
  {
    id: 'ORD-7892',
    customer: 'Emma Wilson',
    date: '2023-05-15T14:32:00Z',
    amount: 236.4,
    status: 'Delivered'
  },
  {
    id: 'ORD-7891',
    customer: 'Michael Brown',
    date: '2023-05-15T12:45:00Z',
    amount: 98.2,
    status: 'Processing'
  },
  {
    id: 'ORD-7890',
    customer: 'Sophia Davis',
    date: '2023-05-15T10:18:00Z',
    amount: 157.3,
    status: 'Shipped'
  },
  {
    id: 'ORD-7889',
    customer: 'William Taylor',
    date: '2023-05-14T23:04:00Z',
    amount: 452.9,
    status: 'Delivered'
  },
  {
    id: 'ORD-7888',
    customer: 'Olivia Johnson',
    date: '2023-05-14T19:57:00Z',
    amount: 74.5,
    status: 'Processing'
  }
];

// Helper function to format dates nicely
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

// Helper function to format time nicely
const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

export const RecentOrders: React.FC = () => {
  return (
    <div className="card">
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <button className="btn btn-outline text-sm">View All</button>
        </div>
      </div>
      <div className="overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {orders.map((order) => (
            <li key={order.id} className="hover:bg-gray-50 transition-colors">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <ShoppingBagIcon />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{order.id}</div>
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : order.status === 'Shipped' 
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">{order.customer}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">${order.amount.toFixed(2)}</div>
                    <div className="text-sm text-gray-500 flex items-center justify-end mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{formatDate(order.date)}</span>
                      <Clock size={14} className="ml-2 mr-1" />
                      <span>{formatTime(order.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);