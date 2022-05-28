import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from '../../shared/styles';
import { useAppSelector } from '../../hooks/useRedux';
import { getBook } from '../../hooks/useData';
import { BookMark, Header } from '../../components';
import { Screen } from './styles';
import screen from '../../utils/constants/dimentions';
import { StatusBar } from 'expo-status-bar';
import { FAB } from 'react-native-paper';

const Book = ({ route }) => {
	const user = useAppSelector((state) => state.user);
	const theme = useAppSelector((state) => state.theme.theme);

	const book = getBook(user.user_id, route.params.bookId);
	return (
		<Screen>
			<StatusBar />
			<Header title={book.title} image={book.capa} author={book.author} />
			<ScrollView
				contentContainerStyle={{
					width: screen.width,
					paddingTop: screen.height * 0.1,
					paddingBottom: screen.height * 0.05,
					paddingHorizontal: 20,
				}}
			>
				{book.bookmarks.length ? (
					book.bookmarks.map((mark) => {
						return (
							<BookMark
								position={mark.position}
								excerpt={mark.excerpt}
								comment={mark.comment}
								emotion={mark.emotion}
								emoji={mark.emoji}
							/>
						);
					})
				) : (
					<Text light>Você ainda não tem nenhuma marcação neste livro...</Text>
				)}
			</ScrollView>
			<FAB
				style={{
					position: 'absolute',
					margin: 16,
					right: screen.width * 0.03,
					bottom: screen.height * 0.02,
					backgroundColor: theme.secondary,
				}}
				icon="plus"
				onPress={() => console.log('Adicionar nota')}
			/>
		</Screen>
	);
};

export default Book;
