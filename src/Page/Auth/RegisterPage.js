import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Register a new account</label>
            <input
              placeholder="user name..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              placeholder="email..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder=" password..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4">Account registration</button>
            <label className="mx-auto my-4">
             
You already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                Press here
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    )
}

export default RegisterPage