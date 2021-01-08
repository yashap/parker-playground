import React, {Fragment} from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import RootStackNavigator from './navigation/RootStackNavigator';
import {createAppContainer, NavigationContainer} from 'react-navigation';

LogBox.ignoreLogs(['Setting a timer']);

const AppContainer: NavigationContainer = createAppContainer(
  RootStackNavigator,
);

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
