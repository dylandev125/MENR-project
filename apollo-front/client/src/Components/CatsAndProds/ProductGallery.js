import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';

// Redux Action
import { showImageDetails } from '../../actions/imageActions';

// Parts
import ImageComponent from '../Extras/ImageComponent';
import Spinning from '../Extras/Spinning';

const ProductGallery = ({ gallery }) => {
    const dispatch = useDispatch();

    const showImage = useSelector((state) => state.showImage);
    const { error, image } = showImage;

    const [thescr, setThescr] = useState([]);
    const [ImgDim, setImgDim] = useState([]);
    const [loading, setLoading] = useState(true);

    var settings = {
        className: 'banner-slider',
        dots: true,
        infinite: true,
        autoplay: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 7600,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
    };

    useEffect(() => {
        const SetFunction = () => {
            gallery &&
                gallery.length > 0 &&
                gallery.forEach((el) => {
                    dispatch(showImageDetails(el.id));
                });
        };

        return SetFunction();
    }, [dispatch, gallery]);

    useEffect(() => {
        if (image && image.data && image.data.data !== undefined) {
            setThescr((thescr) => [...thescr, image]);
        }
    }, [image, gallery]);

    useEffect(() => {
        setImgDim([]);
        gallery &&
            gallery.forEach((el, i) => {
                const newel = [];

                thescr.forEach((ts) => {
                    if (ts.data.id === el.id) {
                        let img = new Image();
                        img.src = `data:${ts.data.mimeType};base64,  ${ts.data.data}`;

                        if (img.src) {
                            newel.push({
                                content: ts.data.data,
                                type: ts.data.mimeType,
                                width: img.width,
                                height: img.height,
                            });
                        }
                    }
                });

                setImgDim((ImgDim) => [...ImgDim, { ...el, ...newel[0] }]);
                if (i + 1 === gallery.length) {
                    setLoading(false);
                }
            });
    }, [thescr, gallery]);

    return loading ? (
        <Spinning />
    ) : error ? (
        <section>
            <h3>Error Loading Product Gallery</h3>
        </section>
    ) : (
        <div className='banner-wrap'>
            <Slider {...settings}>
                {ImgDim &&
                    ImgDim.length > 0 &&
                    ImgDim.map((slide) => (
                        <div key={slide._id} className='prod-gallery'>
                            <ImageComponent slide={slide} />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default React.memo(ProductGallery);
