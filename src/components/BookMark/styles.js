import styled from 'styled-components/native';
import screen from '../../utils/constants/dimentions';
import { Text } from '../../shared/styles';

export const Container = styled.View`
	width: 100%;
	min-height: ${screen.height * 0.2 + 'px'};
	background-color: ${(props) =>
		props.activeTheme === 'LIGHT'
			? props.theme.backgroundPrimary
			: props.theme.backgroundSecondary};
	elevation: 5;

	margin-bottom: ${screen.height * 0.05 + 'px'};
	border-radius: 5px;
	padding: 10px 15px;
`;

export const Position = styled(Text).attrs(() => ({}))``;
