import {
	PAGE_DETAILS_FAIL,
	PAGE_DETAILS_REQUEST,
	PAGE_DETAILS_SUCCESS,
	PAGE_LIST_FAIL,
	PAGE_LIST_REQUEST,
	PAGE_LIST_SUCCESS,
} from '../constants/pageConstants';

// Get all Pages
export const pageListReducer = (state = { pages: [] }, action) => {
	switch (action.type) {
		case PAGE_LIST_REQUEST:
			return { loading: true, pages: [] };

		case PAGE_LIST_SUCCESS:
			return { loading: false, pages: action.payload };

		case PAGE_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// Get a page my link
export const pageDetailsReducer = (
	state = { page: { extraboxes: [] } },
	action
) => {
	switch (action.type) {
		case PAGE_DETAILS_REQUEST:
			return { loading: true, ...state };

		case PAGE_DETAILS_SUCCESS:
			return { loading: false, page: action.payload };

		case PAGE_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
