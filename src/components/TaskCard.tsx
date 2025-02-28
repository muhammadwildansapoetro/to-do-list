import { ITaskCard } from "@/types/types";
import { MdDeleteForever } from "react-icons/md";
import StatusBadge from "./Status";

export default function TaskCard({
  task,
  toggleTaskComplete,
  deleteTask,
}: ITaskCard) {
  return (
    <li className="flex w-full flex-col items-center justify-between gap-5 rounded-lg bg-white p-3 shadow-sm hover:bg-gray-50 md:max-w-[565px] md:flex-row">
      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskComplete(task.id)}
          id={`checkbox-${task.id}`}
          className="h-5 w-5 rounded-xl border-gray-300 accent-green-500"
        />
        <p
          className={`w-[250px] truncate overflow-hidden text-ellipsis whitespace-nowrap ${
            task.completed ? "text-gray-500" : "font-medium"
          }`}
          title={task.description}
        >
          {task.description.length > 30
            ? `${task.description.substring(0, 30)}...`
            : task.description}
        </p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <StatusBadge completed={task.completed} />
        <button
          onClick={() => deleteTask(task.id)}
          className="flex items-center justify-center gap-1 rounded-lg border border-red-500 px-3 py-1.5 text-red-500 hover:cursor-pointer hover:bg-red-500 hover:text-white focus:outline-none"
        >
          <MdDeleteForever size={22} />
          <span className="font-medium">Hapus</span>
        </button>
      </div>
    </li>
  );
}
