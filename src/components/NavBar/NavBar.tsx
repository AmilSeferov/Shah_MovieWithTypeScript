import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css'
function NavBar() {
  return (
    <div className="nav">
      <Navbar  style={{height:"60px",opacity:0.5}} className=" fixed-top navbg " ></Navbar>
      <Navbar
        expand="lg"
        className="  fixed-top  "
      >
        <Container>
          <Navbar.Brand href="#home" className="fst-italic d-flex">
            <p className="mb-0 text-warning fw-bold">Shah</p>
            <p className="mb-0 fw-bolder text-light">Movie</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className=" text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger text-light ">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
