import {LOAD_ITEM, SET_CITIES_LOADING, SET_ITEM} from './actionTypes';

export const loadItem = id => ({
  type: LOAD_ITEM,
  payload: id
});

export const setItem = data => ({
  type: SET_ITEM,
  payload: data
});


export const setCitiesLoading = status => ({
  type: SET_CITIES_LOADING,
  payload: status
});
