import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import './Tasks.css';


export default function Tasks({topicId, showCompleted}) {

    const allTasks = useSelector(selectTasks);
    const topicTasks = Object.values(allTasks).filter(task => task.topicId === topicId)

    return( 
        <>
            {topicTasks.map((task) => (
                <Card>
                    <Card.Body>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>
                            {task.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Form className='task-checks'>
                            <Form.Check
                            label='In Progress'
                            type='checkbox'
                            checked=''
                            onChange=''>
                            </Form.Check>
                            <Form.Check
                            label='Completed'
                            type='checkbox'
                            checked=''
                            onChange=''>
                            </Form.Check>
                        </Form>
                    </Card.Footer>
                </Card>
            ))}
        </>
    );
}