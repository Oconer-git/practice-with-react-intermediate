import { Task } from "../reducer/tasksReducer";
import { TaskAction } from "../reducer/tasksReducer";
import React from "react";

interface tasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TasksContext = React.createContext<tasksContextType>(
  {} as tasksContextType
);

export default TasksContext;
