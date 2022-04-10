import { Col, Container, Row } from "react-bootstrap";
import Banner from "./components/Banner";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <>
      <Banner />
      <Container>
        <Row className="justify-content-around">
          <Col md={6}>
            <Todo />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
