import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../utils/themes';

const initialState = {
	selectedTheme: 'DARK',
	theme: darkTheme,
};

const setTheme = (state, action) => {
	state.selectedTheme = action.payload;
	if (action.payload === 'LIGHT') state.theme = lightTheme;
	if (action.payload === 'DARK') state.theme = darkTheme;
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme,
	},
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
