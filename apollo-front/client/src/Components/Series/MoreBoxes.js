import { Grid } from '@material-ui/core';
import React from 'react';

const MoreBoxes = ({ extraboxes }) => {
	return (
		<div className='folder-extra-content one-extrabox'>
			<section>
				<Grid container spacing={4} alignItems='stretch'>
					<Grid item xs={12}>
						<div className='nl-intro-container'>
							<h3>{extraboxes.etitle}</h3>
							{extraboxes.eimg !== 'uploads/big-placeholder.jpg' && (
								<div className='image-container'>
									<img
										src={`http://localhost:5079/${extraboxes.eimg}`}
										alt={extraboxes.etitle}
									/>
								</div>
							)}

							<div
								className='extrabox-content'
								dangerouslySetInnerHTML={{
									__html:
										extraboxes.econtent &&
										extraboxes.econtent.replace(/Distec/gi, 'Apollo'),
								}}
							></div>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default MoreBoxes;
