import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { toggleProgress, toggleCompletion, removeTask } from './tasksSlice';
import './Tasks.css';


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
                    <div className='control-buttons'>
                        <button className='button-small inprogress' disabled={isComplete} onClick={handleToggleProgress}/>
                        <button className='button-small completed' onClick={handleToggleCompletion}/>
                        <button className='button-small remove' onClick={handleClose}/>
                    </div>
                </div>
                <div className="task-descr-container">
                    <span className="task-descr">{task.description}</span>
                </div>
            </div>
        </>
    );
}