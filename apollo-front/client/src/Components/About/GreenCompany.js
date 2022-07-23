import { Grid } from '@material-ui/core';
import React from 'react';

const GreenCompany = () => {
    return (
        <div className='about-top green-company'>
            <section>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={12} sm={11} md={6}>
                        <div className='content-boxed'>
                            <h3>
                                Apollo Display Technologies – A Green Company
                            </h3>
                            <h5>Digital Signage: More Power with Less Power</h5>

                            <p>
                                As a globally active company, we are aware of
                                the fact that we have to take responsibility for
                                our planet. That is why terms such as “emission
                                reduction”, “energy efficiency” or “reduction in
                                environmental pollution” are very important to
                                us.
                            </p>

                            <p>
                                We take our slogan “Data Display Group – A Green
                                Company” very seriously and act accordingly
                                whenever possible.
                            </p>

                            <p>
                                Our company buildings have been chosen resp.
                                built according to high environmental aspects.
                                Wherever possible, we use natural resources.
                                Without consuming gas or oil, a geo-thermal heat
                                pump tempers the offices in our headquarters
                                near Munich. The move of our US subsidiary
                                Apollo into a more modern building and our
                                sophisticated energy management enabled us to
                                reduce the power consumption in gas and
                                electricity by more than 20%. We achieved the
                                same result in UK by buying a new company
                                building and placing direct investments into
                                energy saving.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={11} md={6}>
                        <div className='content-boxed'>
                            <h5>
                                In Harmony with the Environment: Less Power,
                                less Noise, less Pollution
                            </h5>
                            <p>
                                As we design TFT controllers ourselves, we are
                                able to develop them highly energy efficient and
                                thus reach a higher savings potential than other
                                companies. By choosing a suitable hardware
                                platform, power consumption can be significantly
                                influenced without having to make sacrifices
                                concerning the performance. Why making use of
                                computing power when its not needed? Our
                                specifically adapted products mainly allow
                                fanless designs which are beneficial to noise
                                generation. Data Display Group manufactures
                                components according to highest environmental
                                requirements. Circuit boards are equipped
                                following German standards. In times of
                                energetic shift, ideas and applications playing
                                a part in contributing to effectively save
                                resources are inevitable.
                            </p>
                            <p>
                                Our high-performance products preserving the
                                environment, human life and energy are
                                mercury-free LED backlights, transflective
                                displays, controller boards with switching
                                function as well as brightness and motion
                                sensors. The highly effective Ambient Light
                                Sensor developed by us is one of these sensors.
                                It automatically adjusts the necessary
                                brightness of the display and provides a
                                constantly perfect picture without fluctuations.
                                Since we mostly work under rather poor lighting
                                conditions, the purchase of the sensor amortizes
                                within six months.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default GreenCompany;
