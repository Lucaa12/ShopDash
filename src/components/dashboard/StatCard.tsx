import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import clsx from 'clsx';

interface StatCardProps {
  title: string;
  value: string | number;
  percentageChange?: number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentageChange,
  icon,
  color
}) => {
  const colorStyles = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
  };

  const colorLightStyles = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700',
  };

  const isPositive = percentageChange && percentageChange > 0;

  return (
    <div className="card stat-card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
        </div>
        <div className={clsx('p-3 rounded-lg text-white', colorStyles[color])}>
          {icon}
        </div>
      </div>
      
      {percentageChange !== undefined && (
        <div className="mt-4 flex items-center">
          <div className={clsx(
            'flex items-center px-1.5 py-0.5 rounded-full text-xs',
            isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          )}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span className="ml-1">{Math.abs(percentageChange)}%</span>
          </div>
          <span className="ml-2 text-xs text-gray-500">vs last month</span>
        </div>
      )}
    </div>
  );
};