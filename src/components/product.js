import { connect } from "react-redux";
import { addToCart } from "../actions/index";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";

function Product(props) {
  const { product } = props;
  return (
    <>
      <Card>
        <CardImg top width="100%" src={product.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
          <CardText></CardText>
          <Row>
            <Col lg="5">{product.price} TL</Col>
            <Col lg="7">
              <Button color="primary" onClick={() => props.addToCart(product)}>
                Sepete Ekle
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps, { addToCart })(Product);
