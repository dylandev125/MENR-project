import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { listSeries } from '../../actions/serieActions';
import { listCategories } from '../../actions/categoryActions';

// Parts
import Spinning from '../Extras/Spinning';

const FoldersSeries = ({ folderTitle, folderLink }) => {
	const dispatch = useDispatch();
	const [filtered, setFiltered] = useState([]);

	const serieList = useSelector((state) => state.serieList);
	const { loading, error, series } = serieList;
	const categoryList = useSelector((state) => state.categoryList);
	const { categories } = categoryList;

	useEffect(() => {
		dispatch(listSeries());
		dispatch(listCategories());
	}, [dispatch]);

	useEffect(() => {
		const isolateSeries = series.filter((el) => el.underFolder === folderTitle);
		const isolateCategories = categories.filter(
			(el) => el.underFolder === folderTitle
		);


		setFiltered([...isolateSeries, ...isolateCategories]);
	}, [series, categories, folderTitle, folderLink]);

	return loading ? (
		<Spinning />
	) : error ? (
		<h3>There was an error fetching series</h3>
	) : (
		<div className='home-cta-boxes folder-page-series'>
			{filtered.length > 0 ? (
				<section>
					<Grid container justifyContent='center'>
						<Grid item xs={11} sm={10} md={9}>
							<h4 style={{ textAlign: 'center' }}>
								Start browsing our products
							</h4>
						</Grid>
					</Grid>
					<Grid
						container
						spacing={3}
						justifyContent='center'
						alignItems='stretch'
					>
						{filtered
							.sort((a, b) => a.fmposition - b.fmposition)
							.map(
								(serf) =>
									serf.isLive && (
										<Grid key={serf._id} item xs={12} sm={6} md={4}>
											<Link
												className='series-links'
												to={`/products/${folderLink}/${serf.fmlink}`}
											>
												<div className='cta-main-boxes-folder'>
													<div className='cta-box-content-folder'>
														<div className='cta-box-image-container'>
															<img
																src={`http://localhost:5079/${serf.featuredimg}`}
																alt={serf.fmtitle}
																width='500'
																height='400'
															/>
														</div>
														<div className='cta-box-title-folder'>
															<h4>
																{serf.fmlabel ? serf.fmlabel : serf.fmtitle}
															</h4>
														</div>
														<div className='cta-box-body-folder'>
															<span className='apollo-button'>Learn More</span>
														</div>
													</div>
												</div>
											</Link>
										</Grid>
									)
							)}
					</Grid>
				</section>
			) : (
				<div className='section-divider'></div>
			)}
		</div>
	);
};

export default FoldersSeries;
