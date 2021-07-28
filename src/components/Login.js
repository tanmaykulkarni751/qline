import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./../styles/Login.css";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [task, setTask] = useState("");

    function validateForm() {
        return email.length > 0 && task.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.setLoggedIn(true);
        // Add api call
    }

    return (
        <div>
            <div className="Header">
                <div className="Title">
                    QLine
                </div>
            </div>
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="task">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Proceed
                    </Button>
                </Form>
            </div>
        </div>
    );
}
