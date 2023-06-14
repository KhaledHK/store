import React from 'react'
import { Row,Col } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
const AdminAddBrand = () => {
    return (
        
       <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">add new mark(brand ) </div>
                <Col sm="8">
                    <div className="text-form pb-2" style={{textAlign:'left'}}> image brand</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" name mark(brand"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-left ">
                    <button className="btn-save d-inline mt-2 ">save edit </button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddBrand