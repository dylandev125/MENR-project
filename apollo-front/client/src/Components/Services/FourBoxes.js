import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { ReactSVG } from 'react-svg';

const FourBoxes = ({ extraboxes }) => {
	const [boxOne, setBoxOne] = useState({
		etitle: '',
		econtent: '',
	});

	useEffect(() => {
		extraboxes.filter((el) => el.eposition === 1 && setBoxOne(el));

		// eslint-disable-next-line
	}, [extraboxes]);

	return (
		<div className='service-box blue-bg'>
			<section>
				<Grid container>
					<Grid item xs={12}>
						<div style={{ textAlign: 'center' }}>
							<h3>{boxOne.etitle}</h3>
							<div
								className='content-box'
								dangerouslySetInnerHTML={{ __html: boxOne.econtent }}
							></div>
						</div>
					</Grid>
				</Grid>
				<Grid container spacing={5} style={{ marginTop: 50 }}>
					{extraboxes.slice(1, 5).map((el) => (
						<Grid key={el._id} item xs={12} sm={6} md={3}>
							<div className='service-blurb'>
								<ReactSVG
									src={`http://localhost:5079/${el.eimg}`}
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

export default FourBoxes;
