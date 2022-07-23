import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import Spinning from '../Extras/Spinning';

const FolderBoxes = ({ boxone, boxtwo }) => {
	const [loading, setLoading] = useState(true);
	const [loadingTwo, setLoadingTwo] = useState(true);
	const [boxImgs, setBoxImgs] = useState([]);

	useEffect(() => {
		setBoxImgs([]);
		if (boxone.eimg) {
			let image = new Image();
			image.src = `http://localhost:5079/${boxone.eimg}`;
			image.onload = () => {
				setBoxImgs((boxImgs) => [
					...boxImgs,
					{
						src: image.src,
						width: image.width,
						height: image.height,
					},
				]);
				setLoading(false);
			};
		}
		if (boxtwo && boxtwo.eimg) {
			let image = new Image();
			image.src = `http://localhost:5079/${boxtwo.eimg}`;
			image.onload = () => {
				setBoxImgs((boxImgs) => [
					...boxImgs,
					{
						src: image.src,
						width: image.width,
						height: image.height,
					},
				]);
				setLoadingTwo(false);
			};
		}

		// eslint-disable-next-line
	}, [boxone]);

	return (
		<div className='corporate-philo-block folder-extra-content'>
			<section>
				<Grid container spacing={4} justifyContent='center'>
					{boxone.eimg !== 'uploads/big-placeholder.jpg' &&
						boxImgs.map(
							(b1) =>
								b1.src !==
									'http://localhost:5079/uploads/big-placeholder.jpg' &&
								b1.src ===
									`http://localhost:5079/${boxone.eimg}` && (
									<Fragment key={boxone._id}>
										<Grid item xs={12} sm={12} md={4}>
											{loading ? (
												<Spinning />
											) : (
												<Fragment>
													<div className='image-container'>
														<img
															src={b1.src}
															alt={boxone.etitle}
															width={b1.width}
															height={b1.height}
														/>
													</div>
												</Fragment>
											)}
										</Grid>

										<Grid item xs={12} sm={12} md={1}>
											<div
												className='blue-separator'
												style={{ height: '100%', minHeight: 250 }}
											></div>
										</Grid>
									</Fragment>
								)
						)}

					<Grid
						item
						xs={12}
						sm={12}
						md={
							boxone.eimg && boxone.eimg !== 'uploads/big-placeholder.jpg'
								? 7
								: boxtwo
								? 5
								: 8
						}
					>
						<div className='nl-intro-container'>
							<div className='nl-intro-container'>
								<h3>{boxone.etitle}</h3>
							</div>
							<div
								className='extrabox-content'
								dangerouslySetInnerHTML={{
									__html: boxone.econtent,
								}}
							></div>
						</div>
					</Grid>

					{boxtwo && (
						<Fragment>
							{boxone.eimg &&
							boxone.eimg !== 'uploads/big-placeholder.jpg' &&
							boxtwo.eimg === 'uploads/big-placeholder.jpg' ? (
								<Fragment>
									<Grid item xs={12} sm={10} md={8} style={{ marginTop: 50 }}>
										<div
											className='nl-intro-container'
											style={{ textAlign: 'center' }}
										>
											<div style={{ marginLeft: 60 }}>
												<h3>{boxtwo.etitle}</h3>
											</div>
											<div
												className='extrabox-content'
												dangerouslySetInnerHTML={{
													__html: boxtwo.econtent,
												}}
											></div>
										</div>
									</Grid>
								</Fragment>
							) : boxone.eimg &&
							  boxone.eimg !== 'uploads/big-placeholder.jpg' &&
							  boxtwo.eimg !== 'uploads/big-placeholder.jpg' ? (
								<Fragment>
									<Grid item xs={12} sm={12} md={7}>
										<div
											className='nl-intro-container'
											style={{ textAlign: 'center' }}
										>
											<div style={{ marginLeft: 60 }}>
												<h3>{boxtwo.etitle}</h3>
											</div>
											<div
												className='extrabox-content'
												dangerouslySetInnerHTML={{
													__html: boxtwo.econtent,
												}}
											></div>
										</div>
									</Grid>
									{boxImgs.map(
										(b2) =>
											b2.src ===
												`http://localhost:5079/${boxtwo.eimg}` && (
												<Fragment key={boxtwo._id}>
													<Grid item xs={12} sm={12} md={1}>
														<div className='blue-separator'></div>
													</Grid>
													<Grid item xs={12} sm={12} md={4}>
														{loadingTwo ? (
															<Spinning />
														) : (
															<Fragment>
																<div className='image-container'>
																	<img
																		src={b2.src}
																		alt={boxone.etitle}
																		width={b2.width}
																		height={b2.height}
																	/>
																</div>
															</Fragment>
														)}
													</Grid>
												</Fragment>
											)
									)}
								</Fragment>
							) : boxone.eimg === 'uploads/big-placeholder.jpg' &&
							  boxtwo.eimg !== 'uploads/big-placeholder.jpg' ? (
								<Fragment>
									<Grid item xs={12} sm={12} md={1}>
										<div className='blue-separator special-bar'></div>
									</Grid>
									<Grid item xs={12} sm={12} md={6}>
										<div className='nl-intro-container'>
											<h3>{boxtwo.etitle}</h3>
											{boxImgs.map(
												(b2) =>
													b2.src ===
														`http://localhost:5079/${boxtwo.eimg}` && (
														<Fragment key={boxtwo._id}>
															{loadingTwo ? (
																<Spinning />
															) : (
																<Fragment>
																	<div className='image-container special-image'>
																		<img
																			src={b2.src}
																			alt={boxone.etitle}
																			width={b2.width}
																			height={b2.height}
																			style={{
																				width: '100%',
																			}}
																		/>
																	</div>
																</Fragment>
															)}
														</Fragment>
													)
											)}
											<div
												className='extrabox-content'
												dangerouslySetInnerHTML={{
													__html: boxtwo.econtent,
												}}
											></div>
										</div>
									</Grid>
								</Fragment>
							) : (
								<Fragment>
									<Grid item xs={12} sm={12} md={1}>
										<div className='blue-separator special-bar'></div>
									</Grid>
									<Grid item xs={12} sm={12} md={6}>
										<div className='nl-intro-container'>
											<h3>{boxtwo.etitle}</h3>
											<div
												className='extrabox-content'
												dangerouslySetInnerHTML={{
													__html: boxtwo.econtent,
												}}
											></div>
										</div>
									</Grid>
								</Fragment>
							)}
						</Fragment>
					)}
				</Grid>
			</section>
		</div>
	);
};

export default FolderBoxes;
