
import type { Task } from "../entitites/task";
import { TaskItem } from "./task-item";
import { SmallColumnContainer } from "../styles/Containers";


type TaskListProps = {
    tasks: Task[];
    onRemove: (id: string) => void;
    onEdit: (tasks: Task) => void;
    onToggle: (id: string) => void;
};

export function TasksList(props: TaskListProps) {

    const result = props.tasks.map(task => 
        <TaskItem 
            task={task}  
            key={task.id} 
            onRemove={props.onRemove} 
            onEdit={props.onEdit}
            onToggle={props.onToggle}
        />
    )
    
    let list = result.length > 0 ? result : <h5>Список пуст</h5>;
    return <SmallColumnContainer>{list}</SmallColumnContainer>;
}