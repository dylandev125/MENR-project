import React, { createRef, useEffect } from 'react';

const ClickOutside = (props) => {
	const wrapperRef = createRef();

	const { children } = props;

	const onKeyUp = (e) => {
		// If the user hits ESC, it's considered a click outside!
		if (e.keyCode === 27) {
			handleClickOutside(e);
		}
	};

	const handleClickOutside = (e) => {
		if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
			props.onOutsideClick();
		}
	};

	useEffect(() => {
		// Add listeners
		document.addEventListener('mousedown', handleClickOutside, false);
		document.addEventListener('touchend', handleClickOutside, false);
		document.addEventListener('keyup', onKeyUp);

		return () => {
			// Remove listeners
			document.removeEventListener('mousedown', handleClickOutside, false);
			document.removeEventListener('touchend', handleClickOutside, false);
			document.removeEventListener('keyup', onKeyUp);
		};
	});

	return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutside;
