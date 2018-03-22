import axios from 'axios';
import { objectToQueryString } from '../util';
import { FETCH_IMAGES_TYPES, FETCH_IMAGES_TYPES_ERROR, FETCH_IMAGES_TYPES_SUCCESS } from './types';

const data = {
    method: 'flickr.photos.search',
    api_key: 'dc3e0ee29c9c2153cdd80f478d643fb8',
    tags: 'apples',
    per_page: 25,
    format: 'json',
    nojsoncallback: 1
};

export const getImagesByTag = (types) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_IMAGES_TYPES });
        try {
            const result = await axios.get('https://api.flickr.com/services/rest/?' + objectToQueryString(data));
            dispatch({ type: FETCH_IMAGES_TYPES_SUCCESS, payload: result.data.photos.photo });
        } catch (error) {
            dispatch({ type: FETCH_IMAGES_TYPES_ERROR, payload: error });
        }
    };
};
