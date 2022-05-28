import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
	Screen,
	Space,
	CarrouselContainer,
	AllBooksContainer,
	Header,
} from './styles';
import { Text } from '../../shared/styles';
import screen from '../../utils/constants/dimentions';

import { Carrousel, BookItem, ChangeTheme } from '../../components';

import { getBooks } from '../../hooks/useData';
import { useAppSelector } from '../../hooks/useRedux';

const Home = ({ navigation }) => {
	const user = useAppSelector((state) => state.user);
	const theme = useAppSelector((state) => state.theme.theme);
	const data = getBooks(user.user_id, 'READING');
	const allBooks = getBooks(user.user_id);

	return (
		<Screen>
			<StatusBar />
			<Header>
				<ChangeTheme />
			</Header>
			<ScrollView
				contentContainerStyle={{
					width: screen.width,

					paddingBottom: screen.height * 0.05,
					paddingHorizontal: 20,
				}}
			>
				<Text bold size={18} color={theme.primary}>
					Lendo agora
				</Text>
				<Space />
				{data.status === 200 ? (
					<CarrouselContainer>
						<Carrousel data={data.data.books} />
					</CarrouselContainer>
				) : (
					<Text>{data.message}</Text>
				)}
				<Space />
				<Text bold size={18} color={theme.primary}>
					Todos os meus livros
				</Text>
				<Space />
				<AllBooksContainer>
					{allBooks.data.books.map((book) => (
						<BookItem
							capa={book.capa}
							margin
							onPress={() => navigation.navigate('book', { bookId: book.id })}
						/>
					))}
				</AllBooksContainer>
			</ScrollView>
		</Screen>
	);
};

export default Home;
