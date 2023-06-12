import React, { useContext } from 'react';
import { ConfirmDialogContext } from '../context/ConfirmDialogContext';
import { TrainigContext } from '../context/TrainigContext';

const ConfirmDialog = () => {
	const { setIsOpen } = useContext(ConfirmDialogContext);
	const { deleteTraining, idElementToDelete } = useContext(TrainigContext);

	const handleConfirmDelete = () => {

		deleteTraining(idElementToDelete);
		setIsOpen(false);
	};

	const handleCancel = () => {
		setIsOpen(false);
	};
	return (
		<div>
			<h3>are you sure to delete?</h3>
			<button onClick={handleConfirmDelete}>yes</button>
			<button onClick={handleCancel}>no</button>
		</div>
	);
};

export default ConfirmDialog;
