import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Text } from '../../shared/styles';
import { useAppSelector } from '../../hooks/useRedux';
import { getBook } from '../../hooks/useData';
import { BookMark, Header } from '../../components';
import { Screen } from './styles';
import screen from '../../utils/constants/dimentions';

const Book = ({ route }) => {
	const user = useAppSelector((state) => state.user);

	const book = getBook(user.user_id, route.params.bookId);
	return (
		<Screen>
			<Header title={book.title} image={book.capa} />
			<ScrollView
				contentContainerStyle={{
					width: screen.width,
					paddingTop: screen.height * 0.1,
					paddingBottom: screen.height * 0.05,
					paddingHorizontal: 20,
				}}
			>
				{book.bookmarks.map((mark) => {
					return (
						<BookMark
							position={mark.position}
							excerpt={mark.excerpt}
							comment={mark.comment}
							emotion={mark.emotion}
							emoji={mark.emoji}
						/>
					);
				})}
			</ScrollView>
		</Screen>
	);
};

export default Book;
