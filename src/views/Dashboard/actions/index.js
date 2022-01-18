import {LOAD_ITEMS, SET_CITIES_LOADING, SET_ITEMS} from './actionTypes';

export const loadItems = id => ({
    type: LOAD_ITEMS,
    payload: id
});

export const setItems = data => ({
    type: SET_ITEMS,
    payload: data
});


export const setCitiesLoading = status => ({
    type: SET_CITIES_LOADING,
    payload: status
});
