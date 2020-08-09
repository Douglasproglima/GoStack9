import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../pages/Main';
import User from '../pages/User';

const Drawer = createDrawerNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Main">
				<Drawer.Screen name="Main" component={Main} />
				<Drawer.Screen name="User" component={User} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
