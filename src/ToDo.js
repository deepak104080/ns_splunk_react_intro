import React, { useEffect, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {nanoid} from 'nanoid';
import { FaBeer } from 'react-icons/fa';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

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
        if(toDoItem !== '') {
            let obj={};
            obj.id = nanoid();
            obj.todotext = toDoItem;
            obj.donestatus = false;
            setToDoList([...toDoList, obj]);
            setToDoItem('');
        }
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
                    <Form.Label>To Do App</Form.Label>
                    <Form.Control type="text" name="username" value={toDoItem} placeholder="Enter a new to do" onChange={handleChange} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
            
            <br></br>
            <br></br>
            {toDoList && toDoList.map((item) => (
                <div className={item.donestatus ? 'bg-success' : 'bg-info'}>
                    
                    <Row className="py-2 my-2 mx-2">
                        <Col xs={8} className="bg-light text-start">
                            <div>{item.todotext}</div>
                        </Col>
                        <Col xs={2} className="center">
                            <button className="btn btn-success" onClick={() => markComplete(item.id)}>Done <AiFillEdit /></button>
                        </Col>
                        <Col xs={2} className="center">
                            <button className="btn btn-danger" onClick={() => markDelete(item.id)}>Delete <AiOutlineDelete/> </button>
                        </Col>
                    </Row>
                    
                    
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