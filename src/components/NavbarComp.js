import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function BasicExample(props) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Liked Items
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Wishlist
          wishlistTotal={props.wishlistTotal}
          setWishlistItem={props.setWishlistItem}
        />
        <Cart cartTotal={props.cartTotal} setCartItem={props.setCartItem} />
      </Container>
    </Navbar>
  );
}

export default BasicExample;
