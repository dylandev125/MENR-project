import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from 'reactjs-hooks-pagination';

import './Noticia/noticia.css';

// Actions
import { listNoticias } from '../actions/noticiaActions';
import { listPageDetails } from '../actions/pageActions';

// Parts
import Spinning from './Extras/Spinning';
import NotFound from './Extras/NotFound';
import NoticiaTop from './Noticia/NoticiaTop';
import ImageNews from './Layout/ImageNews';

const NoticiaPage = () => {
	const dispatch = useDispatch();
	const pathname = 'news';

	const [topContent, setTopContent] = useState({
		title: '',
		subtitle: '',
		content: '',
		featuredimg: '',
	});

	const [finalPosts, setFinalPosts] = useState([]);
	const [offset, setOffset] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const noticiaList = useSelector((state) => state.noticiaList);
	const { loading, error, noticias } = noticiaList;
	const pageDetails = useSelector((state) => state.pageDetails);
	const { page } = pageDetails;

	useEffect(() => {
		dispatch(listNoticias());
		dispatch(listPageDetails(pathname));
	}, [dispatch, pathname]);

	useEffect(() => {
		const LoadContent = () => {
			setTopContent({
				title: page.fmtitle,
				subtitle: page.fmsubtitle,
				content: page.fmcontent,
				featuredimg: page.featuredimg,
			});
		};

		return LoadContent();

		// eslint-disable-next-line
	}, [page, pathname]);

	useEffect(() => {
		const filterPosts = noticias
			.sort((a, b) => (new Date(a.crDate) < new Date(b.crDate) ? 1 : -1))
			.filter((el) => el.isLive && el);
		setFinalPosts(filterPosts);
	}, [noticias]);

	useEffect(() => {
		setCurrentPage(finalPosts && finalPosts.slice(offset, offset + 15));

		// eslint-disable-next-line
	}, []);

	const onPageChanged = (page) => {
		const offset = (page - 1) * 15;
		setOffset(offset);
		setCurrentPage(
			finalPosts && finalPosts.slice(offset, offset + parseInt(15, 10))
		);
	};

	useEffect(() => {
		setCurrentPage(
			finalPosts && finalPosts.slice(offset, offset + parseInt(15, 10))
		);

		document.querySelectorAll('.pagination-wrap nav ul li').forEach((el) => {
			el.addEventListener('click', () => {
				window.scroll({
					top: 0,
					left: 0,
					behavior: 'instant',
				});
			});
		});

		return document
			.querySelectorAll('.pagination-wrap nav ul li')
			.forEach((el) => {
				el.removeEventListener('click', el);
			});

		// eslint-disable-next-line
	}, [offset, finalPosts]);

	return loading ? (
		<Spinning />
	) : error ? (
		<NotFound />
	) : (
		<div className='all-body noticia-page'>
			<NoticiaTop topContent={topContent} />
			<section>
				<Grid container justifyContent='center' spacing={5}>
					{currentPage.length > 0 &&
						currentPage.map((noticia) => (
							<Grid key={noticia._id} item xs={12} sm={6} md={4}>
								<div className='items'>
									<Link to={`/news/${noticia.fmlink}`}>
										<div className='noticia-item-img'>
											{noticia.media.length > 0 ? (
												<ImageNews imgid={noticia.media[0].id} />
											) : (
												<img
													src='http://localhost:5079/uploads/big-placeholder.jpg'
													alt='Apollo Placeholder'
												/>
											)}
										</div>
										<div className='noticia-item-text'>
											<div className='extra-info'>
												<Moment format='MMMM DD, YYYY'>{noticia.crDate}</Moment>
											</div>
											<h4>
												{noticia.fmtitle.replace(
													/Distec/g,
													'Apollo Display Technologies'
												)}
											</h4>
											<div
												className='item-intro'
												dangerouslySetInnerHTML={{
													__html: noticia.fmintro.replace(
														/Distec/g,
														'Apollo Display Technologies'
													),
												}}
											></div>
										</div>
									</Link>
								</div>
							</Grid>
						))}
				</Grid>
			</section>
			<section>
				<Grid container justifyContent='center'>
					<Grid item xs={12} sm={5} md={4}>
						<div className='pagination-wrap'>
							{finalPosts && (
								<Pagination
									totalRecords={noticias.length}
									pageLimit={15}
									pageRangeDisplayed={2}
									onChangePage={onPageChanged}
								/>
							)}
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default NoticiaPage;
