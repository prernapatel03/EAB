import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import ProfileSlice from "../Profile/ProfileSlice";
import CardManagementSlice from "../CreditCard/CardManagementSlice";
import CardManagementSaga from "../CreditCard/CardManagementSaga";
import { all } from "redux-saga/effects";
import ProfileSaga from "../Profile/ProfileSaga";
import ProfileAddSaga from "../Profile/ProfileAddSaga";
import ProfileUpdateSaga from "../Profile/ProfileUpdateSaga";

const sagaMiddleware = createSagaMiddleware();

//  saga...........

export function* SagasCombine() {
  yield all([
    CardManagementSaga(),
    ProfileSaga(),
    ProfileAddSaga(),
    ProfileUpdateSaga(),
  ]);
}

// rootreducer ..........

const rootReducer = combineReducers({
  ProfileSlice: ProfileSlice,
  CardManagementSlice: CardManagementSlice,
});

// reduxStore .........

const ReduxStore = configureStore({
  reducer: rootReducer,
  middleware: (m) => m({ thunk: false }).concat(sagaMiddleware),
});

// run saga .........

sagaMiddleware.run(SagasCombine);
export default ReduxStore;
