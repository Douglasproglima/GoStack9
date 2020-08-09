import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import User from '../pages/User';

const Stack = createStackNavigator();
export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{
					// animationEnabled: true,
					// headerMode: true,
					// headerLayoutPreset: 'center',
					// headerTitleAllowFontScaling: true,
					gestureEnabled: false,
					headerTitleAlign: 'center',
					headerBackTitle: false,
					headerStyle: {
						height: 80,
						backgroundColor: '#7159c1',
					},
					headerTintColor: '#fff',
				}}>
				<Stack.Screen name="User" component={User} />
				<Stack.Screen name="Main" component={Main} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
