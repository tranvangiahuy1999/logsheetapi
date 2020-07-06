import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class IconBtn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon
          name={this.props.iconname}
          size={32}
          color={this.props.color}
          style={{padding: 10}}
        />
      </TouchableOpacity>
    );
  }
}
