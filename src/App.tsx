import { Switch, Route } from 'react-router-dom';
import { Home } from './pages';

export const App = () => {
	return (
		<>
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
		</>
	);
};
