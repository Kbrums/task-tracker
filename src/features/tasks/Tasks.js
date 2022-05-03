import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import Task from './Task';
import './Tasks.css';


export default function Tasks({topicId, showCompleted}) {

    const allTasks = useSelector(selectTasks);
    const topicTasks = Object.values(allTasks).filter(task => task.topicId === topicId);
    const noProgressTasks = topicTasks.filter(task => task.inProgress === false && task.isComplete === false);
    const inProgressTasks = topicTasks.filter(task => task.inProgress);
    const completedTasks = topicTasks.filter(task => task.isComplete);


    return( 
        <>
            {noProgressTasks.map((task) => (
                <Task task={task} type='no-progress' topicId={topicId}/>
            ))}
            {inProgressTasks.map((task) => (
                <Task task={task} type='in-progress' topicId={topicId}/>
            ))}
            {showCompleted ? completedTasks.map((task) => (
                <Task task={task} type='complete' topicId={topicId}/>
            )): null}
        </>
    );
}