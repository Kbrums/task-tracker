import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";


export default function Tasks({topicId}) {

    const allTasks = useSelector(selectTasks);
    const topicTasks = Object.values(allTasks).filter(task => task.topicId === topicId)

    return( 
        <>
            {topicTasks.map((task) => (
                <Card>
                    <Card.Body>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>{task.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}