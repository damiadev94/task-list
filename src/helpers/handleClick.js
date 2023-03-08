import getValues from "./getValues";
import restartValues from "./restartValues";
import handleValues from "./handleValues";

export default function handleClick({title, description, state}){
    const values = getValues({title, description});

    handleValues({title:values.title, description:values.description}, state);
    restartValues({title, description});

    title.focus()
  }