import { call, put, takeEvery } from "redux-saga/effects";
import { getDataFailure, getDataRequest, getDataSuccess } from "./ProfileSlice";
import AxiosInstance from "../../Axios/AxiosInstance";

function* fetchDataSaga() {
  try {
    const userRequest = yield call(AxiosInstance.get, "/userRequest");
    yield put(getDataSuccess(userRequest.data));
  } catch (error) {
    yield put(getDataFailure(error.message));
  }
}

function* ProfileSaga() {
  yield takeEvery(getDataRequest.type, fetchDataSaga);
}

export default ProfileSaga;
