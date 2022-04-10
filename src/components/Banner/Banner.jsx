import { Col, Container, Row, Stack } from "react-bootstrap";
import IconMoon from "../../images/icon-moon.svg";
import "./banner.css";

const Banner = () => {
  return (
    <Stack className="py-5 p-2 banner">
      <Container>
        <Row className="justify-content-center align-items-center mt-md-3 text-md-center ">
          <Col xs={6} md={4}>
            <h1 className="text-white letter-spacing fw-bold">TODO</h1>
          </Col>
          <Col xs={6} md={4} className="text-end text-md-center ">
            <img src={IconMoon} alt="icon moon" />
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default Banner;
