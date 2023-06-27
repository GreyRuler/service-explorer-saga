import { takeEvery, put, spawn, retry } from 'redux-saga/effects';
import { homeFailure, homeRequest, homeSuccess } from '../features/home';
import { detailsById, listHome } from '../api';
import {
	changeId,
	detailsFailure,
	detailsRequest,
	detailsSuccess
} from '../features/details';

function* handleHomeSara(action) {
	try {
		const retryCount = 3
		const retryDelay = 1000
		const data = yield retry(retryCount, retryDelay, listHome, action.payload)
		yield put(homeSuccess(data))
	} catch (e) {
		yield put(homeFailure(e.message))
	}
}

function* watchHomeSara() {
	yield takeEvery(homeRequest().type, handleHomeSara)
}

function* handleDetailsSara(action) {
	try {
		const retryCount = 3
		const retryDelay = 1000
		const data = yield retry(retryCount, retryDelay, detailsById, action.payload)
		yield put(detailsSuccess(data))
	} catch (e) {
		yield put(detailsFailure(e.message))
	}
}

function* watchDetailsSara() {
	yield takeEvery(detailsRequest().type, handleDetailsSara)
}

function* handleChangeIdSara(action) {
	yield put(detailsRequest(action.payload))
}

function* watchChangeIdSara() {
	yield takeEvery(changeId().type, handleChangeIdSara)
}

export default function* saga() {
	yield spawn(watchHomeSara)
	yield spawn(watchChangeIdSara)
	yield spawn(watchDetailsSara)
}
