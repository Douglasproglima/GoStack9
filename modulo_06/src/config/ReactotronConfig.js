import Reactotron from 'reactotron-react-native';

if (__DEV__) {
	const tron = Reactotron.configure()
		// const tron = Reactotron.configure({host: '192.168.5.1'})
		.useReactNative()
		.connect();
	console.tron = tron; // é o mesmo que console.log(); usando o .exe do reactotron

	tron.clear();
}
