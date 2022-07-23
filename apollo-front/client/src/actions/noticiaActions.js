import axios from 'axios';
import {
	NOTICIA_DETAILS_FAIL,
	NOTICIA_DETAILS_REQUEST,
	NOTICIA_DETAILS_SUCCESS,
	NOTICIA_LIST_FAIL,
	NOTICIA_LIST_REQUEST,
	NOTICIA_LIST_SUCCESS,
} from '../constants/noticiaConstants';

// Get all noticias
export const listNoticias = () => async (dispatch) => {
	try {
		dispatch({ type: NOTICIA_LIST_REQUEST });

		const { data } = await axios.get(
			'http://localhost:5079/api/noticias'
		);

		dispatch({
			type: NOTICIA_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NOTICIA_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Get a noticia by Ferocious link
export const listNoticiaDetails = (fmlink) => async (dispatch) => {
	try {
		dispatch({ type: NOTICIA_DETAILS_REQUEST });

		const { data } = await axios.get(
			`http://localhost:5079/api/noticias/${fmlink}`
		);

		dispatch({
			type: NOTICIA_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NOTICIA_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
