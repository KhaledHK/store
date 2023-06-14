import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
    return (
        <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">category</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">all</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">fruit</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">vetment </div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 "> honey</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 "> appel</div>
            </div>
          </div>

          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">mark</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">all</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">leb-</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">samsung</div>
            </div>
          </div>

          <div className="filter-title my-3">price</div>
          <div className="d-flex">
            <p className="filter-sub my-2">from:</p>
            <input
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">to:</p>
            <input
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    )
}

export default SideFilter