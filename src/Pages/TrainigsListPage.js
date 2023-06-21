import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { TrainigContext } from '../context/TrainigContext';
import { ConfirmDialogContext } from '../context/ConfirmDialogContext';

import ConfirmDialog from '../components/ConfirmDialog';

import './TrainigsListPage.scss';

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
			<main className='trainigs-list-page-main'>
				<h3 className='trainigs-list-page-main-text'>Your tranings list</h3>
				<div className='trainigs-list-page-contanier'>
					<table cellSpacing={0} className='trainigs-list-page-table'>
						<thead>
							<tr>
								<th className='trainigs-list-page-th'>No.</th>
								<th className='trainigs-list-page-th'>Title</th>
								<th className='trainigs-list-page-th'>Date</th>
								<th className='trainigs-list-page-th'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{trainigsList.map((trainig, i) => (
								<tr key={trainig.id}>
									<td className='trainigs-list-page-td'>{i + 1}</td>
									<td className='trainigs-list-page-td'>{trainig.title}</td>
									<td className='trainigs-list-page-td'>
										{trainig.trainigDate}
									</td>
									<td className='trainigs-list-page-td box-buttons'>
										<button
											className='trainigs-list-page-button'
											onClick={() => navigate(`/trainigs/${trainig.id}`)}>
											show
										</button>
										<button
											className='trainigs-list-page-button'
											onClick={() => navigate(`/trainigs/${trainig.id}/edit`)}>
											edit
										</button>
										<button
											className='trainigs-list-page-button'
											onClick={() => deleteTrainig(trainig.id)}>
											delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</main>
		</>
	);
};

export default TrainigsListPage;
