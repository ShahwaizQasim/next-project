"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronFirst,
  ChevronLast,
  LayoutDashboard,
  ClipboardList,
  UserCircle,
  CloudUpload,
  FileText,
} from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Results', icon: <ClipboardList size={20} />, path: '/dashboard/results' },
    { name: 'Upload Sheet', icon: <CloudUpload size={20} />, path: '/dashboard/upload-sheet' },
    { name: 'Check Sheet', icon: <FileText size={20} />, path: '/dashboard/check-sheets' },
  ];

  return (
    <aside className={`h-screen relative ${expanded ? 'w-64' : 'w-28'} overflow-hidden duration-300 bg-white0`}>
      <nav className="h-full flex flex-col border-r border-emerald-200">
        <div className="p-4 pb-2 flex gap-2 justify-between items-center">
          <h1 className="font-medium text-[28px]">
            {expanded ? <Image src="/smi-1.png" alt="Company Logo" width={150} height={60} className="" /> : <Image src="/smit-4.png" alt="Company Logo" width={250} height={60} className="" />}
          </h1>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-600 hover:text-emerald-800"
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>


        <ul className="flex-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link href={item.path} key={item.path}>
                <li
                  className={`relative flex items-center overflow-hidden py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive
                    ? 'bg-gradient-to-tr from-emerald-200 to-emerald-400 text-emerald-800'
                    : 'hover:bg-emerald-100 text-emerald-800 hover:text-emerald-800'
                    } border-none outline-none`}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-emerald-800 rounded-r-full" />
                  )}

                  <div className="flex items-center bg-transparent  gap-4">
                    <div className={isActive ? 'text-emerald-800  ' : ''}>
                      {item.icon}
                    </div>

                    <span
                      className={`overflow-hidden  bg-transparent transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
                    >
                      {item.name}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>


      </nav>
    </aside>
  );
};

export default Sidebar;