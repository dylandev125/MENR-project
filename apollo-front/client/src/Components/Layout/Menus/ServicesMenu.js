import React, { useEffect } from 'react';
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

const ServicesMenu = () => {
	const dispatch = useDispatch();

	const pageList = useSelector((state) => state.pageList);
	const { loading, error, pages } = pageList;

	useEffect(() => {
		dispatch(listPages());
	}, [dispatch]);

	const onClose = () => {
		const getNavs = document.getElementById('nav-serv');

		if (getNavs.classList.contains('show')) {
			getNavs.classList.remove('show');
			getNavs.classList.add('hide');
		}
	};

	return (
		<div id='nav-serv' className='menu-container serv-container'>
			<ClickOutside onOutsideClick={() => onClose()}>
				<div className='slide-in-menu'>
					<Grid container justifyContent='center'>
						<Grid item xs={11}>
							<div className='menu-topbar'>
								<h2>
									Services
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
								{pages
									.sort(
										(a, b) => parseInt(a.fmposition) - parseInt(b.fmposition)
									)
									.map(
										(srvm) =>
											srvm.isMenu &&
											srvm.isLive &&
											srvm.fmposition > 20 &&
											srvm.fmposition < 30 && (
												<div key={srvm._id} className='items-in-menu'>
													<NavLink
														className={({ isActive }) =>
															'navigation-item' +
															(isActive ? ' nav-active' : '')
														}
														onClick={onClose}
														to={`/${srvm.fmlink}`}
													>
														<span className='menu-folder'>{srvm.fmlabel}</span>
													</NavLink>
												</div>
											)
									)}
							</Grid>
						</Grid>
					)}
				</div>
			</ClickOutside>
		</div>
	);
};

export default ServicesMenu;
