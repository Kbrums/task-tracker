import React, { useState } from 'react';
import { addTopic } from '../features/topics/topicsSlice';
import { useDispatch} from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../features/topics/Topics.css";

export default function NewTopicForm() {
    //title for new topic
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    //state for modal vis
    const [show, setShow] = useState(false);

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
        setTitle('');
        setShow(false);
    }

    return (
        
        <>
            <Button className='add-topic-btn' variant='outline-primary' onClick={handleShow}>
                Add Topic
            </Button> 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={title}
                                type='text'
                                onChange={(e) => setTitle(e.currentTarget.value)}/>
                        </Form.Group>
                     </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-secondary' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='outline-primary' onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )



}