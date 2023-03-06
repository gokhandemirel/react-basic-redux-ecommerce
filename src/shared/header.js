import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";

function Header(props) {
  return (
    <>
      <Container>
        <Navbar color="light" light expand="md">
          <Link to="/" className="navbar-brand">
            ECommerce App
          </Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  Anasayfa
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/products" className="nav-link">
                  Ürünler
                </Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <Link to="/cart" className="dropdown-toggle nav-link">
                  Sepetim ({props.cart.length})
                </Link>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Header);
