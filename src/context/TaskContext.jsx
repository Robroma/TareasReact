import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);
  function createTask(titleTask, descTask) {
    setTask([
      ...tasks,
      {
        title: titleTask,
        id: tasks.length,
        description: descTask,
      },
    ]);
  }
  function deleteTask(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
