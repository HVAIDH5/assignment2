import React from 'react';
import { Users, UserPlus, ChevronDown } from 'lucide-react';
import AnalyticsCard from './AnalyticsCard';
import UsageChart from './UsageChart';
import ReferralTable from './ReferralTable';

export default function AnalyticsDashboard() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
  <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
    <h1 className="font-outfit text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 text-left mb-2 sm:mb-0">Analytics</h1>
    <button className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg text-xs sm:text-sm lg:text-base text-gray-600">
      <span>Select Date Range</span>
      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  </div>
</header>


      {/* Main Content */}
      <main className="p-4 md:p-8">
        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          <AnalyticsCard
            icon={<Users className="h-5 w-5 text-emerald-500" />}
            title="Users"
            value={<span className="text-[#10B981] font-outfit font-medium text-2xl md:text-3xl">667</span>}
            className="bg-white border border-[#F3F4F6] p-4 rounded-lg"
          />
          <AnalyticsCard
            icon={<UserPlus className="h-5 w-5 text-blue-500" />}
            title="Referral Users"
            value={<span className="text-[#3B82F6] font-outfit font-medium text-2xl md:text-3xl">246</span>}
            className="bg-white border border-[#F3F4F6] p-4 rounded-lg"
          />
          <AnalyticsCard
            icon={<Users className="h-5 w-5 text-green-500" />}
            title="Today's Organic Users"
            value={<span className="text-[#10B981] font-outfit font-medium text-2xl md:text-3xl">421</span>}
            className="bg-white border border-[#F3F4F6] p-4 rounded-lg"
          />
        </div>

        {/* Usage Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          <AnalyticsCard
            icon={<Users className="h-5 w-5 text-blue-500" />}
            title="This Week Users"
            value={<span className="text-[#3B82F6] font-outfit font-medium text-2xl md:text-3xl">2046</span>}
            className="bg-white border border-blue-200 p-4 rounded-lg"
          />
          <AnalyticsCard
            icon={<Users className="h-5 w-5 text-blue-500" />}
            title="This Month Users"
            value={<span className="text-[#3B82F6] font-outfit font-medium text-2xl md:text-3xl">3360</span>}
            className="bg-white border border-[#F3F4F6] p-4 rounded-lg"
          />
          <AnalyticsCard
            icon={<Users className="h-5 w-5 text-blue-500" />}
            title="Last Month Users"
            value={<span className="text-[#3B82F6] font-outfit font-medium text-2xl md:text-3xl">31202</span>}
            className="bg-white border border-[#F3F4F6] p-4 rounded-lg"
          />
        </div>

        {/* Chart */}
        <div className="bg-[#9CA3AF1A] rounded-lg shadow p-4 md:p-6 mb-8">
          <h2 className="text-lg md:text-xl font-medium mb-4">Last 7 Days: Registrations vs Referrals</h2>
          <UsageChart />
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <ReferralTable
            title="Today Top Referral Users"
            data={[
              { name: 'Nann U', email: 'nannu8225@gmail.com', count: '63' },
              { name: 'Mr Random', email: 'randomworld1@gmail.com', count: '58' },
              { name: 'M.K gamer', email: 'powermega010@gmail.com', count: '17' },
              { name: 'Muhammad Ikhsan', email: 'ikhsankemana@gmail.com', count: '12' },
              { name: 'Sunil Kumar Agariya', email: 'mrsunil4300@gmail.com', count: '7' },
            ]}
          />
          <ReferralTable
            title="All time Top Referral Users"
            data={[
              { name: 'Buisness PM', email: 'businesspm@gmail.com', count: '5911' },
              { name: 'Thyger Subh', email: 'technosub0724@gmail.com', count: '5761' },
              { name: 'Sandeep Kumar', email: 'sandeep7905@gmail.com', count: '3546' },
              { name: 'Usha Brahma', email: 'ushabrahma366@gmail.com', count: '3042' },
              { name: 'Rupesh Yadav Official', email: 'rupeshgs94@gmail.com', count: '2208' },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
