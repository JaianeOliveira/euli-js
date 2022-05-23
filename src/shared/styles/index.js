import styled from 'styled-components/native';

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
	width: ${(props) => (props.small ? '94px' : '112px')};
	height: ${(props) => (props.small ? '119px' : '142px')};
	border-radius: 5px;

	background-color: #e5e5e5;
	background-image: ${(props) =>
		props.image ? `url(${props.image})` : 'none'};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;
