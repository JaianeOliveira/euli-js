import { Image } from 'react-native';
import React from 'react';
import { Book } from '../../shared/styles';

const BookItem = ({ capa, margin, onPress = () => {} }) => {
	return (
		<Book image onPress={onPress} margin>
			<Image source={{ uri: capa }} style={{ width: 93, height: 142 }} />
		</Book>
	);
};

export default BookItem;
