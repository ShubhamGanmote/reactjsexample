import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact={true}>
						<Redirect to='/home' />
					</Route>
					<Route path='/home' exact={true}>
						<Layout />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
