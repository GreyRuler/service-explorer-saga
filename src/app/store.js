import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/index'
import detailsReducer from '../features/details/index'
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		home: homeReducer,
		details: detailsReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga)

export default store
