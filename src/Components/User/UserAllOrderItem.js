import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile2.png'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = () => {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">order nb  #234556</div>
            </Row>
            <UserAllOrderCard />
            <UserAllOrderCard />
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">condition:</div>
                        <div className="d-inline mx-2 stat">Underway </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text"> 3000$</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem