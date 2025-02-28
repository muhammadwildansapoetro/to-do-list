"use client";

import { IoMdAddCircle } from "react-icons/io";
import { handleAddTask, handleInputChange } from "@/utils/handleTask";
import FilterButtons from "@/components/FilterButtons";
import getFilteredTasks from "@/utils/getFilteredTask";
import useStore from "@/stores/store";
import TaskList from "@/components/TaskCard";

export default function Home() {
  const {
    tasks,
    taskInput,
    filter,
    setTaskInput,
    addTask,
    toggleTaskComplete,
    deleteTask,
    setFilter,
  } = useStore();

  const filteredTasks = getFilteredTasks(tasks, filter);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e, setTaskInput);
  const handleAdd = () => handleAddTask(taskInput, addTask, setTaskInput);

  return (
    <div className="flex min-h-screen w-full max-w-screen flex-col items-center bg-gray-50 p-5 py-10">
      <h1 className="mb-6 text-5xl font-bold text-green-500">To-Do List</h1>

      <FilterButtons filter={filter} setFilter={setFilter} />

      <div className="mb-5 flex w-full items-center justify-center">
        <input
          type="text"
          value={taskInput}
          onChange={handleChange}
          placeholder="Deskripsi tugas"
          className="h-10 w-md rounded-l-md border border-gray-300 px-4 py-1.5 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <button
          onClick={handleAdd}
          className="flex h-10 items-center gap-2 rounded-r-md bg-green-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-green-600 focus:ring-1 focus:ring-green-500 focus:outline-none"
        >
          <IoMdAddCircle size={20} />
          <span className="font-medium">Tambah</span>
        </button>
      </div>

      <section
        role="list"
        className="flex w-full flex-col items-center justify-center gap-3"
      >
        {filteredTasks.map((task) => (
          <TaskList
            key={task.id}
            task={task}
            toggleTaskComplete={toggleTaskComplete}
            deleteTask={deleteTask}
          />
        ))}
      </section>
    </div>
  );
}
