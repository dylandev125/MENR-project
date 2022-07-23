import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

//Actions
import { showProductDetails } from '../actions/productActions';

// CSS
import './CatsAndProds/products.css';
import './Home/home.css';
import './About/about.css';

// Parts
import ProductTop from './CatsAndProds/ProductTop';
import Spinning from './Extras/Spinning';
import ProductData from './CatsAndProds/ProductData';
import InquiryForm from './CatsAndProds/InquirySection';

const SingleProduct = () => {
	const dispatch = useDispatch();
	const { fmlink } = useParams();
	const url = useLocation();

	const showProduct = useSelector((state) => state.showProduct);
	const { loading, error, product } = showProduct;

	useEffect(() => {
		dispatch(showProductDetails(fmlink));
	}, [dispatch, fmlink]);

	return loading ? (
		<Spinning />
	) : error ? (
		<section>
			<h3>Error Loading Product</h3>
		</section>
	) : (
		<div className='all-body'>
			<ProductTop
				title={product.fmtitle}
				desc={
					product.fmdescription ? product.fmdescription : product.description
				}
				subtitle={product.subtitle}
				imgs={product.images}
				options={product.options}
			/>
			<ProductData product={product} pathname={url.pathname} />
			<InquiryForm />
		</div>
	);
};

export default SingleProduct;
