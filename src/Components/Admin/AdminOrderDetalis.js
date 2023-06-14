import React from 'react'
import { Row,Col } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'

const AdminOrderDetalis = () => {
    return (
        <div>
            <div className='admin-content-text'>details order nb #55 </div>
            <CartItem />
            <CartItem />
            <CartItem />

            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2"> details custemer</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        name:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        Khaled Khaled 
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        phone nb :
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        71740318
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        khaled.khk.khaled@gmail.com
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    totale 3004 $
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val">rder Status </option>
                        <option value="val2">In progress </option>
                        <option value="val2">Finished </option>
                        <option value="val2">Cancel</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">save </button>
                </div>
            </Row>
        </div>
    )
}

export default AdminOrderDetalis