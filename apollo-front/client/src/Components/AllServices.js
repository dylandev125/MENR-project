import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './Services/services.css';

// Actions
import { listPageDetails } from '../actions/pageActions';
import NotFound from './Extras/NotFound';

// Parts
import Spinning from './Extras/Spinning';
import FirstBoxes from './Services/FirstBoxes';
import ServicesTop from './Services/ServicesTop';
import SecondSection from './Services/SecondSection';

const AllServices = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const [topContent, setTopContent] = useState({
		title: '',
		subtitle: '',
		content: '',
		featuredimg: '',
	});
	const [extraboxes, setExtraboxes] = useState([]);

	const pageDetails = useSelector((state) => state.pageDetails);
	const { loading, error, page } = pageDetails;

	useEffect(() => {
		dispatch(listPageDetails(pathname.replace('/', '')));
	}, [dispatch, pathname]);

	useEffect(() => {
		const LoadContent = () => {
			if (!loading && !error) {
				setTopContent({
					title: page.fmtitle,
					subtitle: page.fmsubtitle,
					content: page.fmcontent,
					featuredimg: page.featuredimg,
				});
				setExtraboxes(
					page.extraboxes.sort((a, b) => a.eposition - b.eposition)
				);
			}
		};

		return LoadContent();

		// eslint-disable-next-line
	}, [page, pathname]);

	return loading ? (
		<Spinning />
	) : error ? (
		<NotFound />
	) : (
		<div className='all-body'>
			<ServicesTop topContent={topContent} />
			{extraboxes[0] && <FirstBoxes boxone={extraboxes[0]} />}
			{extraboxes[1] && <SecondSection boxtwo={extraboxes[1]} />}
			{extraboxes[2] && <FirstBoxes boxone={extraboxes[2]} />}
			{extraboxes[3] && <SecondSection boxtwo={extraboxes[3]} />}
			{extraboxes[4] && <FirstBoxes boxone={extraboxes[4]} />}
			{extraboxes[5] && <SecondSection boxtwo={extraboxes[5]} />}
			{extraboxes[6] && <FirstBoxes boxone={extraboxes[6]} />}
			{extraboxes[7] && <SecondSection boxtwo={extraboxes[7]} />}
		</div>
	);
};

export default AllServices;
