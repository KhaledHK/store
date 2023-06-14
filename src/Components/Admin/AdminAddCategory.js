import React from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
const AdminAddCategory = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">add new category  </div>
                <Col sm="8">
                    <div className="text-form pb-2" style={{textAlign:'left'}}>image category </div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" name category"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-start ">
                    <button className="btn-save d-inline mt-2 ">save editing </button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCategory