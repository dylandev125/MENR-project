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

const supMenu = [
	{
		_id: 0,
		fmlabel: 'ISO Certificate',
		fmposition: 31,
		fmlink: 'http://localhost:5079/uploads/3606US-21-22.pdf',
	},
	{
		_id: 1,
		fmlabel: 'Conflict Minerals',
		fmposition: 34,
		fmlink:
			'http://localhost:5079/uploads/Statement-Conflict-Minerals.pdf',
	},
	{
		_id: 2,
		fmlabel: 'RMA Request Forms',
		fmposition: 37,
		fmlink:
			'http://localhost:5079/uploads/RMA-Request-Form.pdf',
	},
];

const SupportMenu = () => {
	const dispatch = useDispatch();

	const [supportMenu, setSupportMenu] = useState([]);

	const pageList = useSelector((state) => state.pageList);
	const { loading, error, pages } = pageList;

	useEffect(() => {
		dispatch(listPages());
	}, [dispatch]);

	useEffect(() => {
		if (pages.length > 0) {
			const filtered = pages.filter(
				(el) => el.fmposition > 30 && el.fmposition < 40
			);
			const merge = [...supMenu, ...filtered];
			setSupportMenu(merge);
		}
	}, [pages]);

	const onClose = () => {
		const getNavp = document.getElementById('nav-sup');

		if (getNavp.classList.contains('show')) {
			getNavp.classList.remove('show');
			getNavp.classList.add('hide');
		}
	};

	return (
		<div id='nav-sup' className='menu-container sup-container'>
			<ClickOutside onOutsideClick={() => onClose()}>
				<div className='slide-in-menu'>
					<Grid container justifyContent='center'>
						<Grid item xs={11}>
							<div className='menu-topbar'>
								<h2>
									Support
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
								{supportMenu
									.sort((a, b) => a.fmposition - b.fmposition)
									.map((supr) => (
										<div key={supr._id} className='items-in-menu'>
											{supr.fmlink.startsWith('http') ? (
												<a
													href={supr.fmlink}
													className='navigation-item'
													target='_blank'
													onClick={onClose}
													rel='noreferrer'
												>
													<span className='menu-folder'>{supr.fmlabel}</span>
												</a>
											) : (
												<NavLink
													className={({ isActive }) =>
														'navigation-item' + (isActive ? ' nav-active' : '')
													}
													onClick={onClose}
													to={`/${supr.fmlink}`}
												>
													<span className='menu-folder'>{supr.fmlabel}</span>
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

export default SupportMenu;
