import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers/index';
import Filter from '../components/Filter';

const store = createStore(reducers);

class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Filter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReduxApp;
