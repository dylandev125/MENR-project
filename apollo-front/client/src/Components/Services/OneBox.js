import React from 'react';
import { Grid } from '@mui/material';

const OneBox = ({ boxone }) => {
	return (
		<div className='service-box blue-bg'>
			<section>
				<Grid container>
					<Grid item xs={12}>
						<div style={{ textAlign: 'center' }}>
							<h3>{boxone.etitle}</h3>
							{boxone.econtent.startsWith('http') ? (
								<div className='content-box' style={{ marginTop: 50 }}>
									<a
										href={boxone.econtent}
										target='_blank'
										className='apollo-white-button'
										rel='noreferrer'
									>
										Open PDF
									</a>
								</div>
							) : (
								<div
									className='content-box'
									dangerouslySetInnerHTML={{ __html: boxone.econtent }}
								></div>
							)}
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default OneBox;
