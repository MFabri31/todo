import { Form, InputGroup, Button } from "react-bootstrap";
import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
  const getTask = (e) => {
    e.preventDefault();

    const [task] = e.target.elements;

    const data = {
      id: uuidv4(),
      task: task.value.trim(),
    };

    if (data.task === "") return;

    addTask(data);
  };

  return (
    <Form onSubmit={getTask} className="rounded bg-white p-2 ms-2 ms-md-4 form">
      <InputGroup>
        <Form.Control
          type="text"
          className="border-white shadow-none order-1"
          placeholder="Create a new todo..."
          name="task"
        ></Form.Control>
        <Button
          variant="outline"
          className="border shadow-none rounded-circle ms-2 mt-2 form-button order-0"
          type="submit"
        />
      </InputGroup>
    </Form>
  );
};

export default TaskForm;
