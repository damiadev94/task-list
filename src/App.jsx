import { useState, useContext } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskContainer } from "./components/TaskContainer";
import { TaskContext } from "./context/TaskContext";
import EditTaskModal from "./components/EditTaskModal";

document.addEventListener("keyup", (e) => {
  const button = document.getElementById("submit-button");
  if (e.key === "Enter") {
    button.click()
  }
});


export function App() {
  const context = useContext(TaskContext);
  const {modalActive, setModalActive} = context;
  
  document.addEventListener("click", (e) => {
    if(e.target.id === "dark-side"){
      setModalActive(false)
    }
  })

  return (
    <div className="p-4 flex flex-col gap-4" id="app-container">
      <div className="text-xl bg-blue-500 text-white rounded-md p-4 shadow-md">
        App Lista de Tareas
      </div>
      <TaskForm />
      <TaskContainer tasks={context.tasks} />
      {context.modalActive && 
        <EditTaskModal/>}
    </div>
  );
}
