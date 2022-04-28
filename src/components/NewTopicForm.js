import React, { useState } from 'react';
import { addTopic } from '../features/topics/topicsSlice';
import { useDispatch} from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function NewTopicForm() {
    //title for new topic
    const [title, setTitle] = useState('');
    //state for modal vis
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    //modal functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //submit form and dispatch to topic slice
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length === 0) return;

        const payload = {
            title: title,
            id: uuidv4(),
        };

        dispatch(addTopic(payload));
    }

    return (
        
        <>
            <Button variant='outline-primary' onClick={handleShow}>
                Add Topic
            </Button> 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>Form Will Go Here</Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-secondary' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='outline-primary' onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )



}