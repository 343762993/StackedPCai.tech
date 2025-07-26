import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Monitor, Cpu, Zap, Settings } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Monitor className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">StackedPC.ai</h1>
                <p className="text-xs text-gray-400">AI-Powered PC Builder</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to={createPageUrl("Home")} 
                className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                  location.pathname === createPageUrl("Home") ? 'text-white' : 'text-gray-400'
                }`}
              >
                Builder
              </Link>
              <a href="#support" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Video Ad Container */}
      <div className="bg-gray-900/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="bg-gray-800/50 rounded-lg h-20 flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <Zap className="w-6 h-6 text-gray-500 mx-auto mb-1" />
              <p className="text-xs text-gray-500">Video Advertisement Space</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Left Sidebar Ad */}
          <div className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Settings className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Advertisement</p>
                  <p className="text-xs text-gray-600">300x250</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {children}
          </div>

          {/* Right Sidebar Ad */}
          <div className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Cpu className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Advertisement</p>
                  <p className="text-xs text-gray-600">300x250</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a>
              <a href="#affiliate" className="text-gray-400 hover:text-white transition-colors">Affiliate Disclosure</a>
            </div>
            <p className="text-sm text-gray-500">© 2024 StackedPC.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
