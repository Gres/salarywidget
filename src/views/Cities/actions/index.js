import {LOAD_ITEM, LOAD_SALARY, SET_CITIES_LOADING, SET_ITEM, SET_SALARY} from './actionTypes';

export const loadItem = id => ({
    type: LOAD_ITEM,
    payload: id
});

export const setItem = data => ({
    type: SET_ITEM,
    payload: data
});
export const loadSalary = (loc, title) => ({
    type: LOAD_SALARY,
    payload: {loc, title}
});

export const setSalary = data => ({
    type: SET_SALARY,
    payload: data
});

export const setCityLoading = status => ({
    type: SET_CITIES_LOADING,
    payload: status
});
