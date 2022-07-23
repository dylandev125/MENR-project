import axios from 'axios';
import {
	PAGE_DETAILS_FAIL,
	PAGE_DETAILS_REQUEST,
	PAGE_DETAILS_SUCCESS,
	PAGE_LIST_FAIL,
	PAGE_LIST_REQUEST,
	PAGE_LIST_SUCCESS,
} from '../constants/pageConstants';

// Get all pages
export const listPages = () => async (dispatch) => {
	try {
		dispatch({ type: PAGE_LIST_REQUEST });

		const { data } = await axios.get(
			'http://localhost:5079/api/pages'
		);

		dispatch({
			type: PAGE_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PAGE_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Get a page by Ferocious link
export const listPageDetails = (fmlink) => async (dispatch) => {
	try {
		dispatch({ type: PAGE_DETAILS_REQUEST });

		const { data } = await axios.get(
			`http://localhost:5079/api/pages/${fmlink}`
		);

		dispatch({
			type: PAGE_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PAGE_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
