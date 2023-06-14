import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";

import pic from "../../images/pic.png";
const CategoryContainer = () => {
    return (
        <Container >
        <div className="admin-content-text mt-2 ">all category</div>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="honey" img={clothe} background="#F4DBA4" />
                <CategoryCard title="honey" img={cat2} background="#F4DBA4" />
                <CategoryCard title="honey" img={pic} background="#0034FF" />
                <CategoryCard title="honey " img={labtop} background="#F4DBA4" />
                <CategoryCard title="honey" img={clothe} background="#FF6262" />
                <CategoryCard title="honey" img={pic} background="#F4DBA4" />
                <CategoryCard title="honey" img={clothe} background="#F4DBA4" />
                <CategoryCard title="honey" img={cat2} background="#F4DBA4" />
                <CategoryCard title="honey" img={pic} background="#0034FF" />
                <CategoryCard title=" honey" img={labtop} background="#F4DBA4" />
                <CategoryCard title=" honey" img={clothe} background="#FF6262" />
                <CategoryCard title=" honey" img={pic} background="#F4DBA4" />
                <CategoryCard title="honey " img={clothe} background="#F4DBA4" />
                <CategoryCard title=" honey" img={cat2} background="#F4DBA4" />
                <CategoryCard title=" honey" img={pic} background="#0034FF" />
                <CategoryCard title=" honey" img={labtop} background="#F4DBA4" />
                <CategoryCard title=" honey" img={clothe} background="#FF6262" />
                <CategoryCard title=" honey" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
    )
}

export default CategoryContainer