import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">all</div>
            <div className="cat-text-header">fruit</div>
            <div className="cat-text-header">vetment</div>
            <div className="cat-text-header"> honey</div>
            <div className="cat-text-header">appel</div>
            <div className="cat-text-header">asus</div>
            <div className="cat-text-header">laptop</div>
            <div className="cat-text-header">iphon</div>
            <div className="cat-text-header">sumsung</div>
            <div className="cat-text-header">more</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader
