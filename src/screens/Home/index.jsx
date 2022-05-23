import React from 'react';

import { Container, Text, Book } from '../../shared/styles';

import Button from '../../components/common/Button';

const Home = ({ navigation }) => {
	return (
		<Container>
			<Text bold size={18}>
				Home
			</Text>
			<Book />
			<Button>Ir</Button>
		</Container>
	);
};

export default Home;
