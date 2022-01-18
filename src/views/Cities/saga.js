import { call, put, takeLatest } from 'redux-saga/effects';
import apiMethods from '../../api/apiMethods';
import { LOAD_ITEM } from './actions/actionTypes';
import { setItem, setCitiesLoading } from './actions';

function* loadItemHandler(props = { }, { payload: id }) {
  try {
    if (id) {
      const { data } = yield call(apiMethods.get, `cities/${id}`);

      yield put(setItem(data));
    } else {
      yield put(
        setItem({
          active: true,
          trackPto: true,
          immediatePtoExpense: false
        })
      );
    }
  } catch (error) {

  } finally {
    yield put(setCitiesLoading(false));
  }
}

export default function* citySagaWatcher(props) {

  yield takeLatest(LOAD_ITEM, loadItemHandler, props);
}
