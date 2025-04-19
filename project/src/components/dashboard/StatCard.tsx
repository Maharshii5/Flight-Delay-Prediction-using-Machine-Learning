import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon }) => {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-50 opacity-20"></div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="rounded-full bg-blue-50 p-3">
          {icon}
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        {trend === 'up' ? (
          <TrendingUp className="mr-1 h-4 w-4 text-red-500" />
        ) : trend === 'down' ? (
          <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
        ) : null}
        
        <p className={`text-sm font-medium ${
          trend === 'up' ? 'text-red-500' : 
          trend === 'down' ? 'text-green-500' : 
          'text-gray-500'
        }`}>
          {change} since last period
        </p>
      </div>
    </div>
  );
};

export default StatCard;