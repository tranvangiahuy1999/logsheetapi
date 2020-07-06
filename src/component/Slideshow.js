import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {
  FONT_COLOR,
  VARIANT_SECONDARY,
  VARIANT_PRIMARY,
  SECONDARY,
} from '../style/index';

export default class SlideshowComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoader: [
        {
          image:
            'https://www.nfcw.com/wp-content/uploads/2020/06/samsung-sero-smart-tv3.jpg',
          type: 'Latest',
          description: 'Samsung brings its rotating NFC TV to the UK and USA',
        },
        {
          image:
            'https://www.nfcw.com/wp-content/uploads/2020/06/ae-solar-nfc-pv-module-3.jpg',
          type: 'Technology',
          description: 'AE Solar combats solar panel counterfeiting with NFC',
        },
        {
          image:
            'https://www.nfcw.com/wp-content/uploads/2020/05/mintid-nfc-chip-security.jpg',
          type: 'Technology',
          description: 'MintID protects precious metals with NFC chips',
        },
        {
          image:
            'https://www.nfcw.com/wp-content/uploads/2020/05/paachn-nfc-face-mask.jpg',
          type: 'Technology',
          description: 'Paachn adds NFC tags to face masks',
        },
      ],
    };
  }

  render() {
    return (
      <Swiper
        showsButtons
        height={180}
        width="100%"
        loop={true}
        autoplay={true}
        dot={<View style={styles.dot} />}
        activeDotColor={VARIANT_SECONDARY}>
        {this.state.dataLoader.map((item, key) => {
          return (
            <View key={key} style={styles.container}>
              <ImageBackground style={styles.image} source={{uri: item.image}}>
                <View style={styles.textwrapper}>
                  <Text style={styles.type}>{item.type}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </ImageBackground>
            </View>
          );
        })}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  type: {
    fontSize: 14,
    fontWeight: 'bold',
    color: FONT_COLOR,
    backgroundColor: 'red',
    alignSelf: 'baseline',
    borderRadius: 2,
    padding: 2,
  },
  dot: {
    backgroundColor: 'lightgray',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  description: {
    color: FONT_COLOR,
    fontSize: 18,
    width: '80%',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'baseline',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textwrapper: {
    padding: 5,
  },
});
