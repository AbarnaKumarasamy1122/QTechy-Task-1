import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, LogIn, X } from "lucide-react";
import { HiMenu } from "react-icons/hi"; 

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <h1 className="font-bold tracking-tight text-2xl">Mode UI</h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-lg">
          <div className="flex items-center">
            <a href="#features" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              Card access
            </a>
            <ChevronDown className="ml-2 h-4 w-4 custom-bg-gray" />
          </div>
          <a href="#stats" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Banking</a>
          <a href="#customers" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Processing</a>
          <a href="#pricing" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">About</a>
          <a href="#customers" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Carrier</a>
          <a href="#pricing" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Contact</a>
        </nav>

        <div className="flex lg:hidden items-center gap-3">
          <button className="btn btn-sm bg-customGray border-slate-200 hover:border-slate-300 text-custom-bg-gray shadow flex items-center">
            Login
            <LogIn className="ml-2 h-4 w-4 custom-bg-gray" />
          </button>

          <button
            className="text-slate-700 dark:text-slate-200 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <HiMenu />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="btn btn-sm bg-customGray border-slate-200 hover:border-slate-300 text-custom-bg-gray shadow flex items-center">
            Login
            <LogIn className="ml-2 h-4 w-4 custom-bg-gray" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <nav className="flex flex-col p-4 gap-2">
            <a href="#features" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-between">
              Card access <ChevronDown className="h-4 w-4" />
            </a>
            <a href="#stats" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Banking</a>
            <a href="#customers" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Processing</a>
            <a href="#pricing" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#customers" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Carrier</a>
            <a href="#pricing" className="text-custom-bg-gray dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
