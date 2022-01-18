import { SET_LOADING } from './actionTypes';

export const setLoading = status => ({
  type: SET_LOADING,
  payload: status
});
