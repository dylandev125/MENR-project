import axios from 'axios';
import {
    INQUIRY_ADD_ITEM,
    INQUIRY_REMOVE_ITEM,
} from '../constants/inquiryConstants';

export const addToInquiry = (fmlink, pathname) => async (
    dispatch,
    getState
) => {
    const { data } = await axios.get(
        `http://localhost:5079/api/products/single/${fmlink}`
    );

    dispatch({
        type: INQUIRY_ADD_ITEM,
        payload: {
            id: data._id,
            manufacturer: data.manufacturer.title,
            title: data.fmtitle,
            image: data.images[0] ? data.images[0] : { id: 0 },
            link: data.fmlink,
            pathname: pathname,
        },
    });

    localStorage.setItem(
        'inquiryItems',
        JSON.stringify(getState().inquiry.inquiryItems)
    );
};

export const removeFromInq = (id) => (dispatch, getState) => {
    dispatch({
        type: INQUIRY_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem(
        'inquiryItems',
        JSON.stringify(getState().inquiry.inquiryItems)
    );
};
