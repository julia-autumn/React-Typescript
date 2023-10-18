import React, { FC, useState, useEffect, useMemo } from "react";
import { ITask } from "../../types/types";
import { TaskContext } from "./TaskContext";
import axios from "axios";

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const response = await axios.get<ITask[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(response.data);
    } catch (e) {
      alert(e);
    }
  }

  function clearAll() {
    setTasks([]);
  }

  /* const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const result = event.target.value;
      setTask(result);
      createTask(result);
    }*/

  const addTask = ({ title }: Omit<ITask, "id" | "completed">) => {
    if (tasks.length > 0) {
      setTasks([
        ...tasks,
        { id: tasks[tasks.length - 1].id + 1, title, completed: false },
      ]);
    } else {
      setTasks([...tasks, { id: 1, title, completed: false }]);
    }
  };

  const completeTask = (id: ITask["id"]) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const removeTask = (id: ITask["id"]) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const value = useMemo(
    () => ({
      tasks,
      removeTask,
      addTask,
      completeTask,
    }),
    [tasks, removeTask, addTask, completeTask]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
