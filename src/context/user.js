import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user_id: 'd57e8b84-e8b9-4bba-b8be-ff3c85c38b30',
	first_name: null,
	last_name: null,
	email: null,
};

const setUser = (state, action) => {
	state.user_id = action.payload.user_id;
	state.first_name = action.payload.first_name;
	state.last_name = action.payload.last_name;
	state.email = action.payload.email;
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser,
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
