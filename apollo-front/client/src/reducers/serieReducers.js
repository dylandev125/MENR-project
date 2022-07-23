import {
    SERIE_DETAILS_FAIL,
    SERIE_DETAILS_REQUEST,
    SERIE_DETAILS_SUCCESS,
    SERIE_LIST_FAIL,
    SERIE_LIST_REQUEST,
    SERIE_LIST_SUCCESS,
} from '../constants/serieConstants';

// Get all Series
export const serieListReducer = (state = { series: [] }, action) => {
    switch (action.type) {
        case SERIE_LIST_REQUEST:
            return { loading: true, series: [] };

        case SERIE_LIST_SUCCESS:
            return { loading: false, series: action.payload };

        case SERIE_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

// Get a serie my link
export const serieDetailsReducer = (
    state = { serie: { extraboxes: [] } },
    action
) => {
    switch (action.type) {
        case SERIE_DETAILS_REQUEST:
            return { loading: true, ...state };

        case SERIE_DETAILS_SUCCESS:
            return { loading: false, serie: action.payload };

        case SERIE_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
