import React from 'react';

import { Container, Text } from '../../shared/styles';
import { useAppSelector } from '../../hooks/useRedux';
import { getBook } from '../../hooks/useData';
import { Header } from '../../components';
import { Screen } from './styles';

const Book = ({ route }) => {
	const user = useAppSelector((state) => state.user);

	const book = getBook(user.user_id, route.params.bookId);
	return (
		<Screen>
			<Header title={book.title} image={book.capa} />
		</Screen>
	);
};

export default Book;
