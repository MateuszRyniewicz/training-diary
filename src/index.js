import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { TrainigContextProvider } from './context/TrainigContext';
import { ConfirmDialogContextProvider } from './context/ConfirmDialogContext';
import { PopupContextProvider } from './context/PopupContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PopupContextProvider>
			<ConfirmDialogContextProvider>
				<TrainigContextProvider>
					<AuthContextProvider>
						<App />
					</AuthContextProvider>
				</TrainigContextProvider>
			</ConfirmDialogContextProvider>
		</PopupContextProvider>
	</React.StrictMode>
);
