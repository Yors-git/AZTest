import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CarDataProvider } from './src/context/carDataContext';
import ListScreen from './src/screens/ListScreen';
import ResultScreen from './src/screens/ResultScreen';
import StartScreen from './src/screens/StartScreen';

export type NavigationParams = {
	Start;
	List;
	Result;
};

const Stack = createStackNavigator<NavigationParams>();

const App = () => {
	return (
		<CarDataProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{ headerTitle: 'Car Search' }}
					initialRouteName='Start'
				>
					<Stack.Screen
						name='Start'
						component={StartScreen}
						options={{
							headerBackTitleVisible: false,
							headerTitleStyle: {
								color: '#000'
							}
						}}
					/>
					<Stack.Screen
						name='List'
						component={ListScreen}
						options={{
							headerBackTitleVisible: false,
							headerTitle: 'Choose Year',
							headerTitleStyle: {
								color: '#000'
							},
							headerTintColor: '#e1703d'
						}}
					/>
					<Stack.Screen
						name='Result'
						component={ResultScreen}
						options={{
							headerBackTitleVisible: false,
							headerTitle: 'Car Selector',
							headerTitleStyle: {
								color: '#000'
							},
							headerTintColor: '#e1703d'
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</CarDataProvider>
	);
};

export default App;
