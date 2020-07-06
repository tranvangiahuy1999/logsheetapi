import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class WriteItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.pressHandle}>
        <View style={{justifyContent: 'center'}}>
          <Icon
            name={this.props.icon}
            size={30}
            color={this.props.color}
            style={{padding: 10}}
          />
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '95%',
    height: '45%',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
  textcontainer: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
  },
});

export default WriteItem;
