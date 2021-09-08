import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Reset } from 'styled-reset';
import { GlobalStyles } from './global-styles';
import { App } from './App';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Reset />
		<GlobalStyles />
		<App />
	</Router>,
	document.getElementById('root')
);
