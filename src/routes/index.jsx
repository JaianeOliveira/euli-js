import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	Home,
	Login,
	Book as BookPage,
	Register,
	Profile,
	ResetPassword,
} from '../screens';

import Feather from 'react-native-vector-icons/Feather';
import { useAppSelector } from '../hooks/useRedux';

const isAuthenticated = true;

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Routes = () => {
	const theme = useAppSelector((state) => state.theme.theme);
	return (
		<NavigationContainer>
			{isAuthenticated ? (
				<Tabs.Navigator
					initialRouteName="home"
					screenOptions={{
						headerShown: false,
						tabBarStyle: {
							backgroundColor: theme.primary,
						},
					}}
				>
					<Tabs.Screen
						name="home"
						component={Home}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<Feather
									name="home"
									size={24}
									color={`${focused ? theme.text : theme.backgroundPrimary}`}
								/>
							),
							tabBarLabel: 'Início',
							tabBarLabelStyle: {
								fontSize: 16,
							},
							tabBarActiveTintColor: theme.text,
							tabBarInactiveTintColor: theme.backgroundPrimary,
						}}
					/>
					<Tabs.Screen
						name="book"
						component={BookPage}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<Feather
									name="heart"
									size={24}
									color={`${focused ? theme.text : theme.backgroundPrimary}`}
								/>
							),
							tabBarLabel: 'Livros',
							tabBarLabelStyle: {
								fontSize: 16,
							},
							tabBarActiveTintColor: theme.text,
							tabBarInactiveTintColor: theme.backgroundPrimary,
						}}
					/>
					<Tabs.Screen
						name="profile"
						component={Profile}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<Feather
									name="user"
									size={24}
									color={`${focused ? theme.text : theme.backgroundPrimary}`}
								/>
							),
							tabBarLabel: 'Perfil',
							tabBarLabelStyle: {
								fontSize: 16,
							},
							tabBarActiveTintColor: theme.text,
							tabBarInactiveTintColor: theme.backgroundPrimary,
						}}
					/>
				</Tabs.Navigator>
			) : (
				<AuthStack.Navigator screenOptions={{ headerShown: false }}>
					<AuthStack.Screen name="login" component={Login} />
					<AuthStack.Screen name="register" component={Register} />
					<AuthStack.Screen name="reset-password" component={ResetPassword} />
				</AuthStack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default Routes;
