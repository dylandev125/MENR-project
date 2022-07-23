import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from 'reactjs-hooks-pagination';

import './Blog/blog.css';

// Actions
import { listBlogposts } from '../actions/blogpostActions';
import { listPageDetails } from '../actions/pageActions';

// Parts
import Spinning from './Extras/Spinning';
import NotFound from './Extras/NotFound';
import BlogTop from './Blog/BlogTop';

const BlogPage = () => {
	const dispatch = useDispatch();
	const pathname = 'blog';

	const [topContent, setTopContent] = useState({
		title: '',
		subtitle: '',
		content: '',
		featuredimg: '',
	});

	const [finalPosts, setFinalPosts] = useState([]);
	const [offset, setOffset] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const blogpostList = useSelector((state) => state.blogpostList);
	const { loading, error, blogposts } = blogpostList;
	const pageDetails = useSelector((state) => state.pageDetails);
	const { page } = pageDetails;

	useEffect(() => {
		dispatch(listBlogposts());
		dispatch(listPageDetails(pathname));
	}, [dispatch, pathname]);

	useEffect(() => {
		const LoadContent = () => {
			setTopContent({
				isLive: page.isLive,
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
		const filterPosts = blogposts
			.sort((a, b) => (new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1))
			.filter((el) => el.isLive && el);
		setFinalPosts(filterPosts);
	}, [blogposts]);

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
	) : error || !topContent.isLive ? (
		<NotFound />
	) : (
		<div className='all-body blog-page'>
			<BlogTop topContent={topContent} />
			<section>
				<Grid container justifyContent='center' spacing={5}>
					{currentPage.length > 0 &&
						currentPage.map((blog) => (
							<Grid key={blog._id} item xs={12} sm={6} md={4}>
								<div className='items'>
									<Link to={`/blog/${blog.fmlink}`}>
										<div className='blog-item-img'>
											<img
												src={`http://localhost:5079/${blog.featuredimg}`}
												alt={blog.fmtitle}
											/>
										</div>
										<div className='blog-item-text'>
											<div className='extra-info'>
												<Moment format='MMMM DD, YYYY'>{blog.createdAt}</Moment>
											</div>
											<h4>{blog.fmtitle}</h4>
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
									totalRecords={blogposts.length}
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

export default BlogPage;
