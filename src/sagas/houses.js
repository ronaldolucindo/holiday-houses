import { takeLatest, call, fork } from 'redux-saga/effects';
import * as actions from 'actions/houses';
import * as Api from 'api/holiday-houses';

function* searchHouses({payload}) {
  try {
    const result = yield call(Api.searchHouses, payload.term);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
function* watchSearchRequest() {
  yield takeLatest(actions.Types.SEARCH_HOUSES_REQUEST, searchHouses);
}

const HousesSagas = [fork(watchSearchRequest)];

export default HousesSagas;
