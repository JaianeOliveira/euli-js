import { Image } from 'react-native';
import React from 'react';

import { Book as BookContainer } from '../../shared/styles';

const Book = ({ image, small = false }) => {
	return (
		<BookContainer small={small} image={image}>
			{image ? (
				<Image
					source={{
						uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
					}}
				/>
			) : null}
		</BookContainer>
	);
};

export default Book;
