import {createAppContainer, NavigationContainer} from 'react-navigation';
import RootStackNavigator from './RootStackNavigator';

const AppContainer: NavigationContainer = createAppContainer(
  RootStackNavigator,
);

export default AppContainer;
