import { TaskCard } from "./TaskCard"

export function TaskContainer({tasks}){
    return (
        <div className="flex gap-4 flex-wrap">
            {tasks.map(task => {
                return (
                    <TaskCard task={task} key={task.key}/>
                )
            })}
        </div>
    )
}