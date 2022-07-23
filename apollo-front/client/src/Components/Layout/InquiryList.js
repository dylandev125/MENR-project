import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const InquiryList = () => {
    const inquiry = useSelector((state) => state.inquiry);
    const { inquiryItems } = inquiry;

    return (
        inquiryItems &&
        inquiryItems.length > 0 && (
            <Link to='/inquiry-list'>
                <div id='inquiry-widget' className='inquiry-widget'>
                    <div className='iw-container'>
                        <p>
                            You have <span>{inquiryItems.length}</span> item(s)
                            on your inquiry list
                        </p>
                    </div>
                </div>
            </Link>
        )
    );
};

export default InquiryList;
