import React from 'react'
import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitre from '../Utility/SubTitre'

const CardProductsContainer = ({title,btntitle,pathText}) => {
  return (
    <Container>
    <SubTitre title={title} btntitle={btntitle} pathText={pathText}/>
<Row className='my-2 d-flex justify-content-between'>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     </Row>
    </Container>
  )
}

export default CardProductsContainer
