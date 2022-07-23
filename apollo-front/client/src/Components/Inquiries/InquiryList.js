import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Actions
import { showImageDetails } from '../../actions/imageActions';

// Parts
import InquiryItem from './InquiryItem';
import Spinning from '../Extras/Spinning';

const InquiryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inquiry = useSelector((state) => state.inquiry);
    const { inquiryItems } = inquiry;
    const showImage = useSelector((state) => state.showImage);
    const { image } = showImage;

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        setImages([]);
        if (inquiryItems.length === 0) {
            setLoading(false);
        }
        inquiryItems.forEach((el) => {
            if (el.image && el.image.ida !== 0) {
                dispatch(showImageDetails(el.image.id));
            }
        });
    }, [inquiryItems, dispatch]);

    useEffect(() => {
        if (image && image.data !== undefined) {
            let img = new Image();
            img.src = `data:${image.data.mimeType};base64,  ${image.data.data}`;

            if (img.src) {
                setImages((images) => [
                    ...images,
                    {
                        imgid: image.data.id,
                        content: image.data.data,
                        type: image.data.mimeType,
                        width: img.width,
                        height: img.height,
                    },
                ]);
            }
        }
    }, [image]);

    useEffect(() => {
        setProducts([]);
        inquiryItems.forEach((iel, index, array) => {
            if (iel.image && iel.image.id !== 0) {
                const filteredImage = images.filter(
                    (img) => img.imgid === iel.image.id && img
                );

                setProducts((products) => [
                    ...products,
                    { ...iel, ...filteredImage[0] },
                ]);
            } else {
                setProducts((products) => [...products, iel]);
            }

            if (index === array.length - 1) {
                setLoading(false);
            }
        });
    }, [images, inquiryItems]);

    return loading ? (
        <Spinning />
    ) : (
        <div className='inquiry-list'>
            <section>
                {inquiryItems.length === 0 ? (
                    <Grid container>
                        <Grid item xs={12} className='no-inquiries'>
                            <p>There is no items for inquiry</p>
                            <div className='go-back'>
                                <Link to='/' className='apollo-button'>
                                    <i className='fal fa-long-arrow-left'></i>{' '}
                                    <span>Home</span>
                                </Link>
                                <button
                                    onClick={goBack}
                                    style={{ marginLeft: 10 }}
                                >
                                    <i className='fal fa-long-arrow-left'></i>{' '}
                                    <span>Go Back</span>
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className='go-back'>
                                <Link to='/' className='apollo-button'>
                                    <i className='fal fa-long-arrow-left'></i>{' '}
                                    <span>Home</span>
                                </Link>
                                <button
                                    onClick={goBack}
                                    style={{ marginLeft: 10 }}
                                >
                                    <i className='fal fa-long-arrow-left'></i>{' '}
                                    <span>Go Back</span>
                                </button>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            {products &&
                                products.map((inq) => (
                                    <InquiryItem key={inq.id} product={inq} />
                                ))}
                        </Grid>
                    </Grid>
                )}
            </section>
        </div>
    );
};

export default InquiryList;
