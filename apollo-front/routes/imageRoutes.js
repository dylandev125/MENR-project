import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import axios from 'axios';

// Enviroment
dotenv.config();

const router = express.Router();

// @route       GET api/images/:fmlink
// @description Get files by ID
// @access      Public
router.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		const config = {
			headers: { Authorization: `Bearer ${process.env.DISTEC_TOKEN}` },
		};

		const { data } = await axios.get(
			`https://www.distec.de/rest/products_files/${req.params.id}`,
			config
		);

		if (data) {
			res.json(data);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	})
);

// @route       GET api/images/:fmlink
// @description Get files by ID
// @access      Public
router.get(
	'/news/:id',
	expressAsyncHandler(async (req, res) => {
		const config = {
			headers: { Authorization: `Bearer ${process.env.DISTEC_TOKEN}` },
		};

		const { data } = await axios.get(
			`https://www.distec.de/rest/news_files/${req.params.id}`,
			config
		);

		if (data) {
			res.json(data);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	})
);

export default router;
