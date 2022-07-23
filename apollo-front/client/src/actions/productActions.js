import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  FILTEREDPROD_LIST_REQUEST,
  FILTEREDPROD_LIST_SUCCESS,
  FILTEREDPROD_LIST_FAIL,
} from "../constants/productConstants";

// Get all products
export const listProducts = (ids) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.post(
      `http://localhost:5079/api/products/ser/`,
      ids
    );
    console.log(data);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get products by filtering
export const filteredProducts = (filters) => async (dispatch) => {
  try {
    dispatch({ type: FILTEREDPROD_LIST_REQUEST });
    console.log(filters);
    const { data } = await axios.post(
      `http://localhost:5079/api/products/filter/`,
      filters
    );
    console.log(data);

    dispatch({
      type: FILTEREDPROD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FILTEREDPROD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get a product by Ferocious link
export const showProductDetails = (fmlink) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5079/api/products/single/${fmlink}`
    );

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
