import { createContext, useState } from 'react';

export const TrainigContext = createContext();

export const TrainigContextProvider = ({ children }) => {
	const [trainigsList, setTrainigList] = useState([]);

	const addTrainig = (trainig) => {
		setTrainigList([...trainigsList, trainig]);

		return { success: true, message: 'dodano trening' };
	};

	return (
		<TrainigContext.Provider value={{ addTrainig }}>
			{children}
		</TrainigContext.Provider>
	);
};
