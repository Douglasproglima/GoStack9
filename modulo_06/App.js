import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Titulo</Text>
							<Text style={styles.sectionDescription}>
								Hello <Text style={styles.highlight}>World</Text>
							</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#000000f9',
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: '#000000f9',
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 50,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.white,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.red,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.red,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'center',
	},
});
