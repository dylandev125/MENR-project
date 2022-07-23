import React, { Fragment } from 'react';
import { Grid } from '@mui/material';

const SecondSection = ({ boxtwo }) => {
	return (
		<div className='service-box black-bg'>
			<section>
				<Grid container spacing={4} alignItems='center'>
					<Grid item xs={12} sm={12} md={7}>
						<div className='seb-intro-container'>
							<h4>{boxtwo.etitle}</h4>
							<div
								className='extrabox-content'
								dangerouslySetInnerHTML={{
									__html:
										boxtwo.econtent &&
										boxtwo.econtent
											.replace(/Distec/gi, 'Apollo Display Technologies')
											.replace(/GmbH/g, ''),
								}}
							></div>
						</div>
					</Grid>
					{boxtwo.eimg !== 'uploads/big-placeholder.jpg' && (
						<Fragment>
							<Grid item xs={12} sm={12} md={1}>
								<div className='blue-separator'></div>
							</Grid>
							<Grid item xs={12} sm={12} md={4}>
								<div className='seb-intro-container'>
									<div className='image-container'>
										<img
											src={`http://localhost:5079/${boxtwo.eimg}`}
											alt={boxtwo.etitle}
										/>
									</div>
								</div>
							</Grid>
						</Fragment>
					)}
				</Grid>
			</section>
		</div>
	);
};

export default SecondSection;
