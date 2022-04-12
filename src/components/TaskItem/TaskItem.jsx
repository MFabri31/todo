import { CloseButton, Stack, Button, ListGroup } from "react-bootstrap";

const TaskItem = ({ task }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <Stack direction="horizontal" className="fw-bold text-black-50">
        <Button
          variant="outline"
          className="me-3 p-2 rounded-circle shadow-none border"
        />
        {task}
      </Stack>
      <CloseButton className="shadow-none" />
    </ListGroup.Item>
  );
};

export default TaskItem;
