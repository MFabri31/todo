import { useReducer } from "react";
import { Stack } from "react-bootstrap";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList/TaskList";
import "./Todo.css";
import { TYPES } from "../../actions/todoActions";
import { initialState, taskReducer } from "../../reducers/taskReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: TYPES.ADD_TASK, paylod: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: TYPES.DELETE_TASK, payload: id });
  };

  return (
    <Stack className="todo">
      <TaskForm addTask={addTask} />
      <TaskList tasks={state.tasks} deleteTask={deleteTask} />
    </Stack>
  );
};

export default Todo;
