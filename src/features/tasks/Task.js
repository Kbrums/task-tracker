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
            <div className={"task-container "+type}>
                <div className="task-title-container header-footer">
                    <span className="task-title">{task.title}</span>
                    <CloseButton size='sm' onClick={handleClose}/>
                </div>
                <div className="task-descr-container">
                    <span className="task-descr">{task.description}</span>
                </div>
                <div className="task-footer-container">
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
                </div>
            </div>
        </>
    );
}