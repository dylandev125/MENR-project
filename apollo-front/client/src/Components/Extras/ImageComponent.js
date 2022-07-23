import React, { useEffect, useState } from 'react';

//Parts
import Spinning from './Spinning';

const ImageComponent = ({ slide }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        return clearTimeout();
    }, []);

    return loading && slide.content !== undefined ? (
        <Spinning />
    ) : slide.content === undefined ? (
        <img
            src='http://localhost:5079/uploads/big-placeholder.jpg'
            alt='Apollo logo place holder'
            width={540}
            height={308}
        />
    ) : (
        <div className='product-gallery'>
            <img
                src={`data:${slide.type};base64,  ${slide.content}`}
                alt={slide.altTitle}
                title={slide.title}
                width={slide.width}
                height={slide.height}
            />
        </div>
    );
};

export default ImageComponent;
