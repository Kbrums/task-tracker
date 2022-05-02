//import { useSelector } from "react-redux";
//import { selectTasks } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { removeTopic } from "./topicsSlice";
import { removeTask } from '../tasks/tasksSlice';
import Card from 'react-bootstrap/Card';
import CloseButton from "react-bootstrap/CloseButton";
import ListGroup from "react-bootstrap/ListGroup";
import NewTaskForm from "../../components/NewTaskForm";
import Tasks from "../tasks/Tasks";
import './Topics.css';


export default function Topic({topic}) {

    const dispatch = useDispatch();
    const { id, title, taskIds } = topic;

    const handleClose = (e) => {
        e.preventDefault();
        //iterate over taskIDs and dispatch removeTask
        taskIds.map(taskId => dispatch(removeTask({id: taskId, topicId: id})));

        //dispatch remove topic
        dispatch(removeTopic({id: id}));

    }


    return (
        <>
            <div className='topic-container'>
                <Card className='card-container'>
                    <Card.Header as='h5'>
                        {title}
                        <CloseButton  className='close' onClick={handleClose}/>
                    </Card.Header>
                    <Card.Body>
                        <Tasks topicId={id} />
                    </Card.Body>
                    <Card.Footer>
                        <NewTaskForm topicId={id} />
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
} 