import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm({enterEvent}) {
  const context = useContext(TaskContext);
  const CreateTask = context.CreateTask;

  return (
    <div className="flex flex-col gap-4" id="form-container">
      <div className="w-full h-[2px] bg-blue-500 rounded-md"></div>
      <form id="form" action="" className="flex flex-col w-fit gap-4">
        <input
          className="shadow-md p-2 outline-none rounded-md border border-blue-300"
          type="text"
          placeholder="Nombre"
          name="title"
          id="title"
          autoFocus
        />
        <textarea
          className="shadow-md outline-none p-2 rounded-md border border-blue-300"
          placeholder="Descripción"
          name="description"
          id="description"
        />
        <CreateTask/>
      </form>
    </div>
  );
}
