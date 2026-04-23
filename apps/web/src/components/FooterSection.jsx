import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FooterSection = () => {
  return (
    <footer className="bg-sage/50 py-16 px-12 text-forest">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 text-forest">SafeThread</h4>
            <p className="italic text-forest">
              Preserving the thread of truth.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <Link to="#" className="text-forest hover:opacity-70 transition-opacity w-fit">Privacy Policy</Link>
            <Link to="#" className="text-forest hover:opacity-70 transition-opacity w-fit">Terms of Service</Link>
            <Link to="#" className="text-forest hover:opacity-70 transition-opacity w-fit">Cookie Settings</Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-forest" />
              <a href="mailto:safethread143@outlook.com" className="text-forest underline hover:opacity-70 transition-opacity">
                safethread143@outlook.com
              </a>
            </div>
            <p className="text-forest opacity-80 mt-4 text-sm">
              © {new Date().getFullYear()} SafeThread. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
