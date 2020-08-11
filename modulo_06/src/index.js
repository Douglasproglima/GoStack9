import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import './config/ReactotronConfig';

export default function App() {
	// console.tron.log('Hello World');
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#f47b00" />
			<Routes />
		</>
	);
}
