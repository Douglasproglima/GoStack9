import React from 'react';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
	// console.tron.log('Hello World');
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#f47b00" />
			<Routes />
		</>
	);
}
