import React from 'react';
import { BarChart2, Users, Bell, CreditCard, User } from 'lucide-react';
import logo from '../images/Vector.png';
import profile from '../images/Background.png'



const navItems = [
  { icon: BarChart2, label: 'Analytics', active: true },
  { icon: Users, label: 'Users', active: false },
  { icon: Bell, label: 'Notifications', active: false },
  { icon: CreditCard, label: 'Transactions', active: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray border-none border-gray-200 min-h-screen">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-none">
        <div className="flex items-center space-x-2">
        <img src={logo} alt="image" />
          <span className="text-xl font-semibold">Appzest</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 pt-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 text-sm
              ${item.active 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 w-64 border-t border-gray-200">
        <button className="w-full flex items-center space-x-3 px-6 py-4 hover:bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
           <img src={profile} alt="profile" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-gray-900">Sandra Marx</p>
            <p className="text-xs text-gray-500">sandra@example.com</p>
          </div>
        </button>
      </div>
    </div>
  );
}