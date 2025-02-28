// components/FilterButtons.tsx
import React from "react";

interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export default function FilterButtons({
  filter,
  setFilter,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="font-medium tracking-wide text-gray-500">
        Filter by status
      </p>
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`${
            filter === "all"
              ? "bg-blue-500 font-medium text-white"
              : "border border-gray-300 bg-white"
          } rounded px-3 py-1.5 hover:cursor-pointer`}
        >
          Semua
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`${
            filter === "completed"
              ? "bg-green-500 font-medium text-white"
              : "border border-gray-300 bg-white"
          } rounded px-3 py-1.5 hover:cursor-pointer`}
        >
          Selesai
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={`${
            filter === "incomplete"
              ? "bg-red-500 font-medium text-white"
              : "border border-gray-300 bg-white"
          } rounded px-3 py-1.5 hover:cursor-pointer`}
        >
          Belum Selesai
        </button>
      </div>
    </div>
  );
}
