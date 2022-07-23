import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Spinning from '../Extras/Spinning';

const ImageNews = ({ imgid }) => {
	const [thisImage, setThisImage] = useState({
		url: '',
		width: '',
		height: '',
		atl: '',
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getImage = async () => {
			const image = await axios.get(`/api/images/news/${imgid}`);
			const dataURI = image.data.data.data;
			const imageInfo = new Image();

			var byteString = atob(dataURI);
			var ab = new ArrayBuffer(byteString.length);
			var ia = new Uint8Array(ab);

			for (var i = 0; i < byteString.length; i++) {
				ia[i] = byteString.charCodeAt(i);
			}

			const finalImage = window.URL.createObjectURL(
				new Blob([ab], { type: 'image/jpeg' })
			);

			imageInfo.src = finalImage;
			imageInfo.onload = () => {
				setThisImage({
					url: finalImage,
					width: imageInfo.width,
					height: imageInfo.height,
					alt: image.data.data.filename,
				});
				setLoading(false);
			};
		};

		getImage();

		return () => {
			setLoading(true);
			setThisImage({
				url: '',
				width: '',
				height: '',
				atl: '',
			});
		};

		// eslint-disable-next-line
	}, [imgid]);

	return loading ? (
		<Spinning />
	) : (
		<img
			src={thisImage.url}
			width={thisImage.width}
			height={thisImage.height}
			alt='Placeholder'
		/>
	);
};

export default ImageNews;
