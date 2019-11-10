import { takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from 'actions/houses';
import * as Api from 'api/holiday-houses';

function* getHouses({ payload }) {
  try {
    yield put(actions.getHousesLoading());
    const result = yield call(Api.getHouses, payload.term);
    yield put(
      actions.getHousesSuccess({
        houses: result.data
      })
    );
  } catch (err) {
    yield put(actions.getHousesError());
    console.error(err);
  }
}
function* watchGetHousesRequest() {
  yield takeLatest(actions.Types.GET_HOUSES_REQUEST, getHouses);
}

const HousesSagas = [fork(watchGetHousesRequest)];

export default HousesSagas;
