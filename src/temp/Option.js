import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {LOGIN} from '../constant/index';

class Option extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => this.props.navigation.replace(LOGIN)}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoutbtn: {
    width: '90%',
    height: 40,
    backgroundColor: '#0067c6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default Option;
