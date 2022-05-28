import styled from 'styled-components/native';
import screen from '../../utils/constants/dimentions';
import { Book, Text } from '../../shared/styles';

export const Banner = styled.View`
	height: ${screen.height * 0.25 + 'px'};
	width: ${screen.width + 'px'};

	background-color: ${(props) => props.theme.primary};

	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;

	padding: ${screen.height * 0.028 + 'px'} ${screen.width * 0.05 + 'px'}
		${screen.height * 0.015 + 'px'} ${screen.width * 0.05 + 'px'};

	z-index: 1;
`;

export const BookContainer = styled.View`
	top: ${screen.height * 0.1 + 'px'};
`;

export const TitleContainer = styled.View`
	max-width: ${screen.width * 0.55 + 'px'};
`;
export const Title = styled(Text)`
	margin-bottom: 5px;
`;
