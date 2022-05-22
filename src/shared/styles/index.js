import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${(props) => props.theme.backgroundPrimary};
	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text`
	color: ${(props) => props.theme.text};
`;

export const Button = styled.TouchableOpacity`
	background-color: ${(props) => props.theme.primary};
	padding: 10px;
	border-radius: 5px;

	align-items: center;
	justify-content: center;
`;
