import {createStackNavigator} from 'react-navigation-stack';

import FoodList from '../screens/FoodList';
import FoodDetails from '../screens/FoodDetails';
import OrderSummary from '../screens/OrderSummary';
import TrackOrder from '../screens/TrackOrder';

const RootStackNavigator = createStackNavigator(
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

export default RootStackNavigator;
