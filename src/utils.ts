import axios from 'axios';
import { IListOption } from './screens/ListScreen/models';

export const range = (start: number, stop: number, step: number) => {
	const numArr = Array.from(
		{ length: (stop - start) / step + 1 },
		(_, i) => start + i * step
	);
	const dataArr = numArr.map((el, idx) => ({
		name: el.toString(),
		id: idx.toString()
	}));
	return dataArr.reverse();
};

export const getMake = async () => {
	try {
		const res = await axios.get(
			'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
		);
		const result: IListOption[] = res.data.Results.map(el => ({
			id: el.MakeId,
			name: el.MakeName
		}));
		return result;
	} catch (error) {
		console.error(error);
	}
};

export const getModel = async (make: string) => {
	try {
		const res = await axios.get(
			`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`
		);
		const result = res.data.Results.map(el => ({
			id: el.Model_ID,
			name: el.Model_Name
		}));
		return result;
	} catch (error) {
		console.error(error);
	}
};
