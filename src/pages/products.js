import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import Product from "../components/product";

function Products(props) {
  return (
    <>
      <Container className="p-4">
        <Row>
          {props.products.map((item) => (
            <Col key={item.id} lg="3">
              <Product product={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    modalMessage: state.modalMessage,
  };
};

export default connect(mapStateToProps)(Products);
