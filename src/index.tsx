import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Reset } from 'styled-reset';
import { GlobalStyles } from './global-styles';
import { App } from './App';

ReactDOM.render(
	<React.StrictMode>
		<Reset />
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
