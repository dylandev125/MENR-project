import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import Spinning from '../Extras/Spinning';

const FolderMoreBoxesBonding = ({ boxes }) => {
	const [finalBoxes, setFinalBoxes] = useState([]);
	const [loading, setLoading] = useState(true);
	const sortBoxes = boxes && boxes.sort((a, b) => a.eposition - b.eposition);
	const restofBoxes = sortBoxes && sortBoxes.slice(3, 20);

	useEffect(() => {
		setFinalBoxes([]);

		restofBoxes.forEach((el) => {
			if (el.eimg && el.img !== 'uploads/big-placeholder.jpg') {
				let image = new Image();
				image.src = `http://localhost:5079/${el.eimg}`;
				image.onload = () => {
					setFinalBoxes((finalBoxes) => [
						...finalBoxes,
						{
							_id: el._id,
							eposition: el.eposition,
							etitle: el.etitle,
							econtent: el.econtent,
							src: image.src,
							width: image.width,
							height: image.height,
						},
					]);
				};
			} else {
				setFinalBoxes((finalBoxes) => [
					...finalBoxes,
					{
						_id: el._id,
						eposition: el.eposition,
						etitle: el.etitle,
						econtent: el.econtent,
					},
				]);
			}
		});

		// eslint-disable-next-line
	}, [boxes]);

	useEffect(() => {
		if (finalBoxes.length > 0 && finalBoxes.length === restofBoxes.length) {
			finalBoxes.sort((a, b) => a.eposition - b.eposition);
			setLoading(false);
		}
	}, [finalBoxes, restofBoxes]);

	return loading && finalBoxes.length === 0 ? (
		<Spinning />
	) : (
		<Fragment>
			<div className='about-top last-boxes bonding-boxes'>
				<section>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={11} md={5}>
							<div className='content-boxed'>
								{finalBoxes[0] &&
									finalBoxes[0].src &&
									finalBoxes[0].src !==
										'http://localhost:5079/uploads/big-placeholder.jpg' && (
										<div className='image-container'>
											<img
												src={finalBoxes[0].src}
												alt={finalBoxes[0].etitle}
												width={finalBoxes[0].width}
												height={finalBoxes[0].height}
											/>
										</div>
									)}
							</div>
						</Grid>
						<Grid item xs={12} sm={11} md={7}>
							<div
								className='nl-intro-container bonding-box-item'
								style={{ marginTop: 70 }}
							>
								<h4>{finalBoxes[0] && finalBoxes[0].etitle}</h4>
								<div
									className='boxes-bonding-content'
									dangerouslySetInnerHTML={{
										__html: finalBoxes[0] && finalBoxes[0].econtent,
									}}
								></div>
							</div>
						</Grid>
					</Grid>
				</section>
			</div>
			<div>
				<section>
					<Grid
						container
						spacing={4}
						justifyContent='center'
						alignItems='stretch'
					>
						<Grid item xs={12} sm={11} md={9}>
							<div className='content-boxed'>
								{finalBoxes[1] &&
									finalBoxes[1].src &&
									finalBoxes[1].src !==
										'http://localhost:5079/uploads/big-placeholder.jpg' && (
										<div className='image-container'>
											<img
												src={finalBoxes[1].src}
												alt={finalBoxes[1].etitle}
												width={finalBoxes[1].width}
												height={finalBoxes[1].height}
												style={{ maxWidth: `${finalBoxes[1].width}px` }}
											/>
										</div>
									)}
								<h4>{finalBoxes[1] && finalBoxes[1].etitle}</h4>
								<div
									className='boxes-bonding-content'
									dangerouslySetInnerHTML={{
										__html: finalBoxes[1] && finalBoxes[1].econtent,
									}}
								></div>
							</div>
						</Grid>
					</Grid>
				</section>
			</div>
			<div className='about-top last-boxes bonding-boxes'>
				<section>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={11} md={6}>
							<div className='content-boxed'>
								{finalBoxes[2] &&
									finalBoxes[2].src &&
									finalBoxes[2].src !==
										'http://localhost:5079/uploads/big-placeholder.jpg' && (
										<div className='image-container'>
											<img
												src={finalBoxes[2].src}
												alt={finalBoxes[2].etitle}
												width={finalBoxes[2].width}
												height={finalBoxes[2].height}
											/>
										</div>
									)}

								<div
									className='nl-intro-container bonding-box-item'
									style={{ marginTop: 70 }}
								>
									<h4>{finalBoxes[2] && finalBoxes[2].etitle}</h4>
									<div
										className='boxes-bonding-content'
										dangerouslySetInnerHTML={{
											__html: finalBoxes[2] && finalBoxes[2].econtent,
										}}
									></div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={11} md={6}>
							<div className='content-boxed'>
								{finalBoxes[3] &&
									finalBoxes[3].src &&
									finalBoxes[3].src !==
										'http://localhost:5079/uploads/big-placeholder.jpg' && (
										<div className='image-container'>
											<img
												src={finalBoxes[3].src}
												alt={finalBoxes[3].etitle}
												width={finalBoxes[3].width}
												height={finalBoxes[3].height}
											/>
										</div>
									)}

								<div
									className='nl-intro-container bonding-box-item'
									style={{ marginTop: 70 }}
								>
									<h4>{finalBoxes[3] && finalBoxes[3].etitle}</h4>
									<div
										className='boxes-bonding-content'
										dangerouslySetInnerHTML={{
											__html: finalBoxes[3] && finalBoxes[3].econtent,
										}}
									></div>
								</div>
							</div>
						</Grid>
					</Grid>
				</section>
			</div>
		</Fragment>
	);
};

export default FolderMoreBoxesBonding;
