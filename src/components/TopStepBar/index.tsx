import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const STEPS = [
	{
		id: '1',
		title: 'Year'
	},
	{
		id: '2',
		title: 'Make'
	},
	{
		id: '3',
		title: 'Model'
	}
];

interface ITopStepBarProps {
	selectedId: string;
}

const TopStepBar: React.FC<ITopStepBarProps> = ({ selectedId }) => {
	const items = STEPS.map(el => {
		const textColor = el.id === selectedId ? '#000' : '#949494';
		return (
			<View key={el.id}>
				<Text style={[styles.text, { color: textColor }]}>{el.title}</Text>
			</View>
		);
	});

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView} horizontal>
				{items}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		width: '100%',
		justifyContent: 'center',
		borderTopWidth: 1,
		borderTopColor: '#ECECEC',
		borderBottomWidth: 1,
		borderBottomColor: '#ECECEC'
	},
	scrollView: {
		width: '100%',
		paddingVertical: 12,
		alignItems: 'center',
		backgroundColor: 'white',
		justifyContent: 'space-around'
	},
	text: {
		fontSize: 12,
		paddingHorizontal: 10,
		color: '#949494'
	},
	selected: {
		color: 'black'
	}
});

export default TopStepBar;
