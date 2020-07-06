import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Card, CardItem, Body, Text} from 'native-base';
import {FONT_COLOR, VARIANT_PRIMARY} from '../style/index';

import {NEWS_PAGE} from '../constant/index';

const dataArray = [
  {
    image:
      'https://www.nfcw.com/wp-content/uploads/2020/05/dutchpicks-nfc-plectrum.jpg',
    type: 'TECHNOLOGY',
    title: 'DutchPicks integrates NFC tags into guitar picks',
    description:
      'Guitar pick printer DutchPicks is providing musicians with a way to make additional revenues and connect more closely with their fans via a range of custom-printed NFC guitar plectrums that bands and artists can make available at concerts and online...',
    source: 'NFCW.COM',
    time: 'an hour ago',
  },
  {
    image:
      'https://www.nfcw.com/wp-content/uploads/2020/05/real-sociedad-football.jpg',
    type: 'TECHNOLOGY',
    title: 'Real Sociedad to add NFC tags to soccer shirts',
    description:
      'Spanish football team Real Sociedad is to include NFC tags in its 2020/21 season supporter shirts “to open up new sponsorship opportunities by connecting fans with partner brands”.',
    source: 'NFCW.COM',
    time: 'an hour ago',
  },
  {
    image:
      'https://www.nfcw.com/wp-content/uploads/2020/05/university-of-alabama2.jpg',
    type: 'TECHNOLOGY',
    title: 'Transact rolls out Android NFC student IDs at 16 US universities',
    description:
      'Campus card solutions provider Transact has rolled out support for Android NFC student IDs, integrated with Google Pay, to 16 US universities.',
    source: 'NFCW.COM',
    time: 'an hour ago',
  },
];

export default class NewsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{width: '100%'}}>
        <StatusBar backgroundColor={VARIANT_PRIMARY} />
        {dataArray.map((item, key) => {
          return (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(
                  NEWS_PAGE,
                  {
                    image: item.image,
                    type: item.type,
                    title: item.title,
                    description: item.description,
                    source: item.source,
                    time: item.time,
                  },
                  {...this.props},
                )
              }
              key={key}>
              <Card>
                <CardItem>
                  <Body>
                    <View style={{width: '100%', alignSelf: 'baseline'}}>
                      <ImageBackground
                        source={{uri: item.image}}
                        style={styles.image}>
                        <Text style={styles.type}>{item.type}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                      </ImageBackground>
                    </View>
                    <View style={{width: '95%'}}>
                      <View style={styles.description}>
                        <Text style={{color: 'gray'}}>{item.description}</Text>
                      </View>
                      <View style={styles.info}>
                        <View style={{flex: 1}}>
                          <Text style={styles.source}>{item.source}</Text>
                        </View>

                        <View style={{flex: 1}}>
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 160,
    justifyContent: 'center',
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
  title: {
    color: FONT_COLOR,
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    padding: 5,
    width: '80%',
  },
  description: {
    width: '100%',
    alignSelf: 'baseline',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    width: '100%',
    alignSelf: 'baseline',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  source: {
    color: 'lightgray',
    fontStyle: 'italic',
    textAlign: 'left',
  },
  time: {
    color: 'lightgray',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
