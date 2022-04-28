//import { useSelector } from "react-redux";
//import { selectTasks } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { removeTopic } from "./topicsSlice";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CloseButton from "react-bootstrap/CloseButton";
import { style } from './topicStyle'

export default function Topic({topic}) {

    const dispatch = useDispatch();
    const { id, title, taskIds } = topic;

    const { containerStyle, cardStyle, closeStyle} = style;

    const handleClose = (e) => {
        e.preventDefault();
        //iterate over taskIDs and dispatch removeTask

        //dispatch remove topic
        dispatch(removeTopic({id: id}));

    }


    return (
        <>
            <div style={containerStyle}>
                <Card style={cardStyle}>
                    <Card.Header as='h5'>
                        {title}
                        <CloseButton  style={closeStyle} onClick={handleClose}/>
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