import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ProductText = () => {
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">phone :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">this phon is the better phon for special work in work because nothink in appel
            clor brown<div className="cat-rate d-inline mx-3">0.4</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">mark :</div>
          <div className="barnd-text d-inline mx-1">huwawi </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">specificatin :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
          Apple is likely to continue selling four iPhone models with 
          the iPhone 15 lineup. Rumors point to a generally similar
           design across the board, except that the iPhone 14 Pro's 
           shape-shifting cutout, known as Dynamic Island, is set to 
           make its way across all models.
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">33$</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">add to </div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText