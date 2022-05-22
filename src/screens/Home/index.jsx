import React from 'react';

import { Container, Text, Button } from '../../shared/styles';

const Home = ({ navigation }) => {
	return (
		<Container>
			<Text>Home</Text>
			<Button onPress={() => navigation.navigate('login')}>
				<Text>Back</Text>
			</Button>
		</Container>
	);
};

export default Home;
