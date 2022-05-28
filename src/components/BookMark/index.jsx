import { View, Text } from 'react-native';
import React from 'react';

import { Container } from './styles';
import { useAppSelector } from '../../hooks/useRedux';

const BookMark = () => {
	const activeTheme = useAppSelector((state) => state.theme.selectedTheme);
	return (
		<Container activeTheme={activeTheme}>
			<Text>BookMark</Text>
		</Container>
	);
};

export default BookMark;
