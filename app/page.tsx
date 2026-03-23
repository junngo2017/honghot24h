"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const isFacebookApp = /FBAN|FBAV|FB4A|FBAndroidApp/.test(
      navigator.userAgent
    );
  }, []);

  const handleOpenInBrowser = () => {
    const currentUrl = window.location.href;

    if (/android/i.test(navigator.userAgent)) {
      window.location.href = `intent://${currentUrl.replace(
        /^https?:\/\//,
        ""
      )}#Intent;scheme=https;action=android.intent.action.VIEW;end`;
    } else {
      const newWindow = window.open(currentUrl, "_blank");
      if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") {
        window.location.href = currentUrl;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Tuan Anh Ga
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Trang web chinh thuc
        </p>

        <button
          onClick={handleOpenInBrowser}
          className="w-full max-w-md mx-auto bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
        >
          MO BANG TRINH DUYET
        </button>
      </main>
    </div>
  );
}