import React, { ReactNode } from 'react';

interface AnalyticsCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  className?: string;
}

export default function AnalyticsCard({ icon, title, value, className = '' }: AnalyticsCardProps) {
  return (
    <div className={`p-4 sm:p-6 rounded-lg ${className} bg-white border border-[#F3F4F6] shadow-md`}>
      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
        {icon}
        <h3 className="text-sm sm:text-base lg:text-lg text-gray-600">{title}</h3>
      </div>
      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-right text-gray-800">{value}</p>
    </div>
  );
}
