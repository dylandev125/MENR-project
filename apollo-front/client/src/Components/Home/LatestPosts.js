import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { listBlogposts } from '../../actions/blogpostActions';
import Spinning from '../Extras/Spinning';

const LatestPosts = () => {
	const dispatch = useDispatch();

	const [finalPosts, setFinalPosts] = useState([]);

	const blogpostList = useSelector((state) => state.blogpostList);
	const { loading, error, blogposts } = blogpostList;

	useEffect(() => {
		dispatch(listBlogposts());
	}, [dispatch]);

	useEffect(() => {
		const filterPosts = blogposts.sort((a, b) =>
			new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
		);
		setFinalPosts(filterPosts);
	}, [blogposts]);

	return loading ? (
		<Spinning />
	) : error ? (
		<div>
			<section>There was an error loading the latest Posts</section>
		</div>
	) : (
		<div className='home-latest-post'>
			<section>
				<Grid container spacing={3} style={{ marginBottom: 40 }}>
					<Grid item xs={12} className='hp-title'>
						<h3>Our Blog</h3>
						<Link to='/blog' className='apollo-button'>
							All Posts
						</Link>
					</Grid>
				</Grid>
				<Grid container spacing={7}>
					<Grid item xs={12} sm={12} md={6}>
						<h6>Latest Post</h6>
						{finalPosts.slice(0, 1).map((fp) => (
							<div key={fp._id} className='hp-item-container'>
								<div className='hp-featured-img'>
									<img
										src={`http://localhost:5079/${fp.featuredimg}`}
										alt={fp.fmtitle}
										width='500'
										height='214'
									/>
								</div>
								<div className='hp-preview-content'>
									<div>
										<h4
											dangerouslySetInnerHTML={{
												__html: fp.fmtitle,
											}}
										></h4>
										<Moment format='DD MMMM YYYY'>{fp.createdAt}</Moment>
									</div>
									<Link to={`/blog/${fp.fmlink}`}>
										Read More <i className='fal fa-arrow-right'></i>
									</Link>
								</div>
							</div>
						))}
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						{finalPosts.slice(1, 4).map((lp) => (
							<Link
								to={`/blog/${lp.fmlink}`}
								key={lp._id}
								className='lp-item-container'
							>
								<div className='hp-small-size'>
									<img
										src={`http://localhost:5079/${lp.featuredimg}`}
										alt={lp.fmtitle}
										width='300'
										height='150'
									/>
								</div>
								<div className='lp-item-text'>
									<h4
										dangerouslySetInnerHTML={{
											__html: lp.fmtitle,
										}}
									></h4>
									<Moment format='DD MMMM YYYY'>{lp.createdAt}</Moment>
								</div>
							</Link>
						))}
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default LatestPosts;
