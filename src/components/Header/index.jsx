import React from 'react';
import { Banner, BookContainer, Title, TitleContainer } from './styles';
import BookItem from '../BookItem';
import { Text } from '../../shared/styles';

const Header = ({ title, image, book_id, author }) => {
	return (
		<Banner>
			<TitleContainer>
				<Title bold size={24} color="#FFF">
					{title}
				</Title>
				<Text size={13} light italic color="#FFF">
					{author}
				</Text>
			</TitleContainer>
			<BookContainer>
				<BookItem capa={image} size="large" />
			</BookContainer>
		</Banner>
	);
};

export default Header;
