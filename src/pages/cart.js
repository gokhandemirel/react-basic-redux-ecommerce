import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Badge,
  ListGroupItem,
  ListGroup,
  Button,
  InputGroup,
  Alert,
} from "reactstrap";
import { addToCart, removeToCart } from "../actions/index";

function Cart(props) {
  let totalPrice = 0;
  props.cart.map((item) => (totalPrice += item.quantity * item.price));
  return (
    <>
      <Container className="p-3">
        <Row>
          <Col lg="9">
            <ListGroup>
              {props.cart.length > 0 ? (
                props.cart.map((item) => (
                  <ListGroupItem
                    key={item.id}
                    className="justify-content-between"
                  >
                    <Row>
                      <Col lg="3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </Col>
                      <Col lg="9">
                        <ListGroup>
                          <ListGroupItem>
                            {item.name} <Badge pill>{item.quantity}</Badge>
                          </ListGroupItem>
                          <ListGroupItem>
                            <Row>
                              <Col>Fiyat: {item.price} TL</Col>
                              <Col>
                                {" "}
                                <InputGroup
                                  style={{ flexDirection: "row-reverse" }}
                                >
                                  <Button
                                    color="primary"
                                    onClick={() => props.addToCart(item)}
                                  >
                                    +
                                  </Button>
                                  <Button color="grey" disabled>
                                    {item.quantity}
                                  </Button>
                                  <Button
                                    color="primary"
                                    onClick={() => props.removeToCart(item)}
                                    disabled={
                                      item.quantity === 1 ? true : false
                                    }
                                  >
                                    -
                                  </Button>
                                </InputGroup>
                              </Col>
                            </Row>
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))
              ) : (
                <ListGroupItem>
                  <Row>
                    <Col>
                      <Alert color="warning" style={{ marginBottom: 0 }}>
                        Sepetinizde ürün bulunmamaktadır.
                      </Alert>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
          <Col lg="3">
            <ListGroup>
              <ListGroupItem className="justify-content-between">
                <p>Toplam Tutar</p>
                <p>{totalPrice.toFixed(2)} TL</p>
                <p>
                  <Button size="100%">Sipariş Ver</Button>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart, removeToCart })(Cart);
