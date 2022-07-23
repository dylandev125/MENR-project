import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import axios from 'axios';

// Enviroment
dotenv.config();

const router = express.Router();

// @route       GET api/products/:id
// @description Get files by ID
// @access      Public
router.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		// const responseser = await axios.get(
		// 	`http://localhost:5079/api/series/${req.params.id}`
		// );

		if (req.params.id !== 0) {
			const productsres = await axios.get(
				`http://localhost:5079/api/products/cat/${req.params.id}`
			);

			if (productsres && productsres.length > 0) {
				res.json(productsres);
			} else {
				res.status(404);
				throw new Error('There is no products with that series or category');
			}
		}

		// if (responseser) {
		// 	var finalresponse = [];
		// 	productsres.data.length > 0 &&
		// 		productsres.data.forEach((el) => {
		// 			el.category.map(
		// 				(e) => e.title === responseser.data.title && finalresponse.push(el)
		// 			);
		// 		});

		// 	if (finalresponse.length > 0) {
		// 		res.json(finalresponse);
		// 	} else {
		// 		res.status(404);
		// 		throw new Error('There is no products with that series or category');
		// 	}
		// } else {
		// 	var finalresponse = [];
		// 	productsres.data.length > 0 &&
		// 		productsres.data.forEach((el) => {
		// 			el.category.map(
		// 				(e) => e.title === responseser.data.title && finalresponse.push(el)
		// 			);
		// 		});

		// 	if (finalresponse.length > 0) {
		// 		res.json(finalresponse);
		// 	} else {
		// 		res.status(404);
		// 		throw new Error('There is no products with that series or category');
		// 	}
		// }
	})
);

export default router;
