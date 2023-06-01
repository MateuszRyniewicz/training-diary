import { createContext, useState } from 'react';
import { users } from '../db/users';
// import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [usersList, setUsersList] = useState(users);

	// const navigate = useNavigate();

	const login = (formLoginValues) => {
		console.log('userList login', usersList);

		const user = usersList.find((user) => user.email === formLoginValues.email);
		if (!user) {
			return { success: false, message: 'nie znaleziono email' };
		}
		if (user && user.password !== formLoginValues.password) {
			return { success: false, message: 'niepoprawne hasło' };
		} else if (user && user.password === formLoginValues.password) {
			setCurrentUser(user);
			// navigate('/dashboard');
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
		// navigate('/');
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
