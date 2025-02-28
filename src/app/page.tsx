<<<<<<< HEAD
"use client";

import useStore from "@/stores/store";
import TaskCard from "@/components/TaskCard";
import { IoMdAddCircle } from "react-icons/io";
import { handleAddTask, handleInputChange } from "@/utils/taskFunction";
import FilterButtons from "@/components/FilterButtons";

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="flex min-h-screen w-full max-w-screen flex-col items-center bg-gray-50 p-5 py-10">
      <h1 className="mb-6 text-5xl font-bold text-green-500">To-Do List</h1>

      <FilterButtons filter={filter} setFilter={setFilter} />

      <div className="mb-5 flex w-full items-center justify-center">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => handleInputChange(e, setTaskInput)}
          placeholder="Deskripsi tugas"
          className="h-10 w-md rounded-l-md border border-gray-300 px-4 py-1.5 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <button
          onClick={() => handleAddTask(taskInput, addTask, setTaskInput)}
          className="flex h-10 items-center gap-2 rounded-r-md bg-green-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-green-600 focus:ring-1 focus:ring-green-500 focus:outline-none"
        >
          <IoMdAddCircle size={20} />
          <span className="font-medium">Tambah</span>
        </button>
      </div>

      <ul className="flex w-full flex-col items-center justify-center gap-3">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            toggleTaskComplete={toggleTaskComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
=======
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
>>>>>>> b36b69d (Initial commit from Create Next App)
    </div>
  );
}
