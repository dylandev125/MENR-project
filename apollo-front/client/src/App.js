import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MyRoutes from './Routes';

// Styles
import './App.css';
import TopBar from './Components/Layout/TopBar';
import Footer from './Components/Layout/Footer';
import Spinning from './Components/Extras/Spinning';
import Newsletters from './Components/Extras/Newsletters';
import Message from './Components/Extras/Message';
import ParticlesBg from './Components/Extras/ParticlesBg';
import ScrollToTop from './Components/Extras/ScrollToTop';

const App = () => {
	return (
		<Suspense fallback={<Spinning />}>
			<Router>
				<ScrollToTop />
				<Message />
				<TopBar />
				<MyRoutes />
				<Newsletters />
				<Footer />
				<ParticlesBg />
			</Router>
		</Suspense>
	);
};

export default App;
