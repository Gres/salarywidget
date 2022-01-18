import { LOAD_ITEM, SET_ITEM, SET_CITIES_LOADING } from './actions/actionTypes';

const initialState = {
  fetching: true,
  item: {

  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ITEM:
      return {
        ...state,
        fetching: true
      };
    case SET_ITEM:
      return {
        ...state,
        fetching: false,
        item: payload
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
