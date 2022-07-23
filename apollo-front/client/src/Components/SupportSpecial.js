import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './Support/support.css';

// Actions
import { listPageDetails } from '../actions/pageActions';
import NotFound from './Extras/NotFound';

// Parts
import Spinning from './Extras/Spinning';
import SupportTop from './Support/SupportTop';
import ThreeBoxes from './Support/ThreeBoxes';

const SupportSpecial = () => {
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
			<SupportTop topContent={topContent} />
			<ThreeBoxes extraboxes={extraboxes} />
		</div>
	);
};

export default SupportSpecial;
