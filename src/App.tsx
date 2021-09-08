import { Switch, Route } from 'react-router-dom';
import { Home } from './pages';

export const App = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</>
	);
};
