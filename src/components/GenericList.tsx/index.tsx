import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IListOption } from '../../screens/ListScreen/models';

interface IGenericListProps {
	data: IListOption[];
	onPress: (option: string) => void;
}

const GenericList: React.FC<IGenericListProps> = ({ onPress, data }) => {
	const renderItem = ({ item }: { item: IListOption }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					onPress(item.name);
				}}
				style={styles.item}
			>
				<Text style={styles.title}>{item.name}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight || 0,
		marginBottom: 20
	},
	item: {
		backgroundColor: 'white',
		borderTopWidth: 0.4,
		borderTopColor: '#ECECEC',
		padding: 12
	},
	title: {
		fontSize: 12
	}
});

export default GenericList;
