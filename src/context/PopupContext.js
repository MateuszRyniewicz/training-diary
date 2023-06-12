import { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupContextProvider = ({ children }) => {
	const [message, setMessage] = useState('');
	const [isOpenPopup, setIsOpenPopup] = useState(false);

	return (
		<PopupContext.Provider
			value={{ message, setMessage, isOpenPopup, setIsOpenPopup }}>
			{children}
		</PopupContext.Provider>
	);
};
