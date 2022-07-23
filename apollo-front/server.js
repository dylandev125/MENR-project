import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import path from 'path';
import cors from 'cors';

// Routes
import imageRoutes from './routes/imageRoutes.js';
import productsRoute from './routes/productsRoute.js';

// Declaring express server
const app = express();

app.use(cors());

// File path for production
const __dirname = path.resolve(path.dirname(''));
let filesPath = path.join(__dirname, 'client/build');

// Express settings and middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ extended: false }));

app.use('/api/images', imageRoutes);
app.use('/api/products', productsRoute);

app.use(
	'/',
	expressStaticGzip(filesPath, {
		index: false,
		enableBrotli: true,
		orderPreference: ['br', 'gz'],
	})
);

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = 5080;

app.listen(PORT, () =>
	console.log(`Ferocious Media Node Server started on ${PORT}`)
);
