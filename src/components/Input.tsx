import React, { FC, useState } from "react";
import Button from "./Button";
import style from "./UI/MyInput.module.css"
import { ITask } from "../types/types";

import styles from "./UI/MyInput.module.css";

interface InputProps {
  //  value: string;
  //  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: ({ title }: Omit<ITask, "id" | "completed">) => void;
  clearAll: () => void 
}

const Input: FC<InputProps> = ({ addTask, clearAll }) => {
  const [task, setTask] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addNewTask = () => {
    if (task.length > 0) {
      addTask({ title: task });
    } else {
      alert("Type a task!");
    }
    setTask("");
  };

  function clearList() {
    clearAll();
  }

  //   const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(value);

  // }

  return (
    <div>
      <input className={style.myInput} value={task} onChange={changeHandler} type="text" />
      <Button onClick={addNewTask}>Add Task</Button>
      <Button onClick={clearList}>Clear List</Button>
    </div>
  );
};

export default Input;
