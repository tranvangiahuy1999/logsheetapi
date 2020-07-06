import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const dataArray = [
  {title: 'Home', icon: 'home'},
  {title: 'Setting', icon: 'setting'},
  {title: 'Contact', icon: 'phone'},
  {title: 'Close', icon: 'close'},
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.pressHandle = this.pressHandle.bind(this);
  }

  componentDidMount() {}

  pressHandle(id) {
    console.log(id);
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={this.pressHandle(index)}
        style={{flexDirection: 'row'}}>
        <Icon name={item.icon} size={30} color="#0067c6" />
        <Text
          ref={c => {
            this[`text_${index}`] = c;
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={dataArray}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `item_${index}`}
        />
      </View>
    );
  }
}

export default SideBar;
