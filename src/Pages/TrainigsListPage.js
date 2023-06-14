import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { TrainigContext } from '../context/TrainigContext';
import { ConfirmDialogContext } from '../context/ConfirmDialogContext';

import ConfirmDialog from '../components/ConfirmDialog';

const TrainigsListPage = () => {
	const { trainigsList, setIdElementToDelete } = useContext(TrainigContext);
	const { isOpen, setIsOpen } = useContext(ConfirmDialogContext);

	const navigate = useNavigate();

	const deleteTrainig = (id) => {
		setIdElementToDelete(id);
		setIsOpen(true);
	};

	return (
		<>
			{isOpen && <ConfirmDialog />}
			<div>
				<h3>Your tranings list</h3>
				<div className='contanier'>
					<table>
						<thead>
							<tr>
								<th>No.</th>
								<th>Title</th>
								<th>Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{trainigsList.map((trainig, i) => (
								<tr key={trainig.id}>
									<td>{i + 1}</td>
									<td>{trainig.title}</td>
									<td>{trainig.date}</td>
									<td>
										<button onClick={() => navigate(`/trainigs/${trainig.id}`)}>
											show
										</button>
										<button
											onClick={() => navigate(`/trainigs/${trainig.id}/edit`)}>
											edit
										</button>
										<button onClick={() => deleteTrainig(trainig.id)}>
											delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default TrainigsListPage;
