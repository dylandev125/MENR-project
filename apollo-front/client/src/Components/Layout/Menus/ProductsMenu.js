import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// CSS
import './Menus.css';

// Actions
import { listFolders } from '../../../actions/folderActions';
import { listSeries } from '../../../actions/serieActions';
import { listCategories } from '../../../actions/categoryActions';

// Extras
import Spinning from '../../Extras/Spinning';
import ClickOutside from '../../Extras/ClickOutside';

const ProductsMenu = () => {
	const dispatch = useDispatch();
	const [merged, setMerged] = useState([]);
	const [submenu, setSubmenu] = useState([]);
	const [loading, setLoading] = useState(true);

	const folderList = useSelector((state) => state.folderList);
	const { folders } = folderList;
	const serieList = useSelector((state) => state.serieList);
	const { series } = serieList;
	const categoryList = useSelector((state) => state.categoryList);
	const { categories } = categoryList;

	useEffect(() => {
		dispatch(listFolders());
		dispatch(listSeries());
		dispatch(listCategories());
	}, [dispatch]);

	useEffect(() => {
		setLoading(true);
		setMerged([...series, ...categories]);
		setLoading(false);
	}, [series, categories]);

	useEffect(() => {
		const filtered = merged.filter((el) => el.fmposition);
		const totalsorted = filtered.sort((a, b) => a.fmposition - b.fmposition);
		setSubmenu(totalsorted);
	}, [merged]);

	const onClose = () => {
		const getNav = document.getElementById('nav');

		if (getNav.classList.contains('show')) {
			getNav.classList.remove('show');
			getNav.classList.add('hide');
		}
	};

	return folderList.loading ? (
		<Spinning />
	) : folderList.error ? (
		<div className='error-message'>{folderList.error}</div>
	) : (
		<div id='nav' className='menu-container'>
			<ClickOutside onOutsideClick={() => onClose()}>
				<div className='slide-in-menu product-menu-slide'>
					<Grid container justifyContent='center'>
						<Grid item xs={11}>
							<div className='menu-topbar'>
								<h2>
									Products
									<br />
									Navigation
								</h2>
								<button onClick={onClose}>
									<span>Close Menu</span>
									<i className='fal fa-times'></i>{' '}
								</button>
							</div>
						</Grid>
					</Grid>
					<Grid
						container
						style={{ marginTop: 35, marginBottom: 35 }}
						justifyContent='center'
					>
						<Grid item xs={11}>
							<Grid container spacing={3} alignItems='stretch'>
								<Grid item xs={12} sm={6} md={3}>
									{folders &&
										folders.length > 0 &&
										folders
											.sort((a, b) => a.fmposition - b.fmposition)
											.map(
												(fld) =>
													fld.isLive &&
													fld.isMenu &&
													fld.fmposition >= 1 &&
													fld.fmposition <= 2 && (
														<div key={fld._id} className='items-in-menu'>
															<Link
																onClick={onClose}
																to={`/products/${fld.fmlink}`}
															>
																<span className='menu-folder'>
																	{fld.fmlabel && fld.fmlabel !== ''
																		? fld.fmlabel
																		: fld.fmtitle}
																</span>
															</Link>
															<ul>
																{loading ? (
																	<Spinning />
																) : (
																	submenu.length > 0 &&
																	submenu.map(
																		(sm) =>
																			sm.underFolder === fld.title &&
																			sm.isLive &&
																			sm.isMenu && (
																				<li
																					key={sm._id}
																					className='secondlevel'
																				>
																					<NavLink
																						onClick={onClose}
																						className={({ isActive }) =>
																							isActive ? ' here' : ''
																						}
																						to={`/products/${fld.fmlink}/${sm.fmlink}`}
																					>
																						{sm.fmlabel && sm.fmlable !== ''
																							? sm.fmlabel
																							: sm.fmtitle}
																					</NavLink>
																				</li>
																			)
																	)
																)}
															</ul>
														</div>
													)
											)}
								</Grid>
								<Grid item xs={12} sm={6} md={3}>
									{folders &&
										folders.length > 0 &&
										folders
											.sort((a, b) => a.fmposition - b.fmposition)
											.map(
												(fld) =>
													fld.isLive &&
													fld.isMenu &&
													fld.fmposition >= 3 &&
													fld.fmposition <= 6 && (
														<div key={fld._id} className='items-in-menu'>
															<Link
																onClick={onClose}
																to={`/products/${fld.fmlink}`}
															>
																<span className='menu-folder'>
																	{fld.fmlabel && fld.fmlabel !== ''
																		? fld.fmlabel
																		: fld.fmtitle}
																</span>
															</Link>
															<ul>
																{loading ? (
																	<Spinning />
																) : (
																	submenu.length > 0 &&
																	submenu.map(
																		(sm) =>
																			sm.underFolder === fld.title &&
																			sm.isLive &&
																			sm.isMenu && (
																				<li
																					key={sm._id}
																					className='secondlevel'
																				>
																					<NavLink
																						onClick={onClose}
																						className={({ isActive }) =>
																							isActive ? ' here' : ''
																						}
																						to={`/products/${fld.fmlink}/${sm.fmlink}`}
																					>
																						{sm.fmlabel && sm.fmlable !== ''
																							? sm.fmlabel
																							: sm.fmtitle}
																					</NavLink>
																				</li>
																			)
																	)
																)}
															</ul>
														</div>
													)
											)}
								</Grid>
								<Grid item xs={12} sm={6} md={3}>
									{folders &&
										folders.length > 0 &&
										folders
											.sort((a, b) => a.fmposition - b.fmposition)
											.map(
												(fld) =>
													fld.isLive &&
													fld.isMenu &&
													fld.fmposition >= 7 &&
													fld.fmposition <= 12 && (
														<div
															key={fld._id}
															className='items-in-menu embedded-column'
														>
															<Link
																onClick={onClose}
																to={`/products/${fld.fmlink}`}
															>
																<span className='menu-folder'>
																	{fld.fmlabel && fld.fmlabel !== ''
																		? fld.fmlabel
																		: fld.fmtitle}
																</span>
															</Link>
															{fld.fmposition !== 7 && (
																<ul>
																	{loading ? (
																		<Spinning />
																	) : (
																		submenu.map(
																			(sm) =>
																				sm.underFolder === fld.title &&
																				sm.isLive &&
																				sm.isMenu && (
																					<li
																						key={sm._id}
																						className='secondlevel'
																					>
																						<NavLink
																							onClick={onClose}
																							className={({ isActive }) =>
																								isActive ? ' here' : ''
																							}
																							to={`/products/${fld.fmlink}/${sm.fmlink}`}
																						>
																							{sm.fmlabel && sm.fmlable !== ''
																								? sm.fmlabel
																								: sm.fmtitle}
																						</NavLink>
																					</li>
																				)
																		)
																	)}
																</ul>
															)}
														</div>
													)
											)}
								</Grid>
								<Grid item xs={12} sm={6} md={3}>
									{folders &&
										folders.length > 0 &&
										folders
											.sort((a, b) => a.fmposition - b.fmposition)
											.map(
												(fld) =>
													fld.isLive &&
													fld.isMenu &&
													fld.fmposition >= 13 &&
													fld.fmposition <= 15 && (
														<div key={fld._id} className='items-in-menu'>
															<Link
																onClick={onClose}
																to={`/products/${fld.fmlink}`}
															>
																<span className='menu-folder'>
																	{fld.fmlabel && fld.fmlabel !== ''
																		? fld.fmlabel
																		: fld.fmtitle}
																</span>
															</Link>
															{fld.fmposition !== 7 && (
																<ul>
																	{loading ? (
																		<Spinning />
																	) : (
																		submenu.map(
																			(sm) =>
																				sm.underFolder === fld.title &&
																				sm.isLive &&
																				sm.isMenu && (
																					<li
																						key={sm._id}
																						className='secondlevel'
																					>
																						<NavLink
																							onClick={onClose}
																							className={({ isActive }) =>
																								isActive ? ' here' : ''
																							}
																							to={`/products/${fld.fmlink}/${sm.fmlink}`}
																						>
																							{sm.fmlabel && sm.fmlable !== ''
																								? sm.fmlabel
																								: sm.fmtitle}
																						</NavLink>
																					</li>
																				)
																		)
																	)}
																</ul>
															)}
														</div>
													)
											)}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</ClickOutside>
		</div>
	);
};

export default ProductsMenu;
