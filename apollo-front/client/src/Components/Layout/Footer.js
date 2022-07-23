import { Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Images
import FooterLogo from '../../Images/apollo-logo-white.png';

const Footer = () => {
	const openProductNav = () => {
		const getNav = document.getElementById('nav');

		getNav.classList.add('show');
		if (getNav.classList.contains('hide')) {
			getNav.classList.remove('hide');
		}
	};

	const openServiceNav = () => {
		const getNav = document.getElementById('nav-serv');

		getNav.classList.add('show');
		if (getNav.classList.contains('hide')) {
			getNav.classList.remove('hide');
		}
	};

	return (
		<footer>
			<section>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={3} className='col-footer-1'>
						<div className='phone-container'>
							<i className='fal fa-phone-office'></i>{' '}
							<span>
								Call: <a href='tel:6315804360'>(631) 580-4360</a>
							</span>
						</div>
						<div className='phone-container'>
							<i className='fal fa-fax'></i>{' '}
							<span>
								Fax: <span className='fax'>(631) 580-4370</span>
							</span>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6} className='col-footer-2'>
						<div className='footer-nav'>
							<p>Navigation</p>
							<Grid container>
								<Grid item xs={12}>
									<div className='navigation-ft'>
										<NavLink
											to='/'
											className={({ isActive }) =>
												'navigation-item' + (isActive ? ' nav-active' : '')
											}
										>
											Home
										</NavLink>
										<NavLink
											to='/about-us'
											className={({ isActive }) =>
												'navigation-item' + (isActive ? ' nav-active' : '')
											}
										>
											About Us
										</NavLink>
										<NavLink
											to='/blog'
											className={({ isActive }) =>
												'navigation-item' + (isActive ? ' nav-active' : '')
											}
										>
											Blog
										</NavLink>
										<NavLink
											to='/news'
											className={({ isActive }) =>
												'navigation-item' + (isActive ? ' nav-active' : '')
											}
										>
											News
										</NavLink>
										<NavLink
											to='/case-studies'
											className={({ isActive }) =>
												'navigation-item' + (isActive ? ' nav-active' : '')
											}
										>
											Case Studies
										</NavLink>
										<button
											onClick={openProductNav}
											className='navigation-item'
										>
											Products
										</button>
										<button
											onClick={openServiceNav}
											className='navigation-item'
										>
											Services
										</button>
									</div>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={3} className='col-footer-3'>
						<div className='footer-logo'>
							<img
								src={FooterLogo}
								width='250'
								height='60'
								alt='Apollo Display Technologies logo'
							/>
						</div>
						<div className='ft-social-networks'>
							<a
								href='https://www.facebook.com/ApolloDisplays/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='https://twitter.com/ApolloDisplays'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href='https://www.linkedin.com/company/apollo-display-technologies'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-linkedin-in'></i>
							</a>
							<a
								href='https://www.youtube.com/channel/UCX_CTVQONXi0g-4D4gUIziQ'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-youtube'></i>
							</a>
						</div>
					</Grid>
				</Grid>
				<Grid container justifyContent='center' style={{ marginTop: 50 }}>
					<Grid item xs={10} sm={9} md={8}>
						<div className='credit-bar'>
							<p className='ft-credits'>Apollo Display Technologies © 2021</p>
							<p className='ft-credits'>
								Design and Dev by{' '}
								<a
									href='https://ferociousmedia.com'
									target='_blank'
									rel='noreferrer'
								>
									Ferocious Media
								</a>
							</p>
						</div>
					</Grid>
				</Grid>
			</section>
		</footer>
	);
};

export default Footer;
