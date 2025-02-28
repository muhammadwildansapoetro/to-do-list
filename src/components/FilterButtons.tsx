import React from "react";

interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const filterOptions = [
  { key: "all", label: "Semua", color: "bg-blue-500" },
  { key: "completed", label: "Selesai", color: "bg-green-500" },
  { key: "incomplete", label: "Belum Selesai", color: "bg-red-500" },
];

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
        {filterOptions.map(({ key, label, color }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded border border-gray-300 px-3 py-1.5 hover:cursor-pointer ${filter === key ? `${color} font-medium text-white` : ""}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
