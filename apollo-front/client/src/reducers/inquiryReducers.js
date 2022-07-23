import {
    INQUIRY_ADD_ITEM,
    INQUIRY_REMOVE_ITEM,
} from '../constants/inquiryConstants';

export const inquiryReducer = (state = { inquiryItems: [] }, action) => {
    switch (action.type) {
        case INQUIRY_ADD_ITEM:
            const item = action.payload;

            const existItem = state.inquiryItems.find((x) => x.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    inquiryItems: state.inquiryItems.map((x) =>
                        x.id === existItem.id ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    inquiryItems: [...state.inquiryItems, item],
                };
            }

        case INQUIRY_REMOVE_ITEM:
            return {
                ...state,
                inquiryItems: state.inquiryItems.filter(
                    (x) => x.id !== action.payload
                ),
            };

        default:
            return state;
    }
};
