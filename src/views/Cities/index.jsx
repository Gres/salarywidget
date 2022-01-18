import React, { useContext } from 'react';
import { connect, useSelector } from 'react-redux';
import { injectReducer, injectSaga } from 'redux-sagas-injector';
import {loadItem } from './actions';
import citiesSaga from './saga';
import cities from './reducer';

const Cities = ({ onLoad, onFormSave, onPersonDelete }) => {
  injectReducer('cities', cities);
  injectSaga(`citiesSaga`, citiesSaga);
  // const fetching = useSelector(state => state.cities.fetching);
  // const item = useSelector(state => state.cities.item);

  return (<>div</>

  );
};

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(loadItem(id))
});

export default connect(null, mapDispatchToProps)(Cities);
