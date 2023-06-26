import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { changeIdDetailsEpic, loadDetailsEpic, loadHomeEpic } from '../epics';
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/index'
import detailsReducer from '../features/details/index'

const epic = combineEpics(
	loadHomeEpic,
	changeIdDetailsEpic,
	loadDetailsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
	reducer: {
		home: homeReducer,
		details: detailsReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(epicMiddleware)
})

epicMiddleware.run(epic);

export default store
