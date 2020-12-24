import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Button, FlatList} from 'react-native';
import {NavigationContainerProps} from 'react-navigation';
import axios from 'axios';

import NavHeaderRight from '../components/NavHeaderRight';
import ListCard from '../components/ListCard';
import Config from 'react-native-config';
import Food from '../models/Food';

const BASE_URL = Config.NGROK_HTTPS_URL;

// TODO: read up on react navigation, understand navigation props
interface FoodListProps extends NavigationContainerProps {}

interface FootListState {
  foods: Food[];
  query?: string;
}

class FoodList extends Component<FoodListProps, FootListState> {
  static navigationOptions = () => {
    return {
      title: 'Hungry?',
      headerRight: () => <NavHeaderRight />,
    };
  };

  state: FootListState = {
    foods: [], // list of foods to be rendered on the screen
    query: '',
  };

  async componentDidMount() {
    // fetch the array of foods from the server
    const url = `${BASE_URL}/foods`;
    try {
      const foodsResponse = await axios.get(url);
      this.setState({foods: foodsResponse.data.foods});
    } catch (err) {
      console.error(`Failed to GET ${url}: ${err}`);
      // TODO: error toast or something
    }
  }

  render() {
    const {foods, query} = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeQuery}
              value={query}
              placeholder={'What are you craving?'}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => this.filterList()}
              title="Go"
              color="#c53c3c"
            />
          </View>
        </View>

        <FlatList
          data={foods}
          renderItem={this.renderFood}
          contentContainerStyle={styles.list}
          keyExtractor={(item: Food) => item.id.toString()}
        />
      </View>
    );
  }

  onChangeQuery = (text: string) => {
    this.setState({query: text});
  };

  filterList = async () => {
    // filter the list of foods by supplying a query
    const {query} = this.state;
    const url = query
      ? `${BASE_URL}/foods?query=${query}`
      : `${BASE_URL}/foods`;
    try {
      const foodsResponse = await axios.get(url);
      this.setState({
        foods: foodsResponse.data.foods,
        query: '',
      });
    } catch (err) {
      console.error(`Failed to GET ${url}: ${err}`);
      // TODO: error toast or something?
    }
  };

  viewItem = (item: Food) => {
    // navigate to the FoodDetails screen
    if (this.props.navigation) {
      this.props.navigation.navigate('FoodDetails', {item});
    }
  };

  renderFood = ({item}: {item: Food}) => {
    return <ListCard item={item} viewItem={this.viewItem} />;
  };
}

const styles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  topWrapper: {
    flexDirection: 'row',
  },
  textInputWrapper: {
    flex: 4,
  },
  textInput: {
    height: 35,
    borderColor: '#5d5d5d',
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});

export default FoodList;
