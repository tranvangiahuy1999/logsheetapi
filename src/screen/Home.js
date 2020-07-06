import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import SlideshowComp from '../component/Slideshow';
// import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LOGIN} from '../constant/index';
import NewsList from '../component/NewsList';
import {FONT_COLOR, PRIMARY, VARIANT_PRIMARY} from '../style/index';
import {Header, Left, Title, Right, Body} from 'native-base';
import LoadingIndicator from '../component/LoadingIndicator';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  // const navigation = useNavigation();
  render() {
    setTimeout(
      () =>
        this.setState({
          isLoading: false,
        }),
      2000,
    );
    const isLoading = this.state.isLoading;
    return (
      <View style={{flex: 1}}>
        {isLoading ? (
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
                <Title style={{fontWeight: 'bold'}}>Home</Title>
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
            <View
              style={{
                width: '100%',
                height: 5,
                backgroundColor: 'lightgray',
              }}
            />
            <LoadingIndicator />
          </View>
        ) : (
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
                <Title style={{fontWeight: 'bold'}}>Home</Title>
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
            <View style={{flex: 1}}>
              <ScrollView>
                <View
                  style={{
                    width: '100%',
                    height: 5,
                    backgroundColor: 'lightgray',
                  }}
                />
                <Text style={styles.title}>Daily News</Text>
                <View style={styles.slidecontainer}>
                  <SlideshowComp />
                </View>
                <Text style={styles.title}>Headlines</Text>
                <NewsList {...this.props} />
              </ScrollView>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    textShadowColor: 'lightgray',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  slidecontainer: {
    padding: 10,
  },
});
