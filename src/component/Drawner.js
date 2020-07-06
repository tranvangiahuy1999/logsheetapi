import React, {Component} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  ImageBackground,
  Image,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {VARIANT_SECONDARY} from '../style/index';

class DrawnerComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <ImageBackground
            source={{
              uri:
                'https://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png',
            }}
            style={{width: '100%', height: 150}}>
            <Image
              source={{
                uri:
                  'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg',
              }}
              style={styles.usericon}
            />
          </ImageBackground>
          <View>
            <DrawerItemList {...this.props} />
          </View>
        </ScrollView>
        {/* <DrawerContentScrollView {...this.props}>
          
          <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />
        </DrawerContentScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  usericon: {
    width: 60,
    height: 60,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: VARIANT_SECONDARY,
    margin: 15,
  },
});

export default DrawnerComp;
