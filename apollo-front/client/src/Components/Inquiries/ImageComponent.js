import React from 'react';

const ImageComponent = ({ content, type, alt, width, height }) => {
    return content === '' ? (
        <div className='inquiry-image'>
            <img
                src='http://localhost:5079/uploads/big-placeholder.jpg'
                alt='Apollo logo place holder'
                width={540}
                height={308}
            />
        </div>
    ) : (
        <div className='inquiry-image'>
            <img
                src={`data:${type};base64,  ${content}`}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
};

export default ImageComponent;
