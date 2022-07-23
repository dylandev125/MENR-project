import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import {
	productListReducer,
	productDetailsReducer,
	productFilterReducer,
} from './reducers/productReducers';
import {
	folderListReducer,
	folderDetailsReducer,
} from './reducers/folderReducers';
import {
	categoryListReducer,
	categoryDetailsReducer,
} from './reducers/categoryReducers';
import {
	serieListReducer,
	serieDetailsReducer,
} from './reducers/serieReducers';
import {
	imageDetailsReducer,
	dsDetailsReducer,
	drawingDetailsReducer,
	manualDetailsReducer,
} from './reducers/imageReducers';
import { pageListReducer, pageDetailsReducer } from './reducers/pageReducers';
import {
	blogpostListReducer,
	blogpostDetailsReducer,
} from './reducers/blogpostReducers';
import {
	noticiaListReducer,
	noticiaDetailsReducer,
} from './reducers/noticiaReducers';
import { inquiryReducer } from './reducers/inquiryReducers';

// Define ruder
const reducer = combineReducers({
	pageList: pageListReducer,
	pageDetails: pageDetailsReducer,
	blogpostList: blogpostListReducer,
	blogpostDetails: blogpostDetailsReducer,
	noticiaList: noticiaListReducer,
	noticiaDetails: noticiaDetailsReducer,
	productList: productListReducer,
	productFilteredList: productFilterReducer,
	showProduct: productDetailsReducer,
	folderList: folderListReducer,
	folderDetails: folderDetailsReducer,
	categoryList: categoryListReducer,
	categoryDetails: categoryDetailsReducer,
	serieList: serieListReducer,
	serieDetails: serieDetailsReducer,
	showImage: imageDetailsReducer,
	showDatasheet: dsDetailsReducer,
	showDrawing: drawingDetailsReducer,
	showManual: manualDetailsReducer,
	inquiry: inquiryReducer,
});

const inquiryItemsFromStorage = localStorage.getItem('inquiryItems')
	? JSON.parse(localStorage.getItem('inquiryItems'))
	: [];

const initialState = {
	inquiry: { inquiryItems: inquiryItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
