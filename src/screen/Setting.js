import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Header, Left, Title, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PRIMARY, FONT_COLOR, VARIANT_PRIMARY} from '../style/index';
import {LOGIN} from '../constant/index';

export default class Setting extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header style={{backgroundColor: PRIMARY}}>
          <StatusBar backgroundColor={VARIANT_PRIMARY} />
          <Left>
            <Icon
              name="view-list"
              onPress={() => this.props.navigation.openDrawer()}
              color={FONT_COLOR}
              size={24}
            />
          </Left>
          <Body>
            <Title style={{fontWeight: 'bold'}}>Setting</Title>
          </Body>
          <Right>
            <Icon
              name="logout"
              onPress={() => this.props.navigation.replace(LOGIN)}
              color={FONT_COLOR}
              size={24}
            />
          </Right>
        </Header>
        <Text>My Setting</Text>
      </View>
    );
  }
}
