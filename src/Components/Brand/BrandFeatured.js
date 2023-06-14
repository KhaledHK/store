import React from 'react'

import { Container, Row } from 'react-bootstrap'
import SubTitre from '../Utility/SubTitre'
import BrandCart from './BrandCart'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
const BrandFeatured = ({title,btntitle}) => {
  return (
    <Container>
    <SubTitre title={title} btntitle={btntitle} pathText="/allbrand"/>
<Row className='my-1 d-flex justify-content-between'>
     <BrandCart img={ brand1}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand1}/>

     </Row>
    </Container>
  )
}

export default BrandFeatured