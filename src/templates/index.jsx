import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '../hooks/useRedux';

export const Theme = ({ children }) => {
	const theme = useAppSelector((state) => state.theme.theme);
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
