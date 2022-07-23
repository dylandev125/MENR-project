import {
	NOTICIA_DETAILS_FAIL,
	NOTICIA_DETAILS_REQUEST,
	NOTICIA_DETAILS_SUCCESS,
	NOTICIA_LIST_FAIL,
	NOTICIA_LIST_REQUEST,
	NOTICIA_LIST_SUCCESS,
} from '../constants/noticiaConstants';

// Get all Noticias
export const noticiaListReducer = (state = { noticias: [] }, action) => {
	switch (action.type) {
		case NOTICIA_LIST_REQUEST:
			return { loading: true, noticias: [] };

		case NOTICIA_LIST_SUCCESS:
			return { loading: false, noticias: action.payload };

		case NOTICIA_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// Get a noticia my link
export const noticiaDetailsReducer = (
	state = { noticia: { extraboxes: [] } },
	action
) => {
	switch (action.type) {
		case NOTICIA_DETAILS_REQUEST:
			return { loading: true, ...state };

		case NOTICIA_DETAILS_SUCCESS:
			return { loading: false, noticia: action.payload };

		case NOTICIA_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
