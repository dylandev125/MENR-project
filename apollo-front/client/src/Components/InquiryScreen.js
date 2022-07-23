import React from 'react';

// CSS
import './Inquiries/inquiry.css';

// Parts
import InquiryList from './Inquiries/InquiryList';
import TopPage from './Inquiries/TopPage';
import InquirySection from './CatsAndProds/InquirySection';

const InquiryScreen = () => {
	return (
		<div className='inquiry-list-screen all-body'>
			<TopPage />
			<InquiryList />
			<InquirySection />
		</div>
	);
};

export default InquiryScreen;
