import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../features/tasks/Tasks.css';


export default function NewTaskForm({topicId}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    //modal state
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    //modal functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.length === 0 ) return;

        const payload = {
            id: uuidv4(),
            title: title,
            description: description,
            topicId: topicId
        }

        dispatch(addTask(payload));
        setTitle('');
        setDescription('');
        setShow(false);
    }
    

    return (
        <>  
            <button className='add button' onClick={handleShow}>Add Task</button>

            <Modal show={show} className="custom-modal" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                               value={title}
                               type='text'
                               onChange={(e) => setTitle(e.currentTarget.value)}
                               />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                value={description} 
                                as='textarea'
                                rows={2}
                                onChange={(e) => setDescription(e.currentTarget.value)}
                                />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='cancel button' onClick={handleClose}>Cancel</button>
                    <button className='submit button' onClick={handleSubmit}>Submit</button>
                </Modal.Footer>

            </Modal>
        
        </>
    );

}