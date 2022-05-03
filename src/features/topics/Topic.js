import { useDispatch } from "react-redux";
import { removeTopic, toggleShowCompleted } from "./topicsSlice";
import { removeTask } from '../tasks/tasksSlice';
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import NewTaskForm from "../../components/NewTaskForm";
import Tasks from "../tasks/Tasks";
import './Topics.css';


export default function Topic({topic}) {


    const dispatch = useDispatch();
    const { id, title, taskIds, showCompleted} = topic;

    const handleClose = (e) => {
        e.preventDefault();
        //iterate over taskIDs and dispatch removeTask
        taskIds.map(taskId => dispatch(removeTask({id: taskId, topicId: id})));

        //dispatch remove topic
        dispatch(removeTopic({id: id}));

    }

    const handleToggle = (e) => {
        dispatch(toggleShowCompleted({id: id}))
    }


    return (
        <>

            <div className='topic-container'>
                <div className='topic-title-container'>
                    <span className='topic-title'>{title}</span>
                    <CloseButton  className='close' onClick={handleClose}/>
                </div>
                <div className='topic-body-container'>
                    <Tasks topicId={id} showCompleted={showCompleted}/>
                </div>
                <div className='topic-footer'>
                    <NewTaskForm topicId={id} />
                    <Form>
                        <Form.Check
                            label='Show Completed'
                            type='checkbox'
                            checked={showCompleted}
                            onChange={handleToggle}>
                        </Form.Check>
                    </Form>
                </div>
            </div>
        </>
    )
} 