import React, { FC } from "react";
import { ITask } from "../types/types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: ITask[];
  completeTask: (id: ITask["id"]) => void;
  removeTask: (id: ITask["id"]) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, completeTask, removeTask }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} completeTask={completeTask} removeTask={removeTask}/>
      ))}
    </div>
  );
};

export default TaskList;
