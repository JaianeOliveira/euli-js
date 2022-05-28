import { Image } from 'react-native';
import React from 'react';
import { Book } from '../../shared/styles';

const BookItem = ({ capa, margin, onPress = () => {}, size = 'normal' }) => {
	const width = () => {
		if (size === 'small') {
			return 85;
		} else if (size === 'large') {
			return 105;
		} else {
			return 94;
		}
	};

	const height = () => {
		if (size === 'small') {
			return 112;
		} else if (size === 'large') {
			return 160;
		} else {
			return 142;
		}
	};

	const imageWidth = width();
	const imageHeight = height();
	return (
		<Book image onPress={onPress} margin size={size}>
			<Image
				source={{ uri: capa }}
				style={{ width: imageWidth, height: imageHeight }}
			/>
		</Book>
	);
};

export default BookItem;
