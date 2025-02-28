import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IStore } from "@/types/types";

const useStore = create<IStore>()(
  persist(
    (set) => ({
      tasks: [],
      taskInput: "",
      filter: "all",

      setTaskInput: (input) => set({ taskInput: input }),

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      toggleTaskComplete: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useStore;
