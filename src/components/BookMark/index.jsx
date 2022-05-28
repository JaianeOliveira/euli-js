import React from 'react';

import { Container, Space, Emotions } from './styles';
import { useAppSelector } from '../../hooks/useRedux';
import { Text } from '../../shared/styles';
import { Divider } from 'react-native-paper';
import emotions from '../../utils/constants/emotions';

const BookMark = ({ position, comment, emotion, emoji, excerpt }) => {
	const { selectedTheme, theme } = useAppSelector((state) => state.theme);

	const emotionDetails = emotions[emotion];

	const getPosition = () => {
		if (position.type === 'PERCENT') {
			return `Em ${position.position}%`;
		}
		if (position.type === 'PAGE') {
			return `Página ${position.position}`;
		}
		return `Posição ${position.position}`;
	};
	return (
		<Container activeTheme={selectedTheme}>
			<Text
				medium
				color={selectedTheme === 'DARK' ? theme.gray : theme.darkGray}
			>
				{getPosition()}
			</Text>
			<Space />
			{excerpt ? (
				<Text size={13} italic light>
					{excerpt}
				</Text>
			) : (
				<Text size={13} italic light color={theme.gray}>
					Nenhum trecho
				</Text>
			)}

			<Divider
				style={{
					backgroundColor:
						selectedTheme === 'DARK' ? theme.gray : theme.darkGray,
					marginTop: 15,
					marginBottom: 10,
				}}
			/>

			{comment ? (
				<Text light>{comment}</Text>
			) : (
				<Text italic color={theme.gray}>
					Sem comentário
				</Text>
			)}
			<Space />
			<Emotions>
				<Text medium color={emotionDetails.color}>
					{emotionDetails.label}
				</Text>
				<Text>{emoji}</Text>
			</Emotions>
		</Container>
	);
};

export default BookMark;
