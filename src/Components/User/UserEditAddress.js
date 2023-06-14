import React from 'react'
import { Row,Col } from 'react-bootstrap'

const UserEditAddress = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">adress edit </div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        value="home"
                        placeholder="(-: "
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        value=" beitt "
                        placeholder="details "
                    />
                    <input
                        type="text"
                        value="71740318"
                        className="input-form d-block mt-3 px-3"
                        placeholder="phonee nbb "
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-center ">
                    <button className="btn-save d-inline mt-2 ">save this adress  </button>
                </Col>
            </Row>
        </div>
    )
}

export default UserEditAddress