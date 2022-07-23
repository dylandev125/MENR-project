import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// CSS
import './Menus.css';

// Actions
import { listPages } from '../../../actions/pageActions';

// Parts
import ClickOutside from '../../Extras/ClickOutside';
import Spinning from '../../Extras/Spinning';

const conMenu = [
	{
		_id: 0,
		fmlabel: 'Code of Conduct',
		fmposition: 56,
		fmlink: 'https://www.fortecag.de/en/group/code-of-conduct/',
	},
];

const ContactMenu = () => {
	const dispatch = useDispatch();

	const [contactMenu, setContactMenu] = useState([]);

	const pageList = useSelector((state) => state.pageList);
	const { loading, error, pages } = pageList;

	useEffect(() => {
		dispatch(listPages());
	}, [dispatch]);

	useEffect(() => {
		if (pages.length > 0) {
			const filtered = pages.filter(
				(el) => el.fmposition > 50 && el.fmposition < 60
			);
			const merge = [...conMenu, ...filtered];
			setContactMenu(merge);
		}
	}, [pages]);

	const onClose = () => {
		const getNavp = document.getElementById('nav-con');

		if (getNavp.classList.contains('show')) {
			getNavp.classList.remove('show');
			getNavp.classList.add('hide');
		}
	};

	return (
		<div id='nav-con' className='menu-container con-container'>
			<ClickOutside onOutsideClick={() => onClose()}>
				<div className='slide-in-menu'>
					<Grid container justifyContent='center'>
						<Grid item xs={11}>
							<div className='menu-topbar'>
								<h2>
									Contact Us
									<br />
									Menu
								</h2>
								<button onClick={onClose}>
									<span>Close Menu</span>
									<i className='fal fa-times'></i>{' '}
								</button>
							</div>
						</Grid>
					</Grid>
					{loading ? (
						<Spinning />
					) : error ? (
						<Grid container>
							<Grid item xs={12}>
								There was an error loading the menu
							</Grid>
						</Grid>
					) : (
						<Grid
							container
							style={{ marginTop: 70, marginBottom: 70 }}
							justifyContent='center'
						>
							<Grid item xs={11} sm={11} md={11}>
								{contactMenu
									.sort((a, b) => a.fmposition - b.fmposition)
									.map((conr) => (
										<div key={conr._id} className='items-in-menu'>
											{conr.fmlink.startsWith('http') ? (
												<a
													href={conr.fmlink}
													className='navigation-item'
													target='_blank'
													onClick={onClose}
													rel='noreferrer'
												>
													<span className='menu-folder'>{conr.fmlabel}</span>
												</a>
											) : (
												<NavLink
													className={({ isActive }) =>
														'navigation-item' + (isActive ? ' nav-active' : '')
													}
													onClick={onClose}
													to={`/${conr.fmlink}`}
												>
													<span className='menu-folder'>{conr.fmlabel}</span>
												</NavLink>
											)}
										</div>
									))}
							</Grid>
						</Grid>
					)}
				</div>
			</ClickOutside>
		</div>
	);
};

export default ContactMenu;
