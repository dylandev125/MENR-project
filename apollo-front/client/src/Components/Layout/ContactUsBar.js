import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsBar = () => {
	return (
		<div className='dark-blue-bg cta-products'>
			<section>
				<Grid container spacing={0} alignItems='stretch'>
					<Grid item xs={12} sm={12} md={5}>
						<div className='nl-intro-container'>
							<h3>Get In Touch</h3>
							<p>
								We will gladly advise you and find the perfect product for your
								project.
							</p>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={2}>
						<div className='blue-separator'></div>
					</Grid>
					<Grid item xs={12} sm={12} md={5}>
						<div className='cta-button-section'>
							<Link className='apollo-button' to='/contact-us'>
								Contact Us Now
							</Link>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default ContactUsBar;
