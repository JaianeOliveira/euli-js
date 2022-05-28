import styled from 'styled-components/native';
import screen from '../../utils/constants/dimentions';

import { Container } from '../../shared/styles';

export const Screen = styled(Container)`
	align-items: flex-start;
	justify-content: flex-start;
	padding-top: ${screen.height * 0.1 + 'px'};
`;

export const Space = styled.View`
	height: ${screen.height * 0.03 + 'px'};
	width: ${screen.width + 'px'};
`;

export const CarrouselContainer = styled.View`
	max-height: ${screen.height * 0.25 + 'px'};
`;

export const AllBooksContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Header = styled.View`
	width: ${screen.width + 'px'};
	height: ${screen.height * 0.05 + 'px'};
	align-items: center;
	justify-content: flex-end;
	padding: 0 ${screen.width * 0.05 + 'px'};

	flex-direction: row;
`;
