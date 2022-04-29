//import { useSelector } from "react-redux";
//import { selectTasks } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { removeTopic } from "./topicsSlice";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CloseButton from "react-bootstrap/CloseButton";
import './Topics.css';

export default function Topic({topic}) {

    const dispatch = useDispatch();
    const { id, title, taskIds } = topic;

    const handleClose = (e) => {
        e.preventDefault();
        //iterate over taskIDs and dispatch removeTask

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
                    <Card.Body>this is where tasks will go</Card.Body>
                    <Card.Footer>
                        <Button variant='outline-primary'>
                            Add Task
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
} 