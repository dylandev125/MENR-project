import { Link } from 'react-router-dom';
import React from 'react';

// Pages
import ScrollToTop from './ScrollToTop';

const NotFound = () => {
    return (
        <div className='page-body not-found'>
            <ScrollToTop />
            <section>
                <h1>
                    <i className='fas fa-exclamation-triangle'></i> 404
                </h1>
                <p style={{ marginBottom: 50 }}>
                    {' '}
                    The page you are trying to access doesn't exist.
                </p>
                <div className='button-read-more'>
                    <Link className='apollo-button' to='/'>
                        Back to Home
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
