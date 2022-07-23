import { Grid } from '@material-ui/core';
import React from 'react';
import NewsletterForm from './NewsletterForm';

const Newsletters = () => {
    return (
        <div className='news-letters-block'>
            <section>
                <Grid container spacing={4} alignItems='stretch'>
                    <Grid item xs={12} sm={12} md={5}>
                        <div className='nl-intro-container'>
                            <h3>Newsletter Signup</h3>
                            <h6>
                                Sign up to our monthly newsletter to keep up to
                                date with all the latest product news, industry
                                updates and new developments.
                            </h6>
                            <small>
                                By submitting this form, you are consenting to
                                receive null from: Display Technology Ltd,
                                Osprey House, 1 Osprey Court, Hinchingbrooke
                                Business Park, Huntingdon, PE29 6FN, GB,
                                http://www.displaytechnology.co.uk. You can
                                revoke your consent to receive emails at any
                                time by using the SafeUnsubscribe® link, found
                                at the bottom of every email. Emails are
                                serviced by Constant Contact.
                            </small>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <div className='blue-separator'></div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <NewsletterForm />
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default Newsletters;
