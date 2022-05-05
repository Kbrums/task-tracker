import { useDispatch } from 'react-redux';
import { toggleProgress, toggleCompletion, removeTask } from './tasksSlice';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Tasks.css';


export default function Task({task, type, topicId}) {

    const dispatch = useDispatch();
    const { id, isComplete} = task;

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
                        <OverlayTrigger
                            key='progress'
                            placement='top'
                            delay={{ show: 850, hide: 400 }}
                            overlay={
                                <Tooltip className='tooltip' id='progress'>
                                    Set Task 'In Progress'
                                </Tooltip>
                            } >
                            <button className='button-small inprogress' disabled={isComplete} onClick={handleToggleProgress}/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key='complete'
                            placement='top'
                            delay={{ show: 850, hide: 400 }}
                            overlay={
                                <Tooltip className='tooltip' id='complete'>
                                    Set Test 'Complete'
                                </Tooltip>
                            }>
                            <button className='button-small completed' onClick={handleToggleCompletion}/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key='remove'
                            placement='top'
                            delay={{ show: 850, hide: 400 }}
                            overlay={
                                <Tooltip className='tooltip' id='remove'>
                                    Delete Task
                                </Tooltip>
                            }>
                            <button className='button-small remove' onClick={handleClose}/>
                        </OverlayTrigger>
                    </div>
                </div>
                <div className="task-descr-container">
                    <span className="task-descr">{task.description}</span>
                </div>
            </div>
        </>
    );
}