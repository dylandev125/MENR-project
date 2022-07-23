import React from 'react';
import Slider from 'react-slick';

import { Grid } from '@material-ui/core';

// Parts

// Images
import ImageOne from '../../Images/woman-with-digital-screen.jpg';
import ImageOneM from '../../Images/woman-with-digital-screen-mb.jpg';
import ImageTwo from '../../Images/tft-display.jpg';
import ImageTwoM from '../../Images/tft-display-mb.jpg';

const sliders = [
	{
		_id: 1,
		title: 'Your Window to the Future',
		img: `${ImageOne}`,
		mb: `${ImageOneM}`,
		date: '2021-08-28T20:00:15.773Z',
	},
	{
		_id: 2,
		title: 'Innovative TFT System Solutions',
		img: `${ImageTwo}`,
		mb: `${ImageTwoM}`,
		date: '2021-08-28T20:01:15.773Z',
	},
];

const HomeSlider = () => {
	var settings = {
		className: 'banner-slider',
		dots: true,
		infinite: true,
		autoplay: true,
		fade: true,
		speed: 2000,
		autoplaySpeed: 7600,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		adaptiveHeight: true,
	};

	return (
		<div className='banner-wrap'>
			<Slider {...settings}>
				{sliders &&
					sliders.length > 0 &&
					sliders.map((slide) => (
						<div key={slide._id} className='banner'>
							<div className='container'>
								<Grid container spacing={0}>
									<Grid item xs={12} className='align-items-center'>
										<div className='main-title'>
											<h2
												dangerouslySetInnerHTML={{
													__html: slide.title,
												}}
											></h2>
										</div>
									</Grid>
								</Grid>
							</div>
							<div className='slider-overlay'></div>
							<div className='banner-outer'>
								<picture>
									<source
										media='(max-width: 600px)'
										srcSet={slide.mb}
										alt={slide.title}
										width='600'
										height='320'
									/>
									<img
										src={slide.img}
										alt={slide.title}
										width='1500'
										height='800'
									/>
								</picture>
							</div>
						</div>
					))}
			</Slider>
		</div>
	);
};

export default React.memo(HomeSlider);
