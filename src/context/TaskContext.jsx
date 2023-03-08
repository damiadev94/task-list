import { createContext, useContext, useEffect, useState } from "react";
import handleClick from "../helpers/handleClick";
import EditTask from "../components/EditTaskModal";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [actualId, setActualId] = useState(0);

  const state = {
    tasks,
    setTasks
  }

  function CreateTask() {
    return (
      <button
        className="bg-blue-500 text-white hover:bg-blue-400 transition-colors shadow-md p-2 rounded-md"
        onClick={(e) => {
          e.preventDefault();

          const title = e.target.parentNode.title;
          const description = e.target.parentNode.description;

          handleClick({title, description, state})}}
        id="submit-button"
      >
        Crear Tarea
      </button>
    );
  }

  function DeleteTask({ id }) {
    return (
      <button
      className=" text-white text-lg font-bold p-0 rounded-md hover:text-gray-300 transition-colors"
        onClick={function () {
          const updatedTasks = tasks.filter((task) => task.key !== id);
          setTasks(updatedTasks);
        }}
      >
        Eliminar Tarea
      </button>
    );
  }

  function EditTask({ id }) {
    return (
      <button
      className=" text-white text-lg font-bold p-0 rounded-md hover:text-gray-300 transition-colors"
        onClick={() => {
          setModalActive(true);
          setActualId(id);
        }}
      >
        Editar Tarea
      </button>
    );
  }

  function SaveTask() {
    return (
      <button
        className=" text-white p-2 bg-blue-500 text-lg font-bold hover:bg-blue-600 rounded-md transition-colors"
        onClick={function (e) {
          e.preventDefault()
          const tasksCopy = tasks;
          tasks.map(task => {
            if(task.key === actualId){
              const newTitle = e.target.parentNode.title.value;
              const newDescription = e.target.parentNode.description.value;
              
              if(newTitle !== "" && newDescription !== ""){
                const firstUpdate = tasksCopy.filter((task) => task.key !== actualId);
                const secondUpdate = firstUpdate.push({title:newTitle, description:newDescription, key:actualId});
  
                setTasks(firstUpdate)
                setModalActive(false)
                console.log(tasks)
                return console.log("Tarea Actualizada.");
              } else {
                return alert(`Debe ingresar nombre y descripción de la tarea.`);
              }
            }
          })
        }}
      >
        Editar Tarea
      </button>
    )
  }

  return (
    <TaskContext.Provider value={{ CreateTask, DeleteTask, SaveTask, EditTask, handleClick, tasks, state, modalActive, setModalActive}}>
      {props.children}
    </TaskContext.Provider>
  );
}
