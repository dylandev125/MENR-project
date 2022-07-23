import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
	return (
		<div className='home-body not-found'>
			<section>
				<h1>
					<i className='fas fa-exclamation-triangle'></i> 404 :-(
				</h1>
				<p style={{ marginBottom: 50 }}>
					{' '}
					The page you are trying to access doesn't exist.
				</p>
				<div className='purple-button'>
					<Link to='/' className='apollo-button'>
						Back to Home
					</Link>
				</div>
			</section>
		</div>
	);
};

export default NotFound;
