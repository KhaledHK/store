import React from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Utility/Pagination';

const UserFavoriteProduct = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">favorit list </div>
            <Row className='justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
            <Pagination />
        </div>
    )
}

export default UserFavoriteProduct