import {
	BLOGPOST_DETAILS_FAIL,
	BLOGPOST_DETAILS_REQUEST,
	BLOGPOST_DETAILS_SUCCESS,
	BLOGPOST_LIST_FAIL,
	BLOGPOST_LIST_REQUEST,
	BLOGPOST_LIST_SUCCESS,
} from '../constants/blogpostConstants';

// Get all Blogposts
export const blogpostListReducer = (state = { blogposts: [] }, action) => {
	switch (action.type) {
		case BLOGPOST_LIST_REQUEST:
			return { loading: true, blogposts: [] };

		case BLOGPOST_LIST_SUCCESS:
			return { loading: false, blogposts: action.payload };

		case BLOGPOST_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// Get a blogpost my link
export const blogpostDetailsReducer = (
	state = { blogpost: { extraboxes: [] } },
	action
) => {
	switch (action.type) {
		case BLOGPOST_DETAILS_REQUEST:
			return { loading: true, ...state };

		case BLOGPOST_DETAILS_SUCCESS:
			return { loading: false, blogpost: action.payload };

		case BLOGPOST_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
