import { Stack } from "react-bootstrap";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList/TaskList";
import "./Todo.css";

const Todo = () => {
  return (
    <Stack className="todo">
      <TaskForm />
      <TaskList />
    </Stack>
  );
};

export default Todo;
