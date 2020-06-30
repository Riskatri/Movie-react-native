import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from "./constants";
import { put, takeEvery, get, call } from "redux-saga/effects";
// import getPeople from './api'

function* fetchData(action) {
  try {
    // const data = yield call(get, 'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf')
    const data = yield call(() => {
      return fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf"
      ).then((res) => res.json());
    });
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData);
}

export default dataSaga;
