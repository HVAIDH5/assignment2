import React from 'react';

interface ReferralData {
  name: string;
  email: string;
  count: string;
}

interface ReferralTableProps {
  title: string;
  data: ReferralData[];
}

export default function ReferralTable({ title, data }: ReferralTableProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <h2 className="text-lg font-medium p-6 border-b border-gray-200">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Referral Count
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.email}</div>
                </td>
                <td className="px-6 py-4 text-right text-sm text-gray-900">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}