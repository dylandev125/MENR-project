import axios from 'axios';
import {
	CATEGORY_LIST_REQUEST,
	CATEGORY_LIST_SUCCESS,
	CATEGORY_LIST_FAIL,
	CATEGORY_DETAILS_REQUEST,
	CATEGORY_DETAILS_SUCCESS,
	CATEGORY_DETAILS_FAIL,
} from '../constants/categoryConstants';

export const listCategories = () => async (dispatch) => {
	try {
		dispatch({ type: CATEGORY_LIST_REQUEST });

		const { data } = await axios.get(
			'http://localhost:5079/api/categories'
		);

		dispatch({
			type: CATEGORY_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CATEGORY_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Get a folder by Ferocious link
export const listCategoryDetails = (fmlink) => async (dispatch) => {
	try {
		dispatch({ type: CATEGORY_DETAILS_REQUEST });

		const { data } = await axios.get(
			`http://localhost:5079/api/categories/${fmlink}`
		);

		dispatch({
			type: CATEGORY_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CATEGORY_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
