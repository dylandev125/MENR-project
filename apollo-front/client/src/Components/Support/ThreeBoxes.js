import React from 'react';
import { Grid } from '@mui/material';

const ThreeBoxes = ({ extraboxes }) => {
	return (
		<div className='support-box blue-bg'>
			<section>
				<Grid container spacing={5} justifyContent='center'>
					{extraboxes.slice(0, 5).map((el) => (
						<Grid key={el._id} item xs={12} sm={6} md={4}>
							<div className='support-blurb'>
								<img
									src={`http://localhost:5079/${el.eimg}`}
									alt={el.etitle}
								/>
								<h5>{el.etitle}</h5>
								<div
									className='content-box'
									dangerouslySetInnerHTML={{ __html: el.econtent }}
								></div>
							</div>
						</Grid>
					))}
				</Grid>
			</section>
		</div>
	);
};

export default ThreeBoxes;
