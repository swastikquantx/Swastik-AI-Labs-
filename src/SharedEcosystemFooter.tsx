import React from 'react';

export default function SharedEcosystemFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="text-xl font-black tracking-[0.15em] text-slate-900">
            SWASTIK
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-slate-800">
            <span className="text-red-600">A I</span> L A B S
          </div>
        </div>
        <div className="text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} Swastik AI Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
