import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { toggleProgress, toggleCompletion, removeTask } from './tasksSlice';


export default function Task({task, type, topicId}) {

    const dispatch = useDispatch();
    const { id, inProgress, isComplete} = task;

    const handleToggleProgress = (e) => {
        dispatch(toggleProgress({id: id}));
    }

    const handleToggleCompletion = (e) => {
        dispatch(toggleCompletion({id: id}));
    }

    const handleClose = (e) => {
        dispatch(removeTask({id: id, topicId: topicId}));
    }


    return (
        <>
            <Card >
                <Card.Body>
                    <Card.Title className='card-title'>
                        {task.title}
                        <CloseButton size='sm' onClick={handleClose}/>
                    </Card.Title>
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
                        disabled={isComplete}
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