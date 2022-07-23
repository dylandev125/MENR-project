import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Action
import { removeFromInq } from '../../actions/inquiryActions';

// Parts
import ImageComponent from './ImageComponent';

const InquiryItem = ({ product }) => {
    const dispatch = useDispatch();

    const removeFromInquiry = (e, id) => {
        e.preventDefault();
        dispatch(removeFromInq(id));
    };

    return (
        <Grid
            container
            className='prod-item-container'
            justifyContent='center'
            alignItems='center'
            spacing={2}
        >
            <Grid item xs={12} sm={12} md={3}>
                <ImageComponent
                    content={product.content ? product.content : ''}
                    type={product.type ? product.type : ''}
                    alt={product.altTitle ? product.altTitle : ''}
                    width={product.width ? product.width : ''}
                    height={product.height ? product.height : ''}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <div className='prod-title'>
                    <Link to={`${product.pathname}`}>
                        <h5>{product.title}</h5>
                    </Link>
                    <small>
                        {product.manufacturer && product.manufacturer}
                    </small>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <div className='prod-actions'>
                    <Link
                        to={`${product.pathname}`}
                        className='prod-actions-click'
                    >
                        <i className='fas fa-eye'></i>
                        <br />
                        <p>View</p>
                    </Link>

                    <button
                        onClick={(e) => removeFromInquiry(e, product.id)}
                        className='prod-actions-click'
                    >
                        <i className='fal fa-trash-alt'></i>
                        <br />
                        <p>Remove</p>
                    </button>
                </div>
            </Grid>
        </Grid>
    );
};

export default InquiryItem;
