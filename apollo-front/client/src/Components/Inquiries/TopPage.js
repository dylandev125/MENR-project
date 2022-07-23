import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';

import '../About/about.css';

// Images
import HalfOne from '../../Images/logo-first-half.svg';
import HalfTwo from '../../Images/logo-second-half.svg';

const TopPage = () => {
    useEffect(() => {
        function paralAb() {
            let theOffsetAb = window.pageYOffset;
            let oneHalfAb = document.getElementById('half-one-about');
            let twoHalfAb = document.getElementById('half-two-about');

            let limit = '';

            if (oneHalfAb !== null) {
                limit = oneHalfAb.offsetTop + oneHalfAb.offsetHeight;
            }

            if (theOffsetAb > 10 && oneHalfAb !== null) {
                oneHalfAb.style.transform =
                    'translateY(' + (-50 - (theOffsetAb * 25) / limit) + '%)';
                twoHalfAb.style.transform =
                    'translateY(' + (-50 + (theOffsetAb * 25) / limit) + '%)';
            }
        }

        document.addEventListener('scroll', paralAb, true);

        return () => {
            document.removeEventListener('scroll', paralAb, true);
        };
    });

    return (
        <div className='about-top inquiry-top'>
            <section>
                <Grid
                    container
                    spacing={4}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xs={12}>
                        <div className='content-boxed'>
                            <h1>Inquiry Page</h1>
                            <h2>List of products chosen for inquiry</h2>

                            <div className='page-content'>
                                Review the list of products you chose, and when
                                you are ready, submit the form below.
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
            <div id='limit' className='img-bg-container'>
                <img
                    id='half-one-about'
                    src={HalfOne}
                    width='430'
                    height='900'
                    alt='Apollo logo left half'
                />
                <img
                    id='half-two-about'
                    src={HalfTwo}
                    width='430'
                    height='900'
                    alt='Apollo logo right half'
                />
            </div>
        </div>
    );
};

export default TopPage;
