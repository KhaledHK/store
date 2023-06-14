import React from 'react'
import BrandCart from './BrandCart'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import { Container, Row } from 'react-bootstrap'

const BrandContainer = () => {
  return (
    <Container>
    <div className="admin-content-text mt-2 ">all brand</div>
<Row className='my-1 d-flex justify-content-between'>
     <BrandCart img={ brand1}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand1}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand1}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand1}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand1}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand2}/>
     <BrandCart img={ brand1}/>
     <BrandCart img={ brand3}/>
     <BrandCart img={ brand2}/>


     </Row>
    </Container>
  )
}

export default BrandContainer
