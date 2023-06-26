import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { homeRequest } from '../features/home';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';


export const Home = () => {
	const {items, error, loading} = useSelector(state => state.home.value)
	const dispatch = useDispatch();
	console.log(items)

	useEffect(() => {
		dispatch(homeRequest());
	}, [dispatch]);

	if (error) return (
		<Button variant="secondary" onClick={() => dispatch(homeRequest())}>
			Повторить попытку
		</Button>
	)

	return (
		<Fragment>
			{!loading ? <ul>
				{items.map(o => (
					<li key={o.id}>
						<Link to={`/details/${o.id}`}>{o.name}</Link>
					</li>
				))}
			</ul> : <Spinner animation="border" variant="primary"/>}
		</Fragment>
	)
}
