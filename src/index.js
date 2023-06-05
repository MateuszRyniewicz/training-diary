import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { TrainigContextProvider } from './context/TrainigContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<TrainigContextProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</TrainigContextProvider>
	</React.StrictMode>
);
