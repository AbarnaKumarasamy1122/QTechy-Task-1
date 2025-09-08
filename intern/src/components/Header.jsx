import React from "react";

const Header = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
        <span className="px-3 py-1 rounded-full border border-white/60 text-xs sm:text-sm font-medium bg-gray-200">
          Announcement
        </span>

        <span className="font-medium text-sm sm:text-base">
          We are happy to announce that we raised{" "}
          <span className="font-semibold">$2 Million</span> in Seed Funding
        </span>
      </div>
    </div>
  );
};

export default Header;
