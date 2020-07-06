import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FONT_COLOR, PRIMARY, NEWS_FONT} from '../style/index';

export default class NewsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {image} = this.props.route.params;
    const {type} = this.props.route.params;
    const {title} = this.props.route.params;
    const {description} = this.props.route.params;
    const {source} = this.props.route.params;
    const {time} = this.props.route.params;
    const uri = image;

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: '30%',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={{uri: `${uri}`}}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: FONT_COLOR,
                fontWeight: 'bold',
                textAlign: 'right',
                textShadowColor: 'black',
                textShadowOffset: {width: -0.5, height: 1},
                textShadowRadius: 5,
              }}>
              {JSON.stringify(time)}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: FONT_COLOR,
                backgroundColor: 'red',
                borderRadius: 2,
                padding: 2,
                margin: 5,
              }}>
              {JSON.stringify(type)}
            </Text>
            <Text
              style={{
                color: FONT_COLOR,
                fontWeight: 'bold',
                fontSize: 18,
                textShadowColor: 'black',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 5,
                padding: 2,
                width: '80%',
                textAlign: 'center',
              }}>
              {JSON.stringify(title)}
            </Text>
          </ImageBackground>
        </View>
        <ScrollView style={{height: '70%'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{padding: 12, fontSize: 16, color: NEWS_FONT}}>
              {JSON.stringify(description)}
            </Text>
            <Text>{this.props.content}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
