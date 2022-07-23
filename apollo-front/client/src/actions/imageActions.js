import axios from 'axios';
import {
    IMAGE_DETAILS_REQUEST,
    IMAGE_DETAILS_SUCCESS,
    IMAGE_DETAILS_FAIL,
    DATASHEET_DETAILS_REQUEST,
    DATASHEET_DETAILS_SUCCESS,
    DATASHEET_DETAILS_FAIL,
    DRAWING_DETAILS_REQUEST,
    DRAWING_DETAILS_SUCCESS,
    DRAWING_DETAILS_FAIL,
    MANUAL_DETAILS_REQUEST,
    MANUAL_DETAILS_SUCCESS,
    MANUAL_DETAILS_FAIL,
} from '../constants/imageConstants';

// Get an image from Distec
export const showImageDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: IMAGE_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/images/${id}`);

        dispatch({
            type: IMAGE_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: IMAGE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Get an file from Distec
export const showDatasheetDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: DATASHEET_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/images/${id}`);

        dispatch({
            type: DATASHEET_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DATASHEET_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Get an file from Distec
export const showDrawingDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: DRAWING_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/images/${id}`);

        dispatch({
            type: DRAWING_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DRAWING_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Get an file from Distec
export const showManualDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: MANUAL_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/images/${id}`);

        dispatch({
            type: MANUAL_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MANUAL_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
