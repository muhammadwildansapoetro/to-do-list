import { create } from "zustand";
import { IStore } from "@/types/types";

const useStore = create<IStore>((set) => ({
  tasks: [],
  taskInput: "",
  filter: "all",
  setTaskInput: (input) => set({ taskInput: input }),
  addTask: (task) =>
    set((state) => {
      const newTasks = [...state.tasks, task];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  toggleTaskComplete: (id) =>
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  deleteTask: (id) =>
    set((state) => {
      const newTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  setFilter: (filter) => set({ filter }),
}));

export default useStore;
