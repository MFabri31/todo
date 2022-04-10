import { Stack } from "react-bootstrap";
import TaskForm from "../TaskForm";
import "./Todo.css";

const Todo = () => {
  return (
    <Stack className="todo">
      <TaskForm />
    </Stack>
  );
};

export default Todo;
