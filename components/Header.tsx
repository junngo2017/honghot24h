"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO + TÊN */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">H</span>
          </div>
          <span className="font-bold text-xl text-gray-800">
            Tuấn Anh Gà
          </span>
        </Link>

        {/* KHOẢNG TRỐNG PHÍA PHẢI */}
        <div></div>
      </div>
    </header>
  );
}