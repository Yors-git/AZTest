import React, { createContext, useContext, useState } from 'react';

export interface ICarData {
	year: string;
	make: string;
	model: string;
}

export type CarDataContextType = {
	carData: ICarData;
	updateCarData: (c: ICarData) => void;
};

const CarDataContext = createContext<CarDataContextType>({
	carData: { year: '', make: '', model: '' },
	updateCarData: (c: ICarData) => {}
});

export const useCarData = () => useContext(CarDataContext);

export const CarDataProvider = ({ children }) => {
	const [carData, setCarData] = useState<ICarData>();

	const updateCarData = (newState: ICarData) => {
		setCarData(newState);
	};

	return (
		<CarDataContext.Provider value={{ carData, updateCarData }}>
			{children}
		</CarDataContext.Provider>
	);
};
