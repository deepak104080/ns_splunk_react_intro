import React, { useEffect, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {nanoid} from 'nanoid';
import { FaBeer } from 'react-icons/fa';

const ToDo = () => {
    const [toDoItem, setToDoItem] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleChange = (e) => {
        console.log('Inside Handle Change - ', e.target.value );
        let value = e.target.value;
        setToDoItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj={};
        obj.id = nanoid();
        obj.todotext = toDoItem;
        obj.donestatus = false;
        setToDoList([...toDoList, obj]);
        setToDoItem('');
    }

    useEffect(() => {
        console.log(toDoList);
    }, [toDoList])

    const markComplete = (id) => {
        console.log(id);
        const updatedList = toDoList.map((item) => {
            if(item.id === id) {
                item.donestatus = !item.donestatus;
            }
            return item;
        })
        setToDoList(updatedList);
    }

    const markDelete = (id) => {
        console.log(id);
        const updatedList = toDoList.filter((item) => {
            return item.id !== id;
        })
        setToDoList(updatedList);
    }


    return (
        <>
        <Row>
            <Col xs={8} className="center">
                <br></br>
                <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter a new to do</Form.Label>
                    <Form.Control type="text" name="username" value={toDoItem} placeholder="Enter a new to do" onChange={handleChange} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
            
            <br></br>
            <br></br>
            {toDoList && toDoList.map((item) => (
                <div className={item.donestatus ? 'bg-success border-bottom todolist' : 'bg-info border-bottom todolist'}>
                    {item.todotext}
                    <button className="bg-success" onClick={() => markComplete(item.id)}>Done</button>
                    <button classname="bg-danger" onClick={() => markDelete(item.id)}>Delete <FaBeer /></button>
                    {/* https://repository-images.githubusercontent.com/315986811/d74b3080-2f6a-11eb-960e-c405ce8cfc43
                    state && editpanel
                    textarea and save Button
                    fn saveToDo (id, newtext) */}
                </div>
            ))}

            <br></br>
            <br></br>
            </Col>
        </Row>
        </>
    )
}

export default ToDo;