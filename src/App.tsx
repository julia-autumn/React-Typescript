import React, { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
import { ITask } from "./types/types";
import List from "./components/List";
import Input from "./components/Input";
import Header from "./components/Header";
import axios from "axios";
import { TaskProvider } from "./utils";
import styles from "./styles/App.module.css"

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
//  const [task, setTask] = useState("");

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

  const createTask = ({ title }: Omit<ITask, "id" | "completed">) => {
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
  }

  return (
    <TaskProvider>
    <div className={styles.App}>
      <Header/> {/*} taskCount={tasks.length} />*/}
      <Input addTask={createTask} clearAll={clearAll}
       />
     <List
        items={tasks}
        renderItem={(task: ITask) => <TaskItem task={task} key={task.id} completeTask={completeTask} removeTask={removeTask}/>}
      />
    </div>
    </TaskProvider>
  );
};

export default App;
