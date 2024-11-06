import React, { ReactNode } from 'react';

interface AnalyticsCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  className?: string;
}

export default function AnalyticsCard({ icon, title, value, className = '' }: AnalyticsCardProps) {
  return (
    <div className={`p-6 rounded-lg ${className} bg-white-50 border border-[#F3F4F6]`} >
      <div className="flex items-center space-x-3 mb-2">
        {icon}
        <h3 className="text-sm text-gray-600">{title}</h3>
      </div>
      <p className="text-2xl font-semibold text-right">{value}</p>

    </div>
  );
}