import {
    FOLDER_DETAILS_FAIL,
    FOLDER_DETAILS_REQUEST,
    FOLDER_DETAILS_SUCCESS,
    FOLDER_LIST_FAIL,
    FOLDER_LIST_REQUEST,
    FOLDER_LIST_SUCCESS,
} from '../constants/folderConstants';

// Get all Folders
export const folderListReducer = (state = { folders: [] }, action) => {
    switch (action.type) {
        case FOLDER_LIST_REQUEST:
            return { loading: true, folders: [] };

        case FOLDER_LIST_SUCCESS:
            return { loading: false, folders: action.payload };

        case FOLDER_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

// Get a folder my link
export const folderDetailsReducer = (
    state = { folder: { extraboxes: [] } },
    action
) => {
    switch (action.type) {
        case FOLDER_DETAILS_REQUEST:
            return { loading: true, ...state };

        case FOLDER_DETAILS_SUCCESS:
            return { loading: false, folder: action.payload };

        case FOLDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
