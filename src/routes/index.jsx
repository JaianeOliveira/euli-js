import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Login } from '../screens';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="login"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="login" component={Login} />
				<Stack.Screen name="home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
