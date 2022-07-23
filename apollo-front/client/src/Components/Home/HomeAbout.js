import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';

// Images
import HalfOne from '../../Images/logo-first-half.svg';
import HalfTwo from '../../Images/logo-second-half.svg';
import FortecLogo from '../../Images/fortec-elektronic-logo.svg';

const HomeAbout = () => {
    useEffect(() => {
        function paral() {
            let theOffset = window.pageYOffset;
            let oneHalf = document.getElementById('half-one');
            let twoHalf = document.getElementById('half-two');
            // let theLimit = document.getElementById('limit');
            // // let theHeight = theLimit.offsetHeight;
            // let startpara = theLimit.getBoundingClientRect().top;
            let limit = oneHalf.offsetTop + oneHalf.offsetHeight;

            if (theOffset > oneHalf.offsetTop && theOffset >= limit) {
                oneHalf.style.transform =
                    'translateY(' + (-15 - (theOffset * 10) / 700) + '%)';
                twoHalf.style.transform =
                    'translateY(' + (15 + (theOffset * 10) / 700) + '%)';
            }
        }

        document.addEventListener('scroll', paral, true);

        return () => {
            document.removeEventListener('scroll', paral, true);
        };
    });

    return (
        <div className='about-home'>
            <section>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={11} md={9}>
                        <div className='content-boxed'>
                            <h1>
                                Apollo Display
                                <br />
                                Technologies
                            </h1>
                            <h5>
                                A leading global provider of engineering and
                                supply-chain solutions for flat panel
                                technologies.
                            </h5>
                            <p>
                                TFT-LCD Distribution, Flatscreen Solutions, TFT
                                Monitors, VideoPosters, Digital Media Content
                                and more
                            </p>

                            <p>
                                Apollo specializes in TFT-LCD flat panel
                                technologies and supply chain solutions. We
                                offer a huge selection of TFT-LCD monitors and
                                touchscreens, as well as corresponding
                                components. We also offer hardware and software
                                solutions for all of our products and digital
                                signage applications.
                            </p>

                            <p>
                                As a worldwide supplier of state-of-the-art TFT
                                technologies and system solutions, Apollo
                                Displays supports you in all project phases – 1
                                from construction of the metal housing and
                                procurement of specific parts to in-house
                                development of controller boards and touchscreen
                                integration.
                            </p>
                            <div className='closing-line'>
                                <div className='cl-left'>
                                    <h4>
                                        We are proud of being part of the best
                                        in field
                                    </h4>
                                </div>
                                <div className='blue-separator'></div>
                                <div className='cl-right'>
                                    <img
                                        src={FortecLogo}
                                        alt='Fortec Elektronik AG logo'
                                        width='222'
                                        height='55'
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
            <div id='limit' className='img-bg-container'>
                <img
                    id='half-one'
                    src={HalfOne}
                    width='430'
                    height='900'
                    alt='Apollo logo left half'
                />
                <img
                    id='half-two'
                    src={HalfTwo}
                    width='430'
                    height='900'
                    alt='Apollo logo right half'
                />
            </div>
        </div>
    );
};

export default HomeAbout;
