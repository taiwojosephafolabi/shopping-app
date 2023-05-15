import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function BasicExample({
  backToLandingPage,
  showHomePage,
  setSearch,

  wishlistItem,
  setWishlistItem,
  AddToWishlist,

  cartItem,
  setCartItem,
  cartTotal,
  setCartTotal,
  AddToCart
}) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand onClick={() => backToLandingPage()}>
          Shopping App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => showHomePage()}>Home</Nav.Link>
            <Nav.Link href="#wishlist">Wishlist</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setSearch(event.target.value)}
            />
          </Form>
        </Navbar.Collapse>

        <Wishlist
          wishlistItem={wishlistItem}
          setWishlistItem={setWishlistItem}
          AddToWishlist={(event) => AddToWishlist(wishlistItem)}
        />

        <Cart
          cartItem={cartItem}
          setCartItem={setCartItem}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          AddToCart={(event) => AddToCart(event)}
        />
      </Container>
    </Navbar>
  );
}

export default BasicExample;
