import React from 'react';

import Header from './components/Header';

import Footer from './components/Footer';
import Register from './Pages/RegisterPage';
import Login from './Pages/LoginPage';
import Home from './Pages/HomePage';

import './Global.scss';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NewTrainigPage from './Pages/NewTrainigPage';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},

			{
				path: '/trainigs/new',
				element: <NewTrainigPage />,
			},
		],
	},
]);

const App = () => {
	return (
		<div className='app'>
			<div className='container'>
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
