import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme';
import userSlice from './user';

const store = configureStore({
	reducer: {
		theme: themeSlice,
		user: userSlice,
	},
});

export default store;
