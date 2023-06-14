import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile2 from '../../images/mobile2.png'
import labtop from '../../images/labtop.png'
import edit from '../../images/edit.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallery = () => {
    const images = [
        {
            original: `${mobile2}`,
        },
        {
            original: `${mobile2}`,
        },
        {
            original: `${mobile2}`,
        },
    ];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={mobile2}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery