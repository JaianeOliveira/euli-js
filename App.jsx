import store from './src/context/store';
import { Provider } from 'react-redux';
import { Theme } from './src/templates/index';
import AppLoading from 'expo-app-loading';

import {
	useFonts,
	Nunito_300Light,
	Nunito_300Light_Italic,
	Nunito_400Regular,
	Nunito_400Regular_Italic,
	Nunito_600SemiBold,
	Nunito_600SemiBold_Italic,
	Nunito_700Bold,
	Nunito_700Bold_Italic,
} from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {
	let [fontsLoaded] = useFonts({
		Nunito_300Light,
		Nunito_300Light_Italic,
		Nunito_400Regular,
		Nunito_400Regular_Italic,
		Nunito_600SemiBold,
		Nunito_600SemiBold_Italic,
		Nunito_700Bold,
		Nunito_700Bold_Italic,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<Provider store={store}>
			<Theme>
				<Routes />
			</Theme>
		</Provider>
	);
}
