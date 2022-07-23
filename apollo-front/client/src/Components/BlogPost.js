import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Blog/blog.css';

// Actions
import { listBlogpostDetails, listBlogposts } from '../actions/blogpostActions';

// Parts
import Spinning from './Extras/Spinning';
import NotFound from './Extras/NotFound';
import PostTop from './Blog/PostTop';

const BlogPost = () => {
	const dispatch = useDispatch();
	const pathname = useParams();

	const [topContent, setTopContent] = useState({
		isLive: false,
		title: '',
		subtitle: '',
		content: '',
		featuredimg: '',
		date: new Date(),
	});

	const blogpostList = useSelector((state) => state.blogpostList);
	const { loading, error, blogposts } = blogpostList;
	const blogpostDetails = useSelector((state) => state.blogpostDetails);
	const { blogpost } = blogpostDetails;

	useEffect(() => {
		dispatch(listBlogposts());
		dispatch(listBlogpostDetails(pathname.fmlink));
	}, [dispatch, pathname]);

	useEffect(() => {
		const LoadContent = () => {
			setTopContent({
				isLive: blogpost.isLive,
				title: blogpost.fmtitle,
				content: blogpost.fmcontent,
				featuredimg: blogpost.featuredimg,
				date: blogpost.createdAt,
			});
		};

		return LoadContent();

		// eslint-disable-next-line
	}, [blogpost, pathname]);

	return loading ? (
		<Spinning />
	) : error || !topContent.isLive ? (
		<NotFound />
	) : (
		<div className='page-body'>
			<PostTop topContent={topContent} blogposts={blogposts} />
		</div>
	);
};

export default BlogPost;
