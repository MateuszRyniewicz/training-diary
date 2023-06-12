import React, { useContext } from 'react';
import { PopupContext } from '../context/PopupContext';
const PopupMessage = () => {
	const { message, setIsOpenPopup } = useContext(PopupContext);

	return (
		<div>
			<h3>{message}</h3>
			<button onClick={() => setIsOpenPopup(false)}>OK</button>
		</div>
	);
};

export default PopupMessage;
