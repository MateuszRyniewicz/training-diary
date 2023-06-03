import React, { useState } from 'react';

import './NewTrainigPage.scss';

const NewTrainigPage = () => {
	const [inputFields, setInputFields] = useState([]);

	const changeInputValue = (e, i) => {
		const inputData = [...inputFields];
		inputData[i] = e.target.value;
		setInputFields(inputData);
		// setInputFields([...(inputFields[i] = e.target.value)]);
	};

	const deleteInput = (i) => {
		const deleteInput = [...inputFields];
		deleteInput.splice(i, 1);
		setInputFields(deleteInput);
	};

	console.log(inputFields);

	return (
		<main>
			<form onSubmit={(e) => e.preventDefault()} className='new-training-form'>
				<button
					className='new-training-button'
					onClick={() => setInputFields([...inputFields, []])}>
					Add
				</button>
				{inputFields.map((newInput, i) => {
					return (
						<div className='new-training-box-input'>
							<input
								className='input'
								value={newInput}
								onChange={(e) => changeInputValue(e, i)}
							/>
							<button
								type='button'
								className='new-training-button-close'
								onClick={() => deleteInput(i)}>
								X
							</button>
						</div>
					);
				})}
			</form>
		</main>
	);
};

export default NewTrainigPage;
