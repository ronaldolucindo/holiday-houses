import { all } from 'redux-saga/effects';
import HousesSagas from './houses';

export default function* rootSaga() {
  yield all([...HousesSagas]);
}
