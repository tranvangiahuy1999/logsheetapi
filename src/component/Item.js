import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={this.props.icon}
          size={30}
          color={this.props.color}
          style={{padding: 5}}
        />
        <View style={styles.infocontainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text numberOfLines={1} style={styles.value}>
            {this.props.value}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: '100%',
    height: '12.5%',
    alignItems: 'center',
  },
  infocontainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
  },
  value: {
    fontSize: 16,
    padding: 2,
  },
});

export default Item;
