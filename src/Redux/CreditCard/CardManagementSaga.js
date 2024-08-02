import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "./CardManagementSlice";
import AxiosInstance from "../../Axios/AxiosInstance";

function* fetchDataSaga() {
  try {
    const users = yield call(AxiosInstance.get, "/users");
    yield put(fetchDataSuccess(users.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* CardManagementSaga() {
  yield takeEvery(fetchDataRequest.type, fetchDataSaga);
}

export default CardManagementSaga;
