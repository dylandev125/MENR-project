import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	}, [location.pathname]);

	// renders nothing, since nothing is needed
	return null;
};

export default ScrollToTop;
