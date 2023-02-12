import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSublmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    //per a que al clicar els inputs tornin al seu estat, tambe hem d'afegir una igualacio en el input i textarea
    setDescription("");
    setTitle("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSublmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl fontbol
        text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Ecribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        ></input>
        <textarea
          placeholder="Ecribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
