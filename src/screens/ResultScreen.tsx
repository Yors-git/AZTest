import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { useCarData } from '../context/carDataContext';

const ResultScreen = ({ navigation }) => {
	const { carData } = useCarData();
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.title}>
					Thanks for using AutoZone vehicle selector
				</Text>
				<Text style={styles.content}>Your Selected Vehicle is:</Text>
				<Text style={styles.content}>
					{`${carData.year}, ${carData.make}, ${carData.model}`}
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Start')}
				>
					<Text style={styles.buttonText}>Start Again</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		alignItems: 'center',
		marginTop: 150
	},
	title: {
		fontSize: 30,
		marginBottom: 50
	},
	content: {
		width: 300,
		textAlign: 'center',
		marginBottom: 40
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 40,
		backgroundColor: '#e1703d',
		borderRadius: 4
	},
	buttonText: {
		color: 'white'
	}
});

export default ResultScreen;
