import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {VARIANT_SECONDARY, VARIANT_PRIMARY} from '../style/index';

export default class LoadingIndicator extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator
          size={'large'}
          color={VARIANT_PRIMARY}
          animating={true}
        />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'red', fontSize: 18, margin: 5},
});
