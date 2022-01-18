import {LOAD_ITEMS, SET_CITIES_LOADING, SET_ITEMS} from './actions/actionTypes';

const initialState = {
    fetching: true,
    list: {},
    count: 0
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_ITEMS:
            return {
                ...state,
                fetching: true
            };
        case SET_ITEMS:
            return {
                ...state,
                fetching: false,
                ...payload
            };
        case SET_CITIES_LOADING:
            return {
                ...state,
                fetching: payload
            };
        default:
            return state;
    }
};
