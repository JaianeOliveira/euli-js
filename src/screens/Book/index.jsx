import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from '../../shared/styles';
import { useAppSelector } from '../../hooks/useRedux';
import { getBook } from '../../hooks/useData';
import { BookMark, Header } from '../../components';
import { Screen } from './styles';
import screen from '../../utils/constants/dimentions';
import { StatusBar } from 'expo-status-bar';

const Book = ({ route }) => {
	const user = useAppSelector((state) => state.user);

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
		</Screen>
	);
};

export default Book;
