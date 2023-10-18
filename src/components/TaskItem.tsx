import React, {FC} from "react";
import { ITask } from "../types/types";
import Button from "./Button";
import style from "./UI/MyTaskItem.module.css" 

interface TaskItemProps{
    task: ITask;
    completeTask: (id: ITask["id"]) => void;
    removeTask: (id: ITask["id"]) => void;
}


const setDone = () => {
     console.log("setDone")
}

const TaskItem: FC<TaskItemProps> = ({task, completeTask, removeTask}) => {
    return (
        <div>
            <div style={{padding: 15, 
                         border: '1px solid gray',
                         opacity: task.completed ? 0.5 : 1,
                         textDecoration: task.completed ? 'line-through' : 'none'
                         }}>          
                <input type="checkbox" checked={task.completed}/>
               {task.id}. {task.title}
            </div>
            <Button onClick={() => completeTask(task.id)}>
                <button>Done</button>
            </Button>
            <Button onClick={() => removeTask(task.id)}>
            <button>Delete</button>
            </Button>
         </div>
    );
};

export default TaskItem;