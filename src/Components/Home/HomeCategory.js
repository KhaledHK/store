import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitre from '../Utility/SubTitre'
import CategoryCard from '../Category/CategoryCard'
import labtop from "../../images/labtop.png"
import cat2 from "../../images/cat2.png"
import clothe from "../../images/clothe.png"

import pic from "../../images/pic.png"



const HomeCategory = () => {
  return (
    <Container>
    <SubTitre title="category" btntitle="more" pathText="/allcategory"/>
<Row className='my-2 d-flex justify-content-between'>
     <CategoryCard background="#F4DBA4" title="honey" img={labtop}/>
     <CategoryCard background="#F4D004" title="honey" img={cat2}/>
     <CategoryCard background="#F4DBA4" title="honey" img={clothe}/>
     <CategoryCard background="#F08BA4" title="honey" img={pic}/>
     <CategoryCard background="#F4DBA4" title="honey" img={clothe}/>
     <CategoryCard background="#F4DB04" title="honey" img={cat2}/>
     </Row>
    </Container>
  )
}

export default HomeCategory
