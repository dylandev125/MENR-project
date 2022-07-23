import React from 'react';

// CSS
import './About/about.css';

// Parts
import AboutTop from './About/AboutTop';
import CorporatePhilosophy from './About/CorporatePhilosophy';
import GreenCompany from './About/GreenCompany';

const AboutPage = () => {
	return (
		<div className='all-body'>
			<AboutTop />
			<CorporatePhilosophy />
			<GreenCompany />
		</div>
	);
};

export default AboutPage;
