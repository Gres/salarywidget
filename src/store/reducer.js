import {connectRouter} from 'connected-react-router';

import loadingManagerReducer from '../components/loadingManager/reducer';
import rootReducer from './rootReducer';

const createRootReducer = history => ({
    router: connectRouter(history),
    root: rootReducer,
    loadingManager: loadingManagerReducer
});

export default createRootReducer;
