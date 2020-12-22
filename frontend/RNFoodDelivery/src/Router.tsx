import React, {Component} from 'react';
import {LogBox} from 'react-native';

import {createAppContainer, NavigationContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FoodList from './screens/FoodList';
import FoodDetails from './screens/FoodDetails';
import OrderSummary from './screens/OrderSummary';
import TrackOrder from './screens/TrackOrder';

LogBox.ignoreLogs(['Setting a timer']);

const RootStack = createStackNavigator(
  {
    FoodList,
    FoodDetails,
    OrderSummary,
    TrackOrder,
  },
  {
    initialRouteName: 'FoodList',
  },
);

const AppContainer: NavigationContainer = createAppContainer(RootStack);

class Router extends Component {
  render() {
    return <AppContainer />;
  }
}

export default Router;
