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
  showWishlistPage,
  showCartPage,
  setSearch,

  wishlistTotalItems,
  setWishlistTotalItems,
  AddToWishlist,

  cartTotal,
  setCartTotal,
  cartTotalPrice,
  setCartTotalPrice,
  AddToCart,
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
            <Nav.Link onClick={() => showWishlistPage()}>Wishlist</Nav.Link>
            <Nav.Link onClick={() => showCartPage()}>Cart</Nav.Link>
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
          showWishlistPage={showWishlistPage}
          wishlistTotalItems={wishlistTotalItems}
          setWishlistTotalItems={setWishlistTotalItems}
          AddToWishlist={() => AddToWishlist()}
        />

        <Cart
          showCartPage={showCartPage}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          cartTotalPrice={cartTotalPrice}
          setCartTotalPrice={setCartTotalPrice}
          AddToCart={() => AddToCart()}
        />
      </Container>
    </Navbar>
  );
}

export default BasicExample;
