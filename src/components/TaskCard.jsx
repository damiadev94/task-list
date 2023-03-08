import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard({ task }) {
  const context = useContext(TaskContext);
  const DeleteTask = context.DeleteTask;
  const EditTask = context.EditTask;

  return (
    <div className="group overflow-hidden relative bg-blue-500 text-white rounded-md p-4 min-w-[200px] max-w-[200px] flex flex-col flex-auto">
      <div className="flex flex-col gap-1 justify-center items-center absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <DeleteTask id={task.key} />
        <EditTask id={task.key} />
      </div>
      <h1 className="text-xl font-bold group-hover:blur-[1px]">{task.title}</h1>
      <p className="text-lg w-full group-hover:blur-[1px] break-words">
        {task.description}
      </p>
    </div>
  );
}
