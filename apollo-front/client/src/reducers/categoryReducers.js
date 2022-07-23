import {
	CATEGORY_DETAILS_FAIL,
	CATEGORY_DETAILS_REQUEST,
	CATEGORY_DETAILS_SUCCESS,
	CATEGORY_LIST_FAIL,
	CATEGORY_LIST_REQUEST,
	CATEGORY_LIST_SUCCESS,
} from '../constants/categoryConstants';

export const categoryListReducer = (state = { categories: [] }, action) => {
	switch (action.type) {
		case CATEGORY_LIST_REQUEST:
			return { loading: true, categories: [] };

		case CATEGORY_LIST_SUCCESS:
			return { loading: false, categories: action.payload };

		case CATEGORY_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// Get a category my link
export const categoryDetailsReducer = (
	state = { category: { extraboxes: [] } },
	action
) => {
	switch (action.type) {
		case CATEGORY_DETAILS_REQUEST:
			return { loading: true, ...state };

		case CATEGORY_DETAILS_SUCCESS:
			return { loading: false, category: action.payload };

		case CATEGORY_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
