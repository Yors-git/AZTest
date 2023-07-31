import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.title}>Welcome to AutoZone</Text>
				<Text style={styles.content}>
					This App will help you select the Year, Make and Model of your car
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('List')}
				>
					<Text style={styles.buttonText}>Start</Text>
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

export default HomeScreen;
