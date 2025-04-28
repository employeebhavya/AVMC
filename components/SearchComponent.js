"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Search Icon */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="text-gray-700 hover:text-primary transition-colors"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Search</h2>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close search"
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <Search
                className="absolute left-3 top-3.5 text-gray-400"
                size={20}
              />
            </div>
            {/* Search results would go here */}
            {searchQuery && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Search results for {searchQuery}
                </p>
                {/* Actual search results would be rendered here */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
