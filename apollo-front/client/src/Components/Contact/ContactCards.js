import React, { Fragment } from 'react';
import { Grid } from '@mui/material';

const ContactCards = ({ boxone, first }) => {
	return first ? (
		<Fragment>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<div className='con-intro-container contact-cars'>
					<h4>{boxone.etitle}</h4>
				</div>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<div className='con-intro-container contact-cars'>
					<div
						className='extrabox-content'
						dangerouslySetInnerHTML={{
							__html:
								boxone.econtent &&
								boxone.econtent
									.replace(/Distec/gi, 'Apollo Display Technologies')
									.replace(/GmbH/g, ''),
						}}
					></div>
				</div>
			</Grid>
		</Fragment>
	) : (
		<Grid item xs={12} sm={6} md={4}>
			<div className='con-intro-container contact-cars'>
				<h4>{boxone.etitle}</h4>
				<div
					className='extrabox-content'
					dangerouslySetInnerHTML={{
						__html:
							boxone.econtent &&
							boxone.econtent
								.replace(/Distec/gi, 'Apollo Display Technologies')
								.replace(/GmbH/g, ''),
					}}
				></div>
			</div>
		</Grid>
	);
};

export default ContactCards;
