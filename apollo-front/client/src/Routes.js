import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Sitemap from './Sitemap';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import FolderPage from './Components/FolderPage';
import CategoryPage from './Components/CategoryPage';
import SingleProduct from './Components/SingleProduct';
import InquiryScreen from './Components/InquiryScreen';
import AllServices from './Components/AllServices';
import ServiceSpecialBoxes from './Components/ServiceSpecialBoxes';
import ServiceSpecial from './Components/ServiceSpecial';
import AllSupport from './Components/AllSupport';
import SupportSpecial from './Components/SupportSpecial';
import BlogPage from './Components/BlogPage';
import NoticiaPage from './Components/NoticiaPage';
import BlogPost from './Components/BlogPost';
import NewsItem from './Components/NewsItem';
import ContactUs from './Components/ContactUs';

const MyRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<HomePage />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/about-us'
				element={<AboutPage />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/blog'
				element={<BlogPage />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/news'
				element={<NoticiaPage />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/optical-bonding'
				element={<AllServices />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/backlight-enhancement'
				element={<AllServices />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/obsolescence-management'
				element={<ServiceSpecialBoxes />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/technical-services-and-processes'
				element={<AllServices />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/monitor-leasing'
				element={<AllServices />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/pixel-screening'
				element={<ServiceSpecial />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/rohs-compliant'
				element={<AllSupport />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/reach'
				element={<AllSupport />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/downloads'
				element={<SupportSpecial />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/technical-support'
				element={<AllSupport />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/eol-products'
				element={<AllSupport />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/company-network'
				element={<ContactUs />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/apollo-display-technologies-corporate-philosophy'
				element={<ContactUs />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/apollo-display-technologies-a-green-company'
				element={<ContactUs />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/contact-apollo-display-technologies'
				element={<ContactUs />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/linecard'
				element={<ContactUs />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/terms-and-conditions'
				element={<AllSupport />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/inquiry-list'
				element={<InquiryScreen />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/products/:fmlink'
				element={<FolderPage />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/products/:fmlink/:fmlink'
				element={<CategoryPage />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/products/:fmlink/:fmlink/:fmlink'
				element={<SingleProduct />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/blog/:fmlink'
				element={<BlogPost />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				path='/news/:fmlink'
				element={<NewsItem />}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route path='/sitemap' element={<Sitemap />} />
		</Routes>
	);
};

export default MyRoutes;
