import { Grid } from '@material-ui/core';
import React from 'react';

const FolderBoxes = ({ extraboxes }) => {
	return (
		<div className='corporate-philo-block folder-extra-content'>
			<section>
				<Grid container spacing={4} alignItems='stretch'>
					<Grid item xs={12} sm={12} md={5}>
						<div className='nl-intro-container'>
							<h3>{extraboxes[0].etitle}</h3>
							{extraboxes[0].eimg !== 'uploads/big-placeholder.jpg' && (
								<div className='image-container'>
									<img
										src={`http://localhost:5079/${extraboxes[0].eimg}`}
										alt={extraboxes[0].etitle}
									/>
								</div>
							)}
							{extraboxes[1] && (
								<div
									className='extrabox-content'
									dangerouslySetInnerHTML={{
										__html:
											extraboxes[0].econtent &&
											extraboxes[0].econtent
												.replace(/Distec/gi, 'Apollo Display Technologies')
												.replace(/GmbH/g, ''),
									}}
								></div>
							)}
						</div>
					</Grid>

					<Grid item xs={12} sm={12} md={2}>
						<div className='blue-separator'></div>
					</Grid>
					{extraboxes[1] ? (
						<Grid item xs={12} sm={12} md={5}>
							<div className='nl-intro-container'>
								<h3>{extraboxes[1].etitle}</h3>
								{extraboxes[1].eimg !== 'uploads/big-placeholder.jpg' && (
									<div className='image-container'>
										<img
											src={`http://localhost:5079/${extraboxes[1].eimg}`}
											alt={extraboxes[1].etitle}
										/>
									</div>
								)}
								<div
									className='extrabox-content'
									dangerouslySetInnerHTML={{
										__html:
											extraboxes[1].econtent &&
											extraboxes[1].econtent
												.replace(/Distec/gi, 'Apollo Display Technologies')
												.replace(/GmbH/g, ''),
									}}
								></div>
							</div>
						</Grid>
					) : (
						<Grid item xs={12} sm={12} md={5}>
							<div
								className='extrabox-content'
								dangerouslySetInnerHTML={{
									__html:
										extraboxes[0].econtent &&
										extraboxes[0].econtent
											.replace(/Distec/gi, 'Apollo Display Technologies')
											.replace(/GmbH/g, ''),
								}}
							></div>
						</Grid>
					)}
				</Grid>
			</section>
		</div>
	);
};

export default FolderBoxes;
