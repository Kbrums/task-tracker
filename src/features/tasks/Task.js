import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { toggleProgress, toggleCompletion } from './tasksSlice';


export default function Task({task, type}) {

    const dispatch = useDispatch();
    const { id, inProgress, isComplete} = task;

    const handleToggleProgress = (e) => {
        dispatch(toggleProgress({id: id}));
    }

    const handleToggleCompletion = (e) => {
        dispatch(toggleCompletion({id: id}));
    }


    return (
        <>
            <Card >
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>
                        {task.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Form>
                        <Form.Check
                        inline
                        label='In Progress'
                        type='checkbox'
                        checked={inProgress}
                        onChange={handleToggleProgress}>
                        </Form.Check>
                        <Form.Check
                        inline
                        label='Completed'
                        type='checkbox'
                        checked={isComplete}
                        onChange={handleToggleCompletion}>
                        </Form.Check>
                    </Form>
                </Card.Footer>
            </Card>
        </>
    );
}