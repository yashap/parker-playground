import React, {Component} from 'react';
import {Alert, View, Text} from 'react-native';
import {NavigationContainerProps} from 'react-navigation';
import ViewBasket from '../components/ViewBasket';
import Food from '../models/Food';
import PageCard from '../components/PageCard';

// TODO: read up on react navigation, understand navigation props
interface FoodDetailsProps extends NavigationContainerProps {}

interface FootDetailsState {}

class FoodDetails extends Component<FoodDetailsProps, FootDetailsState> {
  static navigationOptions = ({navigation}: FoodDetailsProps) => {
    return {
      title: navigation
        ? navigation.getParam('item').name.substr(0, 12) + '...'
        : '',
      headerRight: () => <ViewBasket />,
    };
  };

  // set this.context to the global app context
  // static contextType = AppContext;

  state = {
    qty: 1,
  };

  item?: Food;

  constructor(props: FoodDetailsProps) {
    super(props);
    const {navigation} = this.props;
    // get the item passed in from the FoodList screen
    this.item = navigation?.getParam('item');
  }

  qtyChanged = (value: string) => {
    this.setState({qty: Number(value)});
  };

  addToCart = (item: Food, qty: string) => {
    // prevent the user from adding items from diff restaurants
    const itemId: number = this.context.cart_items.findIndex(
      (el: Food) => el.restaurant.id !== item.restaurant.id,
    );
    if (itemId === -1) {
      Alert.alert(
        'Added to basket',
        `${qty} ${item.name} was added to the basket.`,
      );
      // call addToCart method from global app context
      this.context.addToCart(item, qty);
    } else {
      Alert.alert(
        'Cannot add to basket',
        'You can only order from one restaurant for each order.',
      );
    }
  };

  render() {
    const {qty} = this.state;
    return (
      <PageCard
        item={this.item}
        qty={qty}
        qtyChanged={this.qtyChanged}
        addToCart={this.addToCart}
      />
    );
  }
}

export default FoodDetails;
