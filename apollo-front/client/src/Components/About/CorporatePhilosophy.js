import { Grid } from '@material-ui/core';
import React from 'react';

const CorporatePhilosophy = () => {
    return (
        <div className='corporate-philo-block'>
            <section>
                <Grid container spacing={4} alignItems='stretch'>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className='nl-intro-container'>
                            <h3>
                                Apollo Dipslay Technologies: Corporate
                                Philosophy
                            </h3>
                            <h5>Our Basic Understanding as an Enterprise</h5>
                            <p>
                                As a leading supplier in the market segment
                                display technology we implement high-quality
                                display technologies and software at competitive
                                prices for industry and Digital Signage. With
                                every step in our development, we orientate
                                towards our customers’ needs to obtain best
                                possible product results. This guarantees that
                                we keep our leading position despite the fierce
                                global competition and its narrow pricing.
                            </p>
                            <p>
                                Our employees are our most important asset and
                                the guarantors for our corporate success. Be it
                                advice on TFT display applications or replies to
                                questions, we ensure contact persons who will
                                respond to your request in a prompt and proper
                                manner. Furthermore, it is important for us that
                                our employees continuously expand their
                                knowledge and skills in this ever-expanding
                                industry.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={1}>
                        <div className='blue-separator'></div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <div className='nl-intro-container'>
                            <h5>
                                Guidelines of Data Display Group product
                                developments are:
                            </h5>
                            <ul>
                                <li>
                                    <b>Durability:</b> Production based on the
                                    latest manufacturing technologies enables
                                    high reliability. We provide quality made in
                                    Germany (ISO 9001 certified) and USA.
                                </li>
                                <li>
                                    <b>User-friendliness:</b> Our applications
                                    are well adapted to each other and provide
                                    high ease of use due to functions that are
                                    perfectly adjusted to correspond your
                                    purpose. Our aim is to keep procedures
                                    simple so that you can use your product
                                    straight away.
                                </li>
                                <li>
                                    <b>Energy efficiency:</b> We place value on
                                    the fact that our products are manufactured
                                    environmentally friendly and have a low
                                    power consumption. Components developed by
                                    us thus help you to save electricity and
                                    costs.
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default CorporatePhilosophy;
