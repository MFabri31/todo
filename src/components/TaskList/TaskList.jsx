import { ListGroup, Button } from "react-bootstrap";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  return (
    <>
      <ListGroup className="mt-2 ms-2 ms-md-4">
        <TaskItem />
        <ListGroup.Item className="d-flex justify-content-between shadow ">
          <div className="text-black-50 fw-bold">5 items</div>
          <Button
            variant="link "
            className="shadow-none text-decoration-none text-black-50 fw-bold"
          >
            Clear completed
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-center mt-3 mt-md-0 ">
          <Button
            variant="link "
            className="shadow-none text-decoration-none fw-bold text-black-50"
          >
            All
          </Button>
          <Button
            variant="link "
            className="shadow-none text-decoration-none fw-bold text-black-50"
          >
            Active
          </Button>
          <Button
            variant="link "
            className="shadow-none text-decoration-none text-black-50 fw-bold"
          >
            Completed
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default TaskList;