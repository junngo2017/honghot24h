"use client";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) {
  return (
    <div className="flex gap-2 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
      />
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold">
        Tìm
      </button>
    </div>
  );
}