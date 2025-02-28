// utils/taskFunctions.ts
import { ChangeEvent } from "react";
import { ITask } from "@/types/types";

export const handleInputChange = (
  e: ChangeEvent<HTMLInputElement>,
  setTaskInput: (input: string) => void,
) => {
  setTaskInput(e.target.value);
};

export const handleAddTask = (
  taskInput: string,
  addTask: (task: ITask) => void,
  setTaskInput: (input: string) => void,
) => {
  if (taskInput.trim()) {
    addTask({ id: Date.now(), description: taskInput, completed: false });
    setTaskInput("");
  }
};
