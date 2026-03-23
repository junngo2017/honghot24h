"use client";

export default function Home() {
  const handleOpenInBrowser = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Nội dung bị khoá
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Mở bằng trình duyệt để xem đầy đủ
        </p>

        <button
          onClick={handleOpenInBrowser}
          className="w-full bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
        >
          MỞ BẰNG TRÌNH DUYỆT
        </button>
      </main>
    </div>
  );
}