import React from 'react'
import { Row,Col } from 'react-bootstrap'

const UserAddAddress = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">add new adress  </div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" title ( akroum-qenia )"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder=" adress detail"
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="phon nb "
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-center ">
                    <button className="btn-save d-inline mt-2 ">add adress</button>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddAddress