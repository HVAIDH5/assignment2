import React from "react";

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
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
      <h2 className="text-base sm:text-lg font-semibold mb-3 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
                Details
              </th>
              <th className="px-4 sm:px-6 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wide">
                Referral Count
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-4 sm:px-6 py-3">
                  <div className="text-sm font-medium text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500">{item.email}</div>
                </td>
                <td className="px-4 sm:px-6 py-3 text-right text-sm text-gray-900">
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
