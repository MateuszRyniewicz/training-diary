import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TrainigContext } from '../context/TrainigContext';

import './TrainigPage.scss';

const TrainigPage = () => {
	const { id } = useParams();

	const { trainigsList } = useContext(TrainigContext);

	const singleTrainig = trainigsList.find((trainig) => trainig.id === id);

	return (
		<main>
			<div className='training-page'>
				<p className='trainig-page-title'>{singleTrainig.title}</p>
				<p className='trainig-page-date'>{singleTrainig.date}</p>
				<ul className='trainig-page-list'>
					{singleTrainig.excercises.map((excercise, i) => (
						<li className='trainig-paga-list-details' key={i}>
							{excercise.exName} - {excercise.reps} - {excercise.weights} kg
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default TrainigPage;
