export interface ITask {
  id: number;
  description: string;
  completed: boolean;
}

export interface IStore {
  tasks: ITask[];
  taskInput: string;
  filter: string;
  setTaskInput: (input: string) => void;
  addTask: (task: ITask) => void;
  toggleTaskComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  setFilter: (filter: string) => void;
}

export interface ITaskCard {
  task: ITask;
  toggleTaskComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}
