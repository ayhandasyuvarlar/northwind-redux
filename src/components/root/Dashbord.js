import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoriList from "../categories/CategoriList";
import ProductsList from "../products/ProductsList";
export default class Dashbord extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoriList />
          </Col>
          <Col xs="9">
            <ProductsList />
          </Col>
        </Row>
      </div>
    );
  }
}
