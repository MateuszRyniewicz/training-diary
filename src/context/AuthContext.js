import { createContext, useState } from 'react';
import { users } from '../db/users';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [usersList, setUsersList] = useState(users);

	const login = (formLoginValues) => {
	

		const user = usersList.find((user) => user.email === formLoginValues.email);
		if (!user) {
			return { success: false, message: 'nie znaleziono email' };
		}
		if (user && user.password !== formLoginValues.password) {
			return { success: false, message: 'niepoprawne hasło' };
		} else if (user && user.password === formLoginValues.password) {
			setCurrentUser(user);
		
			return { success: true, message: 'zalogowano' };
		}
	};

	const register = (formRegisterValues) => {
		const user = usersList.find(
			(user) => user.email === formRegisterValues.email
		);
		if (user) {
			return { success: false, message: 'użytkownik juz istnieje z tym emial' };
		} else {
			setUsersList([...usersList, user]);

			return { success: true, message: 'dodano nowego użytkownika' };
		}
	};

	const logout = () => {
		setCurrentUser(null);
		
	};

	return (
		<AuthContext.Provider
			value={{
				login,
				logout,
				currentUser,
				setCurrentUser,
				register,
				setUsersList,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
