import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
	map,
	retry,
	switchMap,
	catchError, tap
} from 'rxjs/operators';
import { of } from 'rxjs';
import { homeFailure, homeRequest, homeSuccess } from '../features/home';
import {
	changeId,
	detailsFailure,
	detailsRequest,
	detailsSuccess
} from '../features/details';

export const loadHomeEpic = action$ => action$.pipe(
	ofType(homeRequest().type),
	switchMap(o => ajax.getJSON(process.env.REACT_APP_URL).pipe(
		retry(3),
		map(o => homeSuccess(o)),
		catchError(e => of(homeFailure(e))),
	)),
);

export const changeIdDetailsEpic = action$ => action$.pipe(
	ofType(changeId().type),
	map(o => detailsRequest(o.payload))
)

export const loadDetailsEpic = action$ => action$.pipe(
	ofType(detailsRequest().type),
	switchMap(o => ajax.getJSON(`${process.env.REACT_APP_URL}/${o.payload}`).pipe(
		retry(3),
		map(o => detailsSuccess(o)),
		catchError(e => of(detailsFailure(e)))
	))
)
