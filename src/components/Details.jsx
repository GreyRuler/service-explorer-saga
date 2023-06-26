import { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeId, detailsRequest } from '../features/details';
import { Button, Spinner } from 'react-bootstrap';
import { homeRequest } from '../features/home';

export const Details = () => {
	const { id } = useParams();
	const {details, loading, error} = useSelector(state => state.details.value)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changeId(id))
	}, [dispatch, id]);

	if (error) return (
		<Button variant="secondary" onClick={() => dispatch(detailsRequest())}>
			Повторить попытку
		</Button>
	)

	return (
		<Fragment>
			{!loading ? <div>
				<span>{details.name}</span>
				<span>{details.price}</span>
				<span>{details.content}</span>
			</div> : <Spinner animation="border" variant="primary" />}
		</Fragment>
	)
}
