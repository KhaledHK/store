import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mobile2 from '../../images/mobile2.png'
const DiscountSection = () => {
  return (
    <Container>
    <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
            <div className="discount-title">
            Up to 30% discount on iphonX         
               </div>
        </Col>
        <Col sm="6">
            <img className="dicount-img" src={mobile2} alt="" />
        </Col>
    </Row>
</Container>
  )
}

export default DiscountSection
