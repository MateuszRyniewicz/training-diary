import { createContext, useState } from 'react';
import { trainigs } from '../db/trainigs';

export const TrainigContext = createContext();

export const TrainigContextProvider = ({ children }) => {
	const [trainigsList, setTrainigList] = useState(trainigs);
	const [idElementToDelete, setIdElementToDelete] = useState('');

	const addTrainig = (trainig) => {
		setTrainigList([...trainigsList, trainig]);

		return { success: true, message: 'dodano trening' };
	};

	const deleteTraining = (id) => {
		const result = trainigsList.filter((trainig) => trainig.id !== id);

		setTrainigList(result);
	};

	const editTrainig = (editedTrainig) => {
		const result = trainigsList.map((trainig) => {
			if (trainig.id === editedTrainig.id) {
				return editedTrainig;
			} else {
				return trainig;
			}
		});

		setTrainigList(result);
	};
	return (
		<TrainigContext.Provider
			value={{
				addTrainig,
				trainigsList,
				deleteTraining,
				idElementToDelete,
				setIdElementToDelete,
				editTrainig,
			}}>
			{children}
		</TrainigContext.Provider>
	);
};
