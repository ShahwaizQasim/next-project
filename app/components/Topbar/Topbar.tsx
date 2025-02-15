"use client";
import { useState } from 'react';
import { signOut, useSession } from "next-auth/react";
import {
  ChevronDown,
  Settings,
  LogOut,
  User,
  HelpCircle,
  Menu
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const Topbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });

    router.push("/login");
  }

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-4">

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {session?.user?.name?.charAt(0) || 'U'}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-700">
                  {session?.user?.fullName || 'User Name'}
                </p>
                <p className="text-xs text-gray-500">
                  {session?.user?.email || 'user@example.com'}
                </p>
              </div>
              <ChevronDown size={16} className="text-gray-500" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium text-gray-700">{session?.user?.name}</p>
                  <p className="text-xs text-gray-500">{session?.user?.email}</p>
                </div>

                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                  <User size={16} />
                  <span>Profile</span>
                </button>

                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>

                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                  <HelpCircle size={16} />
                  <span>Help & Support</span>
                </button>

                <div className="border-t my-1"></div>

                <button onClick={handleSignOut} className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center space-x-2">
                  <LogOut size={16} />
                  <span>Sign out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;