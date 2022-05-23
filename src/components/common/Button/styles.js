import styled from 'styled-components/native';

const DefaultButton = styled.TouchableOpacity`
	min-width: 20px;
	padding: 10px;
	border-radius: 5px;
`;
export const PrimaryButton = styled(DefaultButton)`
	background-color: ${(props) =>
		props.color ? props.color : props.theme.primary};
`;

export const OutlinedButton = styled(DefaultButton)`
	border: 1px solid
		${(props) => (props.color ? props.color : props.theme.primary)};
	background-color: 'transparent';
`;
