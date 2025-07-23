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
        {/*ora uso map ma uso slice per prendere solo qualche oggetto dell'arra*/}
        {book.slice(0, 24).map((libri) => {
          return (
            <Col sm={6} md={4} lg={3} className="d-flex m-4 mt-4">
              <Card
                key={libri.asin}
                className="d-flex flex-column h-100 bg-transparent border-1 border-secondary p-2"
              >
                {/* metto la key altrimenti react non riesce a gestire l'array. la key deve essere sempre un elemento univoco di ogni oggetto, in questo caso l'asin che trovo nellì'array*/}
                <Card.Img
                  variant="top"
                  src={libri.img}
                  alt={libri.title}
                  className="card-image"
                />{" "}
                {/*prendo l'immagine e prendo il titolo dell'immagine x la descrizione*/}
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="text-center text-white">
                      {libri.title} {/*prendo il titolo dellibro*/}
                    </Card.Title>
                    <Card.Text className="text-center text-white">
                      {libri.price} € {/*prendo il prezzo*/}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center mt-auto">
                    <Button className=" button text-white bg-black mt-2">
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
