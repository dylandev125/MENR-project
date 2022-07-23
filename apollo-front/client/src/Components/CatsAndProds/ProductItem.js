import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Parts
import Spinning from '../Extras/Spinning';

// Action
import { addToInquiry, removeFromInq } from '../../actions/inquiryActions';

const ProductItem = ({ product, pathname }) => {
	const dispatch = useDispatch();

	const [chosen, setChosen] = useState(false);
	const [timer, setTimer] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (timer) {
			const getMessage = document.getElementById('msg');
			getMessage.classList.add('show-message');

			setTimeout(() => {
				if (timer && getMessage.classList.contains('show-message')) {
					getMessage.classList.remove('show-message');
				}
			}, 7600);
		}
	}, [timer]);

	const addInquiry = (e, fmlink) => {
		e.preventDefault();
		let thepath = pathname + '/' + fmlink;

		setLoading(true);
		setChosen(true);
		setTimer(true);
		dispatch(addToInquiry(fmlink, thepath));
	};

	const removeFromInquiry = (e, id) => {
		e.preventDefault();
		setLoading(true);
		setChosen(false);
		dispatch(removeFromInq(id));
	};

	useEffect(() => {
		const setStorage = JSON.parse(localStorage.getItem('inquiryItems'));

		if (product._id && setStorage && setStorage.length > 0) {
			setStorage.map((iis) => iis.id === product._id && setChosen(true));
		}

		setLoading(false);
	}, [chosen, product]);

		function removeHTML(str){
    	var tmp = document.createElement("DIV");
    	tmp.innerHTML = str;
    	return tmp.textContent || tmp.innerText || "";
		}

	return (
		<Grid
			container
			className='prod-item-container'
			justifyContent='center'
			alignItems='center'
		>
			<Grid item xs={12} sm={12} md={9}>
				<div className='prod-title'>
					<Link to={`/products/view/${product.fmlink}`}>
						<h5>{product.fmtitle ? product.fmtitle : product.title}</h5>
					</Link>
					<small>{product.manufacturer && product.manufacturer.title}</small>
				</div>
				<Grid container>
					<Grid item xs={12}>
						<div className='prod-detailes-preview'>
						{ product.category.map((item) => {
							if (item.title == 'Sensors' || item.title == 'Interface'){
								return (
									<div>{removeHTML(product.description.substring(0,200))}...</div>
								)
							}})}
							{product.sizeDiagonal && (
								<div className='detail-wrap'>
									<span>Screen Diagonal</span>
									<p>{product.sizeDiagonal.title.replace(/^0+/, '')}</p>
								</div>
							)}
							{product.resolutionMax && (
								<div className='detail-wrap'>
									<span>Resolution</span>
									<p>{product.resolutionMax.title.replace(/^0+/, '')}</p>
								</div>
							)}
							{product.technology && (
								<div className='detail-wrap'>
									<span>Tech</span>
									<p>{product.technology.title}</p>
								</div>
							)}
							{product.brightness && (
								<div className='detail-wrap'>
									<span>Brightness</span>
									<p>{product.brightness.title.replace(/^0+/, '')}</p>
								</div>
							)}
							{product.perspective && (
								<div className='detail-wrap'>
									<span>Perspective</span>
									<p>{product.perspective.title}</p>
								</div>
							)}
						</div>
					</Grid>
					<Grid item xs={12}>
						<div className='prod-detailes-preview'>
							{product.cpu && product.cpu.length > 0 && (
								<div className='detail-wrap detail-one-line'>
									<span>CPUs options</span>
									<div className='one-title'>
										{product.cpu.map((el) => (
											<div key={el.id} className='detail-wrap'>
												<p>{el.title}</p>
											</div>
										))}
									</div>
								</div>
							)}
							{product.chipset && product.chipset.length > 0 && (
								<div className='detail-wrap detail-one-line'>
									<span>Chipset</span>
									<div className='one-title'>
										{product.chipset.map((el) => (
											<div key={el.id} className='detail-wrap'>
												<p>{el.title}</p>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={12} md={3}>
				<div className='prod-actions'>
					<Link
						to={`/products/view/${product.fmlink}`}
						className='prod-actions-click'
					>
						<i className='fas fa-eye'></i>
						<br />
						<p>View Details</p>
					</Link>
					{loading ? (
						<Spinning />
					) : !chosen ? (
						<button
							onClick={(e) => addInquiry(e, product.fmlink)}
							className='prod-actions-click'
						>
							<i className='fas fa-save'></i>
							<br />
							<p>Save for Enquiry</p>
						</button>
					) : (
						<button
							onClick={(e) => removeFromInquiry(e, product._id)}
							className='prod-actions-click'
						>
							<i className='fal fa-trash-alt'></i>
							<br />
							<p>Remove from List</p>
						</button>
					)}
				</div>
			</Grid>
		</Grid>
	);
};

export default ProductItem;
