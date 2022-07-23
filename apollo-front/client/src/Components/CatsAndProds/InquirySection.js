import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Action
import { removeFromInq } from '../../actions/inquiryActions';

// Parts
import InquiryForm from '../Extras/InquiryForm';

const InquirySection = () => {
    const dispatch = useDispatch();

    const inquiry = useSelector((state) => state.inquiry);
    const { inquiryItems } = inquiry;

    const [formData, setFormaData] = useState({
        inquirylist: [],
        fullname: '',
        useremail: '',
        userphone: '',
        message: '',
    });

    const onChange = (e) => {
        setFormaData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (inquiryItems.length > 0) {
            setFormaData({
                ...formData,
                inquirylist: inquiryItems.map((x) => ({
                    product: x.title,
                    link: `https://apollo.ferociousmediaweb.com${x.pathname}`,
                })),
            });
        }

        // eslint-disable-next-line
    }, [inquiryItems]);

    const removeFromInquiry = (e, id) => {
        e.preventDefault();
        dispatch(removeFromInq(id));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='dark-blue-bg'>
            <section>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Grid container spacing={4} alignItems='stretch'>
                        <Grid item xs={12} sm={12} md={5}>
                            <div className='nl-intro-container'>
                                <h3>Inquire about the selected products</h3>
                                <p>
                                    We would love to hear from you. Get in touch
                                    today for a quote and more information.
                                    Simmply fill out our contact form below and
                                    we will get straight back to you.
                                </p>
                                <div className='product-inquire-list'>
                                    <p>
                                        Selected Products
                                        <br />
                                        <small
                                            style={{ color: 'var(--plata)' }}
                                        >
                                            Click to remove
                                        </small>
                                    </p>

                                    <ul>
                                        {inquiryItems.length > 0
                                            ? inquiryItems.map((itf) => (
                                                  <li key={itf.id}>
                                                      <FormControlLabel
                                                          control={
                                                              <Checkbox
                                                                  checked={true}
                                                                  name={
                                                                      itf.link
                                                                  }
                                                                  onClick={(
                                                                      e
                                                                  ) =>
                                                                      removeFromInquiry(
                                                                          e,
                                                                          itf.id
                                                                      )
                                                                  }
                                                              />
                                                          }
                                                          label={itf.title}
                                                      />
                                                  </li>
                                              ))
                                            : `You haven't selected any product yet`}
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <div className='blue-separator'></div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <InquiryForm
                                formData={formData}
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                </form>
            </section>
        </div>
    );
};

export default InquirySection;
