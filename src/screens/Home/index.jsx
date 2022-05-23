import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Screen, Space } from './styles';
import { Text, Book } from '../../shared/styles';

import { Button, Carrousel } from '../../components';

import { getBooks } from '../../hooks/useData';
import { useAppSelector } from '../../hooks/useRedux';

const Home = () => {
	const user = useAppSelector((state) => state.user);
	const theme = useAppSelector((state) => state.theme.theme);
	const data = getBooks(user.user_id, 'READING');
	return (
		<Screen>
			<StatusBar />
			<Text bold size={18} color={theme.primary}>
				Lendo agora
			</Text>
			<Space />
			{data.status === 200 ? (
				<Carrousel data={data.data.books} />
			) : (
				<Text>{data.message}</Text>
			)}
			<Space />
			<Text bold size={18} color={theme.primary}>
				Todos os meus livros
			</Text>
		</Screen>
	);
};

export default Home;
