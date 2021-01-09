import React, {Fragment} from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppContainer from './navigation/AppContainer';

LogBox.ignoreLogs(['Setting a timer']);

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
