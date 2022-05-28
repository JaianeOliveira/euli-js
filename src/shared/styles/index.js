import styled from 'styled-components/native';
import screen from '../../utils/constants/dimentions';
import fonts from '../../utils/constants/fonts';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${(props) => props.theme.backgroundPrimary};
	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text`
	color: ${(props) => (props.color ? props.color : props.theme.text)};
	font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
	font-family: ${(props) => {
		if (props.bold && !props.italic) {
			return fonts.bold;
		}
		if (props.bold && props.italic) {
			return fonts.bold_italic;
		}
		if (props.medium && !props.italic) {
			return fonts.semiBold;
		}
		if (props.medium && props.italic) {
			return fonts.semiBold_italic;
		}
		if (props.light && !props.italic) {
			return fonts.light;
		}
		if (props.light && props.italic) {
			return fonts.light_italic;
		}
		if (!props.bold && !props.light && !props.medium && props.italic) {
			return fonts.italic;
		}
		return fonts.normal;
	}};
`;
export const Book = styled.TouchableOpacity.attrs((props) => ({
	activeOpacity: 0.8,
}))`
	width: ${(props) => {
		if (props.size === 'small') {
			return '85px';
		} else if (props.size === 'large') {
			return '105px';
		} else {
			return '94px';
		}
	}};
	height: ${(props) => {
		if (props.size === 'small') {
			return '112px';
		} else if (props.size === 'large') {
			return '160px';
		} else {
			return '142px';
		}
	}};
	border-radius: 5px;

	overflow: hidden;
	align-items: center;
	justify-content: center;

	border: 1px solid transparent;

	background-color: ${(props) => (props.image ? 'transparent' : '#e5e5e5')};

	margin-bottom: ${(props) => (props.margin ? `${screen.height * 0.03}px` : 0)};

	elevation: 5;
`;
