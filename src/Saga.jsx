import {call, put, takeEvery} from "redux-saga/effects";
import {
  getCatsSuccess,
  getCatsFailure,
  getMoreCatsSuccess,
  getMoreCatsFailure,
} from "./Setstate";

function* Fetchingfn() {
  try {
    const response = yield call(fetch, "https://api.thecatapi.com/v1/breeds");
    const data = yield response.json();
    const formattedData = data.slice(0, 10).map((cat) => ({
      ...cat,
      imageUrl: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
    }));
    yield put(getCatsSuccess(formattedData));
  } catch (error) {
    yield put(getCatsFailure(error.message));
  }
}

function* FetchMoreCats() {
  try {
    const response = yield call(fetch, "https://api.thecatapi.com/v1/breeds");
    const data = yield response.json();
    const formattedData = data.slice(10, 20).map((cat) => ({
      ...cat,
      imageUrl: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
    }));
    yield put(getMoreCatsSuccess(formattedData));
  } catch (error) {
    yield put(getMoreCatsFailure(error.message));
  }
}

function* ApiFetch() {
  yield takeEvery("cat/getCatsFetch", Fetchingfn);
  yield takeEvery("cat/getMoreCatsFetch", FetchMoreCats);
}

export default ApiFetch;
