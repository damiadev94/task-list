import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function EditTaskModal({ id }) {
  const context = useContext(TaskContext);
  const SaveTask = context.SaveTask;;

  return (
    <div className="z-50 absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-50 flex justify-center items-center" id="dark-side">
      <div className="p-6 bg-white rounded-md">
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
          <SaveTask id={id}/>
        </form>
      </div>
    </div>
  );
}
