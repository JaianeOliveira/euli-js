import store from './src/context/store';
import { Provider } from 'react-redux';
import { Theme } from './src/templates/index';

import Routes from './src/routes';

export default function App() {
	return (
		<Provider store={store}>
			<Theme>
				<Routes />
			</Theme>
		</Provider>
	);
}
