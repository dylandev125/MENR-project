import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { listNoticias } from '../../actions/noticiaActions';

// Parts
import Spinning from '../Extras/Spinning';
import Slider from 'react-slick';
import ImageNews from '../Layout/ImageNews';

const WhatsNew = () => {
	const dispatch = useDispatch();
	const settings = {
		className: 'banner-slider',
		dots: true,
		infinite: true,
		autoplay: true,
		fade: false,
		speed: 2000,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		adaptiveHeight: true,
		pauseOnDotsHover: true,
		pauseOnHover: false,
	};

	const [finalNews, setFinalNews] = useState([]);

	const noticiaList = useSelector((state) => state.noticiaList);
	const { loading, error, noticias } = noticiaList;

	useEffect(() => {
		dispatch(listNoticias());
	}, [dispatch]);

	useEffect(() => {
		const filterNews = noticias.sort((a, b) =>
			new Date(a.crDate) < new Date(b.crDate) ? 1 : -1
		);
		setFinalNews(filterNews);
	}, [noticias]);

	return loading ? (
		<Spinning />
	) : error ? (
		<div>
			<section>There was an error loading the latest News</section>
		</div>
	) : (
		<div className='what-is-new'>
			<section>
				<Grid container spacing={0}>
					<Grid item xs={12} sm={8} md={12} className='wn-right'>
						<h2>What is New?</h2>
						<div className='wn-intro'>
							<p>
								Take a look at the <b>new products</b> we have for you!
								<br />
								<small style={{ fontSize: 'small' }}>
									Hover vertical bars to apuse auto animation
								</small>
							</p>
							<Link className='apollo-button' to='/news'>
								News Page
							</Link>
						</div>
					</Grid>
				</Grid>

				<div className='banner-wrap-news'>
					<Slider {...settings}>
						{finalNews.slice(0, 4).map((fnews) => (
							<div key={fnews._id} className='banner'>
								<Grid
									container
									spacing={7}
									justifyContent='flex-end'
									alignItems='stretch'
									style={{ height: '100%' }}
								>
									<Grid item xs={1} sm={2} md={1}></Grid>
									<Grid item xs={10} sm={8} md={5} className='left-side'>
										<div className='news-image-container'>
											{fnews.media && <ImageNews imgid={fnews.media[0].id} />}
										</div>
									</Grid>
									<Grid item xs={10} sm={8} md={6} className='right-side'>
										<div className='wn-news-item'>
											<h4
												dangerouslySetInnerHTML={{
													__html: fnews.fmtitle.replace(
														/Distec/g,
														'Apollo Display Technologies'
													),
												}}
											></h4>
											<Moment format='MMMM DD, YYYY'>{fnews.crDate}</Moment>
											<div
												className='new-intro-home'
												dangerouslySetInnerHTML={{
													__html: fnews.fmintro.replace(
														/Distec/g,
														'Apollo Display Technologies'
													),
												}}
											></div>
											<Link
												to={`/news/${fnews.fmlink.replace(
													/distec/g,
													'apollo-display-technologies'
												)}`}
												className='apollo-white-button'
											>
												Read Full News
											</Link>
										</div>
									</Grid>
								</Grid>
							</div>
						))}
					</Slider>
				</div>
			</section>
		</div>
	);
};

export default WhatsNew;
