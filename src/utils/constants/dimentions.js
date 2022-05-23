import { Dimensions, StatusBar } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Screen = {
	width,
	height: height - (StatusBar.currentHeight ?? 0),
};
export default Screen;
