import axios from 'axios';
import {
    SERIE_LIST_REQUEST,
    SERIE_LIST_SUCCESS,
    SERIE_LIST_FAIL,
    SERIE_DETAILS_REQUEST,
    SERIE_DETAILS_SUCCESS,
    SERIE_DETAILS_FAIL,
} from '../constants/serieConstants';

// Get all series
export const listSeries = () => async (dispatch) => {
    try {
        dispatch({ type: SERIE_LIST_REQUEST });

        const { data } = await axios.get(
            'http://localhost:5079/api/series'
        );

        dispatch({
            type: SERIE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SERIE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Get a folder by Ferocious link
export const listSerieDetails = (fmlink) => async (dispatch) => {
    try {
        dispatch({ type: SERIE_DETAILS_REQUEST });

        const { data } = await axios.get(
            `http://localhost:5079/api/series/${fmlink}`
        );

        dispatch({
            type: SERIE_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SERIE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
