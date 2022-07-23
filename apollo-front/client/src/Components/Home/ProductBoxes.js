import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import FirstBox from '../../Images/tft-display-modules-home.jpg';
import SecondBox from '../../Images/optical-bonding-home.jpg';
import ThirdBox from '../../Images/touch-screen-displays.jpg';
import FourthBox from '../../Images/embedded-systems-home.jpg';
import FiftBox from '../../Images/lcd-controllers-home.jpg';
import SixthBox from '../../Images/led-drivers.jpg';
import SeventhBox from '../../Images/industrial-monitors.jpg';
import EigthBox from '../../Images/power-supplies-home.jpg';

const ProductBoxes = () => {
	return (
		<div className='home-cta-boxes'>
			<section>
				<Grid
					container
					spacing={3}
					justifyContent='space-evenly'
					alignItems='stretch'
				>
					<Grid item xs={12} sm={12} md={4}>
						<div
							className='cta-main-boxes'
							style={{ backgroundImage: `url(${FirstBox})` }}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>TFT Display Module</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										Since 1993 we offer LCDs and LCD system solutions. We are
										always up to date with the latest technology and offering
										the best products to our customers.
									</p>
									<Link
										to='/products/tft-display-module-products'
										className='apollo-button'
									>
										Learn More
									</Link>
									<Link
										to='/products/tft-display-module-products'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>

							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<div
							className='cta-main-boxes'
							style={{ backgroundImage: `url(${SecondBox})` }}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>Optical Bonding</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										Our proprietary VACUBOND© technology offers perfect optical
										results, competitive prices and short delivery times.
									</p>
									<Link to='/optical-bonding' className='apollo-button'>
										Learn More
									</Link>
									<Link
										to='/optical-bonding'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>

							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<div
							className='cta-main-boxes'
							style={{ backgroundImage: `url(${ThirdBox})` }}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>Touch Screens</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										Our touch integration competence center supports your design
										team with years of experience with custom touch screen and
										tuning for water, gloves and other extreme environments.
									</p>
									<Link
										to='/products/touchscreens-products'
										className='apollo-button'
									>
										Learn More
									</Link>
									<Link
										to='/products/touchscreens-products'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>

							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={3}
					justifyContent='space-evenly'
					alignItems='stretch'
				>
					<Grid item xs={12} sm={6}>
						<div
							className='cta-main-boxes'
							style={{ backgroundImage: `url(${FourthBox})` }}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>Embedded Systems</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										Our product portfolio comprises standard products,
										customer-specific solutions from embedded Single-Board
										Computer to industrial Motherboards, Embedded and Panel PCs
										to IoT or industrial PCs.
									</p>
									<Link
										to='/products/embedded-systems-products'
										className='apollo-button'
									>
										Learn More
									</Link>
									<Link
										to='/products/embedded-systems-products'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>
							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6}>
						<div
							className='cta-main-boxes'
							style={{
								backgroundImage: `url(${FiftBox})`,
							}}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>LCD Controllers</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										In house developed Prisma and Artiste Controller boards. Our
										TFT controllers and media-players offer long life for
										industrial applications
									</p>
									<Link
										to='/products/tft-controller-products'
										className='apollo-button'
									>
										Learn More
									</Link>
									<Link
										to='/products/tft-controller-products'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>
							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={3}
					justifyContent='space-evenly'
					alignItems='stretch'
				>
					<Grid item xs={12} sm={12} md={4}>
						<div
							className='cta-main-boxes'
							style={{ backgroundImage: `url(${SixthBox})` }}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>LED Drivers</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										The SmartLED controllers are devices to drive LED backlights
										of TFT displays. These controllers can be configured by
										using the SmartLEDRover Windows software.
									</p>
									<Link
										to='/products/tft-controller-products/led-converter'
										className='apollo-button'
									>
										Learn More
									</Link>
									<Link
										to='/products/tft-controller-products/led-converter'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>
							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<div
							className='cta-main-boxes'
							style={{ backgroundImage: `url(${SeventhBox})` }}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>Industrial Monitors</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										Our current product portfolio includes monitors from 7" to
										85,6" (17.78 to 217.43cm) screen diagonal with a variety of
										integrated controllers, from video cards to Raspberry Pi
										based IoT solutions and PCs of different performance levels.
										All devices are also suitable for integration and can be
										supplemented with accessories such as touch, protective
										glass or mounting frame.
									</p>
									<Link
										to='/products/industrial-monitors-products'
										className='apollo-button'
									>
										Learn More
									</Link>
									<Link
										to='/products/industrial-monitors-products'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>
							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<div
							className='cta-main-boxes'
							style={{ backgroundImage: `url(${EigthBox})` }}
						>
							<div className='cta-box-content'>
								<div className='cta-box-title'>
									<h3>Power Supplies and Accessories</h3>
								</div>
								<div className='cta-box-body'>
									<p>
										We provide you with selected power supplies (12V-24V) for
										TFT display solutions.
										<br />
										All power supplies have been carefully tested to guarantee
										an optimum performance of the TFT display
									</p>
									<Link
										to='/products/tft-accessories-products/power-supplies'
										className='apollo-button'
									>
										Learn More
									</Link>
									<Link
										to='/products/tft-accessories-products/power-supplies'
										className='hidden-action-mobile'
									></Link>
								</div>
							</div>
							<div className='cta-box-overlay-hover'></div>
							<div className='cta-box-overlay'></div>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default ProductBoxes;
