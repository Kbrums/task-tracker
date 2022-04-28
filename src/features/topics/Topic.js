import { useSelector } from "react-redux";
import { selectTasks } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";

export default function Topic({topic}) {

    const { title, taskIds } = topic;

    return (
        <div className='topic-container'>
            <h2 className='topic-header'>{title}</h2>
            <div className='task-container'>
                <p>placeholder task</p>
            </div>
        </div>
    )
} 