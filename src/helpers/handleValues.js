
export default function handleValues({title, description}, state) {
  const tasks = state.tasks;
  const setTasks = state.setTasks; 
  
  if (title !== "" && description !== "") {
      const body = {
        title,
        description,
        key: Date.now(),
      };
  
      setTasks([...tasks, body]);
  
      console.log(tasks)
    } else {
      return alert(`Debe ingresar nombre y descripción de la tarea.`);
    }
  }