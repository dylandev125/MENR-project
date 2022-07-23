import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Spinning from '../Extras/Spinning';

const FolderMoreBoxes = ({ boxes }) => {
	const [finalBoxes, setFinalBoxes] = useState([]);
	const [spinning, setSpinning] = useState(true);
	const restofBoxes = boxes && boxes.slice(2, 20);

	useEffect(() => {
		const ConstructInformation = () => {
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
			setSpinning(false);
		};

		return ConstructInformation();

		// eslint-disable-next-line
	}, [boxes]);

	return spinning ? (
		<Spinning />
	) : (
		<div className='about-top last-boxes'>
			<section>
				<Grid
					container
					spacing={4}
					justifyContent='center'
					alignItems='stretch'
				>
					{finalBoxes.length > 0 &&
						finalBoxes
							.sort((a, b) => a.eposition - b.eposition)
							.map((bx) => (
								<Grid
									key={bx._id}
									item
									xs={12}
									sm={11}
									md={6}
									className='final-boxes'
								>
									{bx.src && (
										<div className='image-container'>
											<img
												src={bx.src}
												alt={bx.etitle}
												width={bx.width}
												height={bx.height}
											/>
										</div>
									)}
									<div className='content-boxed'>
										<h4>{bx.etitle}</h4>

										<div
											dangerouslySetInnerHTML={{ __html: bx.econtent }}
										></div>
									</div>
								</Grid>
							))}
				</Grid>
			</section>
		</div>
	);
};

export default FolderMoreBoxes;
