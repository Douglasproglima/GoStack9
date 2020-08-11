import 'react-native-gesture-handler';
import React, {Animated} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import User from '../pages/User';
import Repository from '../pages/Repository';

const Stack = createStackNavigator();

const forFade = ({current, next}) => {
	const opacity = Animated.add(
		current.progress,
		next ? next.progress : 0,
	).interpolate({
		inputRange: [0, 1, 2],
		outputRange: [0, 1, 0],
	});

	return {
		leftButtonStyle: {opacity},
		rightButtonStyle: {opacity},
		titleStyle: {opacity},
		backgroundStyle: {opacity},
	};
};

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{
					// animationEnabled: true,
					// headerMode: true,
					// headerTitleAllowFontScaling: true,
					headerMode: 'modal',
					headerLayoutPreset: 'center',
					gestureEnabled: true,
					headerTitleAlign: 'center',
					headerBackTitle: false,
					headerStyle: {
						height: 60,
						backgroundColor: '#f47b00',
					},
					headerTintColor: '#fff',
				}}>
				<Stack.Screen
					name="Home"
					component={Main}
					options={{
						headerTitle: 'Home',
					}}
				/>
				<Stack.Screen
					name="User"
					component={User}
					options={{
						headerStyleInterpolator: forFade,
						// headerStyle: {
						//	backgroundColor: 'tomato',
						// },
					}}
				/>
				<Stack.Screen
					name="Repository"
					component={Repository}
					options={{
						headerStyleInterpolator: forFade,
						// headerStyle: {
						//	backgroundColor: 'tomato',
						// },
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
