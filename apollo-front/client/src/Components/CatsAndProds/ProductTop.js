import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import HalfOne from '../../Images/logo-first-half.svg';
import HalfTwo from '../../Images/logo-second-half.svg';

// Parts
import ProductGallery from './ProductGallery';

const ProductTop = ({ title, imgs, subtitle, desc, options }) => {
    const [gallery, setGallery] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setGallery(imgs);
    }, [imgs]);

    useEffect(() => {
        function paralAb() {
            let theOffsetAb = window.pageYOffset;
            let oneHalfAb = document.getElementById('half-one-product');
            let twoHalfAb = document.getElementById('half-two-product');

            let limit = '';

            if (oneHalfAb !== null) {
                limit = oneHalfAb.offsetTop + oneHalfAb.offsetHeight;
            }

            if (theOffsetAb > 10 && oneHalfAb !== null) {
                oneHalfAb.style.transform =
                    'translateY(' + (-50 - (theOffsetAb * 15) / limit) + '%)';
                twoHalfAb.style.transform =
                    'translateY(' + (-50 + (theOffsetAb * 15) / limit) + '%)';
            }
        }

        document.addEventListener('scroll', paralAb, true);

        return () => {
            document.removeEventListener('scroll', paralAb, true);
        };
    });

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className='product-top'>
            <section>
                <Grid container spacing={0}>
                    <Grid item xs={12} className='sp-title-area'>
                        <div className='content-boxed'>
                            <h1>{title}</h1>
                            {subtitle && <h2>{subtitle}</h2>}
                        </div>
                        <div className='go-back'>
                            <button onClick={goBack}>
                                <i className='fal fa-long-arrow-left'></i>{' '}
                                <span>Go Back</span>
                            </button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={12} sm={11} md={7}>
                        <div className='content-boxed'>
                            <div
                                className='product-description'
                                dangerouslySetInnerHTML={{ __html: desc }}
                            ></div>
                        </div>
                        {options && options.length > 0 && (
                            <div className='content-boxed'>
                                <h4>Key Features</h4>
                                <ul className='product-features'>
                                    {options.map((opt) => (
                                        <li key={opt.id}>{opt.title}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={10} md={5}>
                        {gallery && gallery.length > 0 && (
                            <ProductGallery gallery={gallery} />
                        )}
                    </Grid>
                </Grid>
            </section>
            <div id='limit' className='img-bg-container'>
                <img
                    id='half-one-product'
                    src={HalfOne}
                    width='430'
                    height='900'
                    alt='Apollo logo left half'
                />
                <img
                    id='half-two-product'
                    src={HalfTwo}
                    width='430'
                    height='900'
                    alt='Apollo logo right half'
                />
            </div>
        </div>
    );
};

export default ProductTop;
