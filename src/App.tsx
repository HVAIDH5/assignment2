import React from 'react';
import Sidebar from './components/Sidebar';
import AnalyticsDashboard from './components/AnalyticsDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar className="w-full md:w-1/4 lg:w-1/5" />
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <AnalyticsDashboard />
      </div>
    </div>
  );
}
