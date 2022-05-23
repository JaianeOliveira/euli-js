import React from 'react';
import { Screen, Space } from './styles';
import { Text, Book } from '../../shared/styles';

import { Button, Carrousel } from '../../components';

import dummy_data from '../../data/dummy-data';

const Home = ({ navigation }) => {
	const data = dummy_data[0].books;
	return (
		<Screen>
			<Text bold size={18}>
				Lendo agora
			</Text>
			<Space />
			<Carrousel data={data} />
		</Screen>
	);
};

export default Home;
