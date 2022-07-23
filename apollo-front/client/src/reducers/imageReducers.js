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

export const imageDetailsReducer = (state = { image: {} }, action) => {
    switch (action.type) {
        case IMAGE_DETAILS_REQUEST:
            return { loading: true, ...state };

        case IMAGE_DETAILS_SUCCESS:
            return { loading: false, image: action.payload };

        case IMAGE_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const dsDetailsReducer = (state = { datasheet: {} }, action) => {
    switch (action.type) {
        case DATASHEET_DETAILS_REQUEST:
            return { loading: true, ...state };

        case DATASHEET_DETAILS_SUCCESS:
            return { loading: false, datasheet: action.payload };

        case DATASHEET_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const drawingDetailsReducer = (state = { drawing: {} }, action) => {
    switch (action.type) {
        case DRAWING_DETAILS_REQUEST:
            return { loading: true, ...state };

        case DRAWING_DETAILS_SUCCESS:
            return { loading: false, drawing: action.payload };

        case DRAWING_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const manualDetailsReducer = (state = { manual: {} }, action) => {
    switch (action.type) {
        case MANUAL_DETAILS_REQUEST:
            return { loading: true, ...state };

        case MANUAL_DETAILS_SUCCESS:
            return { loading: false, manual: action.payload };

        case MANUAL_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
