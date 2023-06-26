import './App.css'
import './assets/css/google-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Details } from './components/Details';

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Home/>} />
			<Route path={'/details/:id'} element={<Details/>} loader={({ params }) => {
				console.log(params.teamId); // "hotspur"
			}}/>
		</Routes>
	);
}

export default App;
