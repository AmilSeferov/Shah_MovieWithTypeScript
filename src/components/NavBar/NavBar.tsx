import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
function NavBar() {
  const search = useLocation();
  return (
    <div className="nav">
      <Navbar
        style={{ height: "60px", opacity: 0.5 }}
        className=" fixed-top navbg "
      ></Navbar>
      <Navbar expand="lg" className="  fixed-top  ">
        <Container>
          <Navbar.Brand href="#home" className="fst-italic d-flex">
            <p className="mb-0 text-warning fw-bold">Shah</p>
            <p className="mb-0 fw-bolder text-light">Movie</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link
                to={"/"}
                className={search.pathname === "/" ? "active" : ""}
              >
                <Nav.Link href="#home" className=" text-light ">
                  Home
                </Nav.Link>
              </Link>
              <Link
                to={"/About"}
                className={search.pathname === "/About" ? "active" : ""}
              >
                <Nav.Link href="#link" className="text-light">
                  About
                </Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(e: React.ChangeEvent<FormControlElement>) => {
                  console.log(e.target.value);
                }}
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
