import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <Form className="rounded bg-white p-2 ms-2 ms-md-4 form">
      <InputGroup>
        <Button
          variant="outline"
          className="border shadow-none rounded-circle ms-2 mt-2 form-button"
        ></Button>
        <Form.Control
          type="text"
          placeholder="Create a new todo..."
          className="border-white shadow-none"
        ></Form.Control>
      </InputGroup>
    </Form>
  );
};

export default TaskForm;
