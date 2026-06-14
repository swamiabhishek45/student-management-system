import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

export default function ProfileActions() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mt-auto bg-white px-6 pb-6">
      <Button 
        variant="outline"
        className="flex items-center justify-center gap-2 h-10 font-semibold text-xs border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
      >
        <Pencil className="h-4 w-4" />
        Edit
      </Button>
      
      <Button 
        variant="outline"
        className="flex items-center justify-center gap-2 h-10 font-semibold text-xs border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer"
      >
        <Trash2 className="h-4 w-4" />
        Delete
      </Button>
    </div>
  );
}
