import {setLoading} from '../../components/loadingManager/actions';
import * as at from './actionTypes';


const setNavMenuCollapsed = isNavMenuCollapsed => ({
    type: at.SET_NAV_MENU_COLLAPSED,
    payload: isNavMenuCollapsed
});

export {
    setLoading,
    setNavMenuCollapsed
};
