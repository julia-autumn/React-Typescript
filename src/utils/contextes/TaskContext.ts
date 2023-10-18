import React from "react";
import { ITask } from "../../types/types";

export interface TaskContextProps {
  tasks: ITask[];
  completeTask: (id: ITask["id"]) => void;
  removeTask: (id: ITask["id"]) => void;
  addTask: ({ title }: Omit<ITask, "id" | "completed">) => void;
}

export const TaskContext = React.createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  completeTask: () => {},
});
