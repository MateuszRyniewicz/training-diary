import React, { useContext } from 'react';
import { ConfirmDialogContext } from '../context/ConfirmDialogContext';
import { TrainigContext } from '../context/TrainigContext';

import './ConfirmDialog.scss';

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
		<div className='confirm-dialog'>
			<h3 className='confirm-dialog-main-text'>are you sure to delete?</h3>
			<div className='confirm-dialog-box-buttons'>
				<button className='confirm-dialog-button' onClick={handleConfirmDelete}>
					yes
				</button>
				<button className='confirm-dialog-button' onClick={handleCancel}>
					no
				</button>
			</div>
		</div>
	);
};

export default ConfirmDialog;
