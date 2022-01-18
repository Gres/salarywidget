import {  SET_NAV_MENU_COLLAPSED } from './rootActions/actionTypes';

const initialState = {
  isNavMenuCollapsed: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {


    case SET_NAV_MENU_COLLAPSED:
      return {
        ...state,
        isNavMenuCollapsed: payload
      };

    default:
      return state;
  }
};
