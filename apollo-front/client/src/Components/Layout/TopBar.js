import React from 'react';
import { Grid } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';

// Static Images
import Logo from '../../Images/apollo-logo-white.png';

// Parts
import ProductsMenu from './Menus/ProductsMenu';
import ServicesMenu from './Menus/ServicesMenu';
import SupportMenu from './Menus/SupportMenu';
import InquiryList from './InquiryList';
import ContactMenu from './Menus/ContactMenu';

const TopBar = () => {
	// const navigate = useNavigate();

	const openProductNav = () => {
		const getNav = document.getElementById('nav');

		getNav.classList.add('show');
		if (getNav.classList.contains('hide')) {
			getNav.classList.remove('hide');
		}
	};

	const openServiceNav = () => {
		const getNavs = document.getElementById('nav-serv');

		getNavs.classList.add('show');
		if (getNavs.classList.contains('hide')) {
			getNavs.classList.remove('hide');
		}
	};

	const openSupportNav = () => {
		const getNavp = document.getElementById('nav-sup');

		getNavp.classList.add('show');
		if (getNavp.classList.contains('hide')) {
			getNavp.classList.remove('hide');
		}
	};

	const goToPage = () => {
		const getNavp = document.getElementById('nav-con');

		getNavp.classList.add('show');
		if (getNavp.classList.contains('hide')) {
			getNavp.classList.remove('hide');
		}
	};

	return (
		<div className='top-bar'>
			<Grid container spacing={0}>
				<Grid item xs={12} sm={4} md={3}>
					<div className='logo-container'>
						<Link to='/'>
							<img
								src={Logo}
								alt='Apollo Display Technologies logo'
								width='260'
								height='60'
							/>
						</Link>
					</div>
				</Grid>
				<Grid item xs={12} sm={8} md={5}>
					<div className='featured-buttons'>
						<div className='btn-1'>
							<button onClick={openProductNav}>Products</button>
						</div>
						<div className='btn-2'>
							<button onClick={openServiceNav}>Services</button>
						</div>
						<div className='btn-3'>
							<button onClick={openSupportNav}>Support</button>
						</div>
						<div className='btn-4'>
							<button onClick={goToPage}>Contact Us</button>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<div className='navigation'>
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
						{/* <NavLink
							to='/case-studies'
							className={({ isActive }) =>
								'navigation-item' + (isActive ? ' nav-active' : '')
							}
						>
							Case Studies
						</NavLink> */}
					</div>
				</Grid>
			</Grid>
			<InquiryList />
			<div className='social-networks'>
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

			<ProductsMenu />
			<ServicesMenu />
			<SupportMenu />
			<ContactMenu />
		</div>
	);
};

export default TopBar;
