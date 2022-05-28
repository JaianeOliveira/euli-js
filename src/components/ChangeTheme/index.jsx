import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { themeActions } from '../../context/theme';
import { Switch } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
const ChangeTheme = () => {
	const dispatch = useAppDispatch();
	const { theme, selectedTheme } = useAppSelector((state) => state.theme);
	const [lightTheme, setLightTheme] = useState(
		selectedTheme === 'LIGHT' ? true : false
	);

	const onChangeTheme = () => {
		setLightTheme((prevState) => !prevState);
		dispatch(themeActions.setTheme(lightTheme ? 'DARK' : 'LIGHT'));
	};
	return (
		<>
			<Switch
				value={lightTheme}
				onValueChange={onChangeTheme}
				style={{ marginRight: 3 }}
				color={theme.text}
			/>
			{lightTheme ? (
				<Feather name="sun" color={theme.text} size={18} />
			) : (
				<Feather name="moon" color={theme.text} size={18} />
			)}
		</>
	);
};

export default ChangeTheme;
