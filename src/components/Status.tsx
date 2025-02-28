export default function StatusBadge({ completed }: { completed: boolean }) {
  return (
    <p
      className={`rounded-lg px-3 py-1.5 text-sm ${
        completed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {completed ? "Selesai" : "Belum Selesai"}
    </p>
  );
}
