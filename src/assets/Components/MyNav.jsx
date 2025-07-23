import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Logo =
  "https://us.123rf.com/450wm/gelpi/gelpi2301/gelpi230101118/197619195-concetto-di-mente-durante-la-meditazione-uscendo-dalla-citt%C3%A0-verso-la-natura-con-la-mente-ai.jpg?ver=6";

const MyNav = () => {
  return (
    <Navbar expand="lg" bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle me-3"
            alt="Immagine Fantasy"
          />
          Nebbia delle Rune{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
