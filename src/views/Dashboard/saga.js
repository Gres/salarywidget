import {call, put, takeLatest} from 'redux-saga/effects';
import apiMethods from '../../api/apiMethods';
import {LOAD_ITEMS} from './actions/actionTypes';
import {setCitiesLoading, setItems} from './actions';

function* loadAllCities(props = {}, {payload: id}) {
    try {
        const {data: {_links, count}} = yield call(apiMethods.get, `urban_areas/`);
        yield put(setItems({list: _links, count}));
    } catch (error) {

    } finally {
        yield put(setCitiesLoading(false));
    }
}

export default function* citySagaWatcher(props) {

    yield takeLatest(LOAD_ITEMS, loadAllCities, props);
}
