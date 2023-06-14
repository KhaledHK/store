
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
const AdminAddProducts = () => {

    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: " category 1", id: 1 },
        { name: "category 2 ", id: 2 },
    ];

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">   add new product</div>
                <Col sm="8">
                    <div className="text-form pb-2"  style={{textAlign:'left'}}> product photo </div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="product name "
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="product description "
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="pricre before sale  "
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" product price "
                    />
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val"> pricipal category</option>
                        <option value="val">categorie 1 </option>
                        <option value="val2">category 2 </option>
                        <option value="val2">category 3 </option>
                        <option value="val2">category 4 </option>
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder=" secondary category"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">brad</option>
                        <option value="val2">  primery brand</option>
                        <option value="val2">secondary brand  </option>
                        <option value="val2"> third brand</option>
                    </select>
                    <div className="text-form mt-3 " style={{textAlign:'left'}}> color pf product  </div>
                    <div className="mt-1 d-flex">
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        <div
                            className="color ms-2 border mt-1 "
                            style={{ backgroundColor: "white" }}></div>
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "black" }}></div>
                        <img src={add} alt="" width="30px" height="35px" className="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">save modification </button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProducts
