import styled from 'styled-components/native';
import screen from '../../utils/constants/dimentions';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${(props) => props.theme.backgroundPrimary};
	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text`
	color: ${(props) => (props.color ? props.color : props.theme.text)};
	font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
	font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
	font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`;

export const Book = styled.TouchableOpacity`
	width: ${(props) => (props.small ? '85px' : '94px')};
	height: ${(props) => (props.small ? '112px' : '142px')};
	border-radius: 5px;

	overflow: hidden;
	align-items: center;
	justify-content: center;

	border: 1px solid ${(props) => props.theme.gray};

	background-color: ${(props) => (props.image ? 'transparent' : '#e5e5e5')};

	margin-bottom: ${(props) => (props.margin ? `${screen.height * 0.03}px` : 0)};

	elevation: 1;
`;
