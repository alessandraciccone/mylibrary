import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
const SingleBook = ({ libri }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={3}>
          <h4 className="text-center text-primary mb-3 mt-5">Just One Book</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={3}>
          <Card className="bg-transparent  border-1 border-secondary p-3">
            <Card.Img variant="top" src={libri.img} alt={libri.title} />
            <Card.Body>
              <Card.Title className="text-white">{libri.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
