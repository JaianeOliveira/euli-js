import React from 'react';

import { Container, Text, Button } from '../../shared/styles';

const Login = ({ navigation }) => {
	return (
		<Container>
			<Text>Login</Text>
			<Button onPress={() => navigation.navigate('home')}>
				<Text>Go</Text>
			</Button>
		</Container>
	);
};

export default Login;
