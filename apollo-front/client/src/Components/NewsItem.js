import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Noticia/noticia.css';

// Actions
import { listNoticiaDetails, listNoticias } from '../actions/noticiaActions';

// Parts
import Spinning from './Extras/Spinning';
import NotFound from './Extras/NotFound';
import PostTop from './Noticia/PostTop';

const NewsItem = () => {
	const dispatch = useDispatch();
	const pathname = useParams();
	const backtodistec = pathname.fmlink.replace(
		'apollo-display-technologies',
		'distec'
	);

	const [topContent, setTopContent] = useState({
		isLive: false,
		title: '',
		subtitle: '',
		content: '',
		featuredimg: '',
		date: new Date(),
	});

	const noticiaList = useSelector((state) => state.noticiaList);
	const { loading, error, noticias } = noticiaList;
	const noticiaDetails = useSelector((state) => state.noticiaDetails);
	const { noticia } = noticiaDetails;

	useEffect(() => {
		dispatch(listNoticias());
		dispatch(listNoticiaDetails(backtodistec));
	}, [dispatch, backtodistec]);

	useEffect(() => {
		const LoadContent = () => {
			setTopContent({
				isLive: noticia.isLive,
				title: noticia.fmtitle,
				content: noticia.fmcontent,
				featuredimg: noticia.featuredimg,
				date: noticia.crDate,
				fmintro: noticia.fmintro,
				subtitle: noticia.altTitle !== null ? noticia.altTitle : '',
				media: noticia.media ? noticia.media[0] : {},
			});
		};

		return LoadContent();

		// eslint-disable-next-line
	}, [noticia, pathname]);

	return loading ? (
		<Spinning />
	) : error || !topContent.isLive ? (
		<NotFound />
	) : (
		<div className='page-body'>
			<PostTop topContent={topContent} noticias={noticias} />
		</div>
	);
};

export default NewsItem;
