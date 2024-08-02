import { call, put, takeEvery } from "redux-saga/effects";
import AxiosInstance from "../../Axios/AxiosInstance";
import {
  postDataFailure,
  postDataRequest,
  postDatasuccess,
} from "./ProfileSlice";

function* AddDataSaga(action) {
  try {
    console.log("userReqpost--", action);
    const userRequest = yield call(
      AxiosInstance.post,
      "/userRequest",
      action.payload
    );
    yield put(postDatasuccess(userRequest.data));
  } catch (error) {
    yield put(postDataFailure(error.message));
  }
}

function* ProfileAddSaga() {
  yield takeEvery(postDataRequest.type, AddDataSaga);
}

export default ProfileAddSaga;
