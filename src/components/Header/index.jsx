import { View, Text } from 'react-native';
import React from 'react';
import { Banner, BookContainer, Title } from './styles';
import BookItem from '../BookItem';
const Header = ({ title, image, book_id }) => {
	return (
		<Banner>
			<Title bold size={18}>
				{title}
			</Title>
			<BookContainer>
				<BookItem capa={image} size="large" />
			</BookContainer>
		</Banner>
	);
};

export default Header;
