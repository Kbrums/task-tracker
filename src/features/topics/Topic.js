import { useDispatch } from "react-redux";
import { removeTopic, toggleShowCompleted } from "./topicsSlice";
import { removeTask } from '../tasks/tasksSlice';
import Card from 'react-bootstrap/Card';
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
                <Card className='card-container'>
                    <Card.Header as='h5'>
                        {title}
                        <CloseButton  className='close' onClick={handleClose}/>
                    </Card.Header>
                    <Card.Body>
                        <Tasks topicId={id} showCompleted={showCompleted}/>
                    </Card.Body>
                    <Card.Footer className='card-footer'>
                        <NewTaskForm topicId={id} />
                        <Form>
                            <Form.Check
                                label='Show Completed'
                                type='checkbox'
                                checked={showCompleted}
                                onChange={handleToggle}>
                            </Form.Check>
                        </Form>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
} 