import axios from 'axios';
import {
    FOLDER_DETAILS_FAIL,
    FOLDER_DETAILS_REQUEST,
    FOLDER_DETAILS_SUCCESS,
    FOLDER_LIST_FAIL,
    FOLDER_LIST_REQUEST,
    FOLDER_LIST_SUCCESS,
} from '../constants/folderConstants';

// Get all folders
export const listFolders = () => async (dispatch) => {
    try {
        dispatch({ type: FOLDER_LIST_REQUEST });

        const { data } = await axios.get(
            'http://localhost:5079/api/folders'
        );

        dispatch({
            type: FOLDER_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FOLDER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Get a folder by Ferocious link
export const listFolderDetails = (fmlink) => async (dispatch) => {
    try {
        dispatch({ type: FOLDER_DETAILS_REQUEST });

        const { data } = await axios.get(
            `http://localhost:5079/api/folders/${fmlink}`
        );

        dispatch({
            type: FOLDER_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FOLDER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
