import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';

// Images
import HalfOne from '../../Images/logo-first-half.svg';
import HalfTwo from '../../Images/logo-second-half.svg';
import ApolloTeam from '../../Images/apollo-team-in-lab.jpg';
import QasLogo from '../../Images/qas-international-seal.jpg';

const extraboxes = [
    {
        _id: 1,
        subtitle: 'Experience and State-of-the-Art Systems Technology',
        bodybox: `The Engineers in our Research & Development facilities in Germering, (Munich), Ronkonkoma (New York) and Istanbul have both access to long years of experience in producing LCD Panels, and a firm focus on current and future technology in the field.`,
    },
    {
        _id: 2,
        subtitle: 'One-Stop System Solutions',
        bodybox: `We specialize in complete, customer-specific solutions in all areas from mechanics, Touch-integration, hardware and software development to manufacture and installation.`,
    },
    {
        _id: 3,
        subtitle: 'Ready Product Availability',
        bodybox: `We maintain amongst the biggest stocks of LCD panels worldwide at our facilities in Germany and the USA.`,
    },
    {
        _id: 4,
        subtitle: 'Quality and Service',
        bodybox: `We develop all of our products in accordance with industrial Quality standards. We attach the greatest importance to high-value components, resilient under the most demanding conditions of use, and with long-term availability. In the event it should be necessary, our ISO 9000-certified Service Centre guarantees a quick and reliable turn-around for returned goods.`,
    },
    {
        _id: 5,
        subtitle: 'Environmental Awareness',
        bodybox: `The natural world is the foundation of our livelihood, and as a consequence, environmental protection is core to our business. We develop energy-saving products; seek designs that take the environment into consideration, (for example: we refuse to use tantalum capacitors) and implement resource-saving processes wherever possible. Protection of our environment was even at the forefront of our HQ building renovations: thanks to modern building management and future-proof heating technology we have no need for fossil fuel!`,
    },
];

const AboutTop = () => {
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
        <div className='about-top'>
            <section>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={12} sm={11} md={7}>
                        <div className='content-boxed'>
                            <h1>About Apollo</h1>
                            <h2>Your Specialist for LCD screen solutions</h2>

                            <p>
                                Apollo Display Technologies’ parent company is
                                the Data Display Group, based in Germering,
                                Germany. The DD Group is comprised of six
                                subsidiaries in five countries – ensuring the
                                highest quality of support and professional
                                service.
                            </p>

                            <p>Our business portfolio comprises:</p>

                            <ul>
                                <li>
                                    Development and manufacture of LCD Displays
                                    of various types, amongst which: Public
                                    Display Screens; Integrated Monitors;
                                    Desktop Monitors; Video Walls; Digital Door
                                    Signage and 3D Monitors.
                                </li>
                                <li>
                                    Development and manufacture of industrial
                                    Display Controllers for standard video
                                    signals such as RGB, DVI HDMI or Display
                                    Port, and with ARM-based Technologies.
                                </li>
                                <li>
                                    Delivery of TFT displays fully equipped with
                                    touch components, cables, power supplies and
                                    ready-to-use LCD Kits.
                                </li>
                                <li>
                                    Design, manufacture and delivery of
                                    customized LCD Display solutions. This
                                    service includes everything from mechanical
                                    design, hardware and software development
                                    and Touch integration, to manufacture and
                                    staging in our own facilities.
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10} md={5}>
                        <div className='image-container'>
                            <img
                                src={ApolloTeam}
                                alt='Apollo Team in lab'
                                width='667'
                                height='500'
                            />
                        </div>
                        <a
                            href='http://localhost:5079/uploads/3606US-20-21.pdf'
                            target='_blank'
                            rel='noreferrer'
                            className='iso-pdf-link'
                        >
                            <div className='image-container secondary-image'>
                                <img
                                    src={QasLogo}
                                    alt='QAS International'
                                    width='300'
                                    height='213'
                                />
                                <h5>ISO 9001:2015</h5>
                                <p>Registered Company</p>
                                <small>Certificate No. US3606</small>
                            </div>
                        </a>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={12} sm={11} md={7}>
                        <div
                            className='content-boxed'
                            style={{ textAlign: 'center' }}
                        >
                            <p>
                                Data Display Group has been a Solutions Provider
                                to many famous organizations, worldwide, for
                                over 20 years. Our name stands for:
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justifyContent='center'>
                    {extraboxes.map((eb) => (
                        <Grid key={eb._id} item xs={11} sm={6} md={4}>
                            <div
                                className='content-boxed icon-blurbs'
                                style={{ textAlign: 'center' }}
                            >
                                <i className='fal fa-check-circle'></i>
                                <h6>{eb.subtitle}</h6>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: eb.bodybox,
                                    }}
                                ></div>
                            </div>
                        </Grid>
                    ))}
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

export default AboutTop;
