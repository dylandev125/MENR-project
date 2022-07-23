import axios from 'axios';
import {
	BLOGPOST_DETAILS_FAIL,
	BLOGPOST_DETAILS_REQUEST,
	BLOGPOST_DETAILS_SUCCESS,
	BLOGPOST_LIST_FAIL,
	BLOGPOST_LIST_REQUEST,
	BLOGPOST_LIST_SUCCESS,
} from '../constants/blogpostConstants';

// Get all blogposts
export const listBlogposts = () => async (dispatch) => {
	try {
		dispatch({ type: BLOGPOST_LIST_REQUEST });

		const { data } = await axios.get(
			'http://localhost:5079/api/blogposts'
		);

		dispatch({
			type: BLOGPOST_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BLOGPOST_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Get a blogpost by Ferocious link
export const listBlogpostDetails = (fmlink) => async (dispatch) => {
	try {
		dispatch({ type: BLOGPOST_DETAILS_REQUEST });

		const { data } = await axios.get(
			`http://localhost:5079/api/blogposts/${fmlink}`
		);

		dispatch({
			type: BLOGPOST_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BLOGPOST_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
