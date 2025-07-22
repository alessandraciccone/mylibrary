import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import book from "../../../data/fantasy.json";

const AllBooks = () => {
  return (
    <Container>
      <Row className="justify-content-center h-100">
        {/* row titolino*/}
        <Col>
          {/* col titolino*/}
          <h2 className="text-primary text-center"> I nostri Libri</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {book.slice(0, 24).map((libri) => {
          return (
            <Col sm={6} md={4} lg={3} className="d-flex m-4 mt-4">
              <Card
                key={libri.asin}
                className="d-flex flex-column h-100 bg-transparent border-1 border-secondary p-2"
              >
                <Card.Img
                  variant="top"
                  src={libri.img}
                  alt={libri.title}
                  className="card-image"
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="text-center text-white">
                      {libri.title}
                    </Card.Title>
                    <Card.Text className="text-center text-white">
                      {libri.price} €
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center mt-auto">
                    <Button className=" button text-white bg-black">
                      Aggiungi al carrello
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllBooks;
