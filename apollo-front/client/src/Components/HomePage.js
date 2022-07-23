import React from 'react';

// CSS
import './Home/home.css';

// Parts
import HomeSlider from './Home/HomeSlider';
import ProductBoxes from './Home/ProductBoxes';
import WhatsNew from './Home/WhatsNew';
import HomeAbout from './Home/HomeAbout';
import LatestPosts from './Home/LatestPosts';

const HomePage = () => {
	return (
		<div className='home-body'>
			<HomeSlider />
			<ProductBoxes />
			<WhatsNew />
			<HomeAbout />
			<LatestPosts />
		</div>
	);
};

export default HomePage;
