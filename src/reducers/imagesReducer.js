import { FETCH_IMAGES_TYPES, FETCH_IMAGES_TYPES_ERROR, FETCH_IMAGES_TYPES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    images: [],
    error: false,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_IMAGES_TYPES:
            return {
                ...state,
                loading: true
            };
        case FETCH_IMAGES_TYPES_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case FETCH_IMAGES_TYPES_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                images: action.payload
            };
        default:
            return state;
    }
};
