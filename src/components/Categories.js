import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Categories() {
  return (
    <>
      <Navbar>
        <Container className="categories">
          <Nav className="me-auto">
            <Nav.Link href="#books">Books</Nav.Link>
            <Nav.Link href="#electronics">Electronics & Computers</Nav.Link>
            <Nav.Link href="#home-gargen-diy">Home, Garden & DIY</Nav.Link>
            <Nav.Link href="#clothing">Clothing</Nav.Link>
            <Nav.Link href="#shoes-accessories">Shoes & Accessories</Nav.Link>
            <Nav.Link href="#stationery">Stationery</Nav.Link>
            <NavDropdown className="nav-dropdown" title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Leisure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sport
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skincare</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Categories;
