import {call, put, takeLatest} from 'redux-saga/effects';
import apiMethods from '../../api/apiMethods';
import {LOAD_ITEM, LOAD_SALARY} from './actions/actionTypes';
import {setCityLoading, setItem, setSalary} from './actions';
import axios from "axios";

function* loadSalaryHandler(props = {}, {payload: {loc, title}}) {
    try {
        const {data: detailsalaries} = yield call(axios.get, `https://eightball.internal.teleport.org/api/salary/slug:${loc.toLowerCase()}/${title}/`);
        yield put(setSalary({detailsalaries}));
    } catch (error) {

    } finally {
        yield put(setCityLoading(false));
    }
}

function* loadItemHandler(props = {}, {payload: id}) {
    try {
        const {data: common} = yield call(apiMethods.get, `urban_areas/slug:${id.toLowerCase()}/`);
        const {data: images} = yield call(apiMethods.get, `urban_areas/slug:${id.toLowerCase()}/images/`);
        const {data: salaries} = yield call(apiMethods.get, `urban_areas/slug:${id.toLowerCase()}/salaries/`);
        const {data: detailsalaries} = yield call(axios.get, `https://eightball.internal.teleport.org/api/salary/slug:${id.toLowerCase()}/SOFTWARE-ENGINEER/`);
        yield put(setItem({...common, ...images, ...salaries, detailsalaries}));
    } catch (error) {

    } finally {
        yield put(setCityLoading(false));
    }
}

export default function* citySagaWatcher(props) {

    yield takeLatest(LOAD_ITEM, loadItemHandler, props);
    yield takeLatest(LOAD_SALARY, loadSalaryHandler, props);
}
