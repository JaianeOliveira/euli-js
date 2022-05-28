import React from 'react';

import { Container, Text } from '../../shared/styles';
import { useAppSelector } from '../../hooks/useRedux';
import { getBook } from '../../hooks/useData';

const Book = ({ route }) => {
	const user = useAppSelector((state) => state.user);

	const book = getBook(user.user_id, route.params.bookId);
	return (
		<Container>
			<Text>{JSON.stringify(book)}</Text>
		</Container>
	);
};

export default Book;
