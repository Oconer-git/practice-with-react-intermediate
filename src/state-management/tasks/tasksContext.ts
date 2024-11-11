import { Task } from "./TasksProvider";
import { TaskAction } from "./TasksProvider";
import React from "react";

interface tasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TasksContext = React.createContext<tasksContextType>(
  {} as tasksContextType
);

export default TasksContext;
