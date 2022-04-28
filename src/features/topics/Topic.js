import { useSelector } from "react-redux";
import { selectTasks } from "../tasks/tasksSlice";
import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Topic({topic}) {

    const { title, taskIds } = topic;
    const cardStyle = {
        margin: '5px',
       


    }
    const containerStyle = {
        display: 'inline-block',
        width: '32%',
    }

    return (
        <>
            <div style={containerStyle}>
                <Card style={cardStyle}>
                    <Card.Header as='h5'>{title}</Card.Header>
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