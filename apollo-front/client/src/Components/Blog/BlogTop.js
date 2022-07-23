import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';

// Images
import HalfOne from '../../Images/logo-first-half.svg';
import HalfTwo from '../../Images/logo-second-half.svg';

const BlogTop = ({ topContent }) => {
	const { title, content, subtitle, featuredimg } = topContent;

	useEffect(() => {
		function paralAb() {
			let theOffsetAb = window.pageYOffset;
			let oneHalfAb = document.getElementById('half-one-about');
			let twoHalfAb = document.getElementById('half-two-about');

			let limit = '';

			if (oneHalfAb !== null) {
				limit = oneHalfAb.offsetTop + oneHalfAb.offsetHeight;
			}

			if (theOffsetAb > 10 && oneHalfAb !== null) {
				oneHalfAb.style.transform =
					'translateY(' + (-50 - (theOffsetAb * 25) / limit) + '%)';
				twoHalfAb.style.transform =
					'translateY(' + (-50 + (theOffsetAb * 25) / limit) + '%)';
			}
		}

		document.addEventListener('scroll', paralAb, true);

		return () => {
			document.removeEventListener('scroll', paralAb, true);
		};
	});

	return (
		<div className='about-top optical-bonding'>
			<section>
				<Grid container spacing={4} alignItems='center'>
					<Grid
						item
						xs={12}
						sm={11}
						md={
							featuredimg && featuredimg !== 'uploads/big-placeholder.jpg'
								? 7
								: 11
						}
					>
						<div className='content-boxed'>
							<h1>{title}</h1>
							<h2>{subtitle}</h2>

							<div
								className='page-content'
								dangerouslySetInnerHTML={{ __html: content }}
							></div>
						</div>
					</Grid>
					{featuredimg && featuredimg !== 'uploads/big-placeholder.jpg' && (
						<Grid item xs={12} sm={10} md={5}>
							<div className='image-container'>
								<img
									src={`http://localhost:5079/${featuredimg}`}
									alt={title}
									width='667'
									height='500'
								/>
							</div>
						</Grid>
					)}
				</Grid>
			</section>
			<div id='limit' className='img-bg-container'>
				<img
					id='half-one-about'
					src={HalfOne}
					width='430'
					height='900'
					alt='Apollo logo left half'
				/>
				<img
					id='half-two-about'
					src={HalfTwo}
					width='430'
					height='900'
					alt='Apollo logo right half'
				/>
			</div>
		</div>
	);
};

export default BlogTop;
