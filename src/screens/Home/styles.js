import styled from 'styled-components/native';
import screen from '../../utils/constants/dimentions';

import { Container } from '../../shared/styles';

export const Screen = styled(Container)`
	align-items: flex-start;
	justify-content: flex-start;
	padding: 50px 20px 0 20px;
	padding-top: ${`${screen.height * 0.15}px`};
`;

export const Space = styled.View`
	height: ${screen.height * 0.03};
	width: ${screen.width};
`;
