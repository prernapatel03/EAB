import { call, put, takeEvery } from "redux-saga/effects";
import AxiosInstance from "../../Axios/AxiosInstance";
import {
  updateDataFailure,
  updateDataRequest,
  updateDatasuccess,
} from "./ProfileSlice";

function* UpdateDataSaga(action) {
  try {
    console.log("userReqdelete--", action);
    const userRequest = yield call(
      AxiosInstance.patch,
      `/userRequest/${action.payload.id}`,
      action.payload
    );
    yield put(updateDatasuccess(userRequest.data));
  } catch (error) {
    yield put(updateDataFailure(error.message));
  }
}

function* ProfileUpdateSaga() {
  yield takeEvery(updateDataRequest.type, UpdateDataSaga);
}

export default ProfileUpdateSaga;
