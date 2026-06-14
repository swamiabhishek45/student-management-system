import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function SidebarUser() {
  return (
    <div className="flex items-center justify-between border-t border-slate-100 p-4">
      <div className="flex items-center gap-3 min-w-0">
        {/* Avatar */}
        
       {/* <Image /> */}
        
        {/* User Details */}
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-slate-800 leading-none truncate">Admin User</span>
          <span className="text-xs text-slate-400 mt-1 truncate">admin@example.com</span>
        </div>
      </div>
      
      {/* Dropdown Action */}
      <button className="text-slate-400 hover:text-slate-600 transition-colors p-1" aria-label="Open user menu">
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
