import { ITask } from "@/types/types";

export default function getFilteredTasks(tasks: ITask[], filter: string) {
  return tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });
}
