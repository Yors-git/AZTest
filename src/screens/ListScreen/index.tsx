import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GenericList from '../../components/GenericList.tsx';
import TopStepBar from '../../components/TopStepBar';
import { useCarData } from '../../context/carDataContext';
import { getMake, getModel, range } from '../../utils';
import { IListOption } from './models';

const ListScreen = ({ navigation, route }) => {
	const [currentTab, setCurrentTab] = useState<number>(0);
	const [listData, setListData] = useState<IListOption[]>([]);
	const { carData, updateCarData } = useCarData();

	useEffect(() => {
		setCurrentTab(navigation.getState().index);
	}, [navigation]);

	const yearData = useMemo(() => range(1995, 2024, 1), []);

	const titleOptionsArr = ['Choose Year', 'Choose Make', 'Choose Model'];
	let carDataTitle = '';
	const customTitle = () => (
		<View>
			<Text style={styles.title}>{titleOptionsArr[currentTab - 1]}</Text>

			<Text style={styles.subTitle}>{`${carDataTitle}`}</Text>
		</View>
	);

	useEffect(() => {
		switch (currentTab) {
			case 1:
				setListData(yearData);
				navigation.setOptions({ headerTitle: customTitle });
				break;
			case 2:
				updateCarData({ ...carData, ...{ year: route.params.option } });
				getMake().then(res => setListData(res));
				carDataTitle = route.params.option;
				navigation.setOptions({ headerTitle: customTitle });
				break;
			case 3:
				updateCarData({ ...carData, ...{ make: route.params.option } });
				carDataTitle = `${carData.year} ${route.params.option}`;
				navigation.setOptions({ headerTitle: customTitle });
				const param = route.params.option;
				getModel(param).then(res => setListData(res));
			default:
				break;
		}
	}, [currentTab]);

	const setSelectedTab = (option: string) => {
		if (currentTab < 3) {
			navigation.push('List', { option });
		} else if (currentTab === 3) {
			updateCarData({ ...carData, ...{ model: option } });
			navigation.navigate('Result');
		}
	};
	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<TopStepBar selectedId={currentTab.toString()} />
			<GenericList onPress={setSelectedTab} data={listData} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 60
	},
	title: {
		fontSize: 17,
		fontWeight: '600'
	},
	subTitle: {
		fontSize: 12,
		textAlign: 'center',
		color: '#949494'
	}
});

export default ListScreen;
