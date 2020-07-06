import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {READ, WRITE} from '../constant/index';
import WriteNFC from '../screen/WriteNFC';
import ReadNFC from '../screen/ReadNFC';
import Icons from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComp from '../component/Drawner';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Header, Title, Left, Right, Body} from 'native-base';
import {LOGIN, MAIN, HOME, SETTING} from '../constant/index';
import {PRIMARY, FONT_COLOR, SECONDARY, VARIANT_PRIMARY} from '../style/index';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

class BottomTab extends Component {
  static navigationOptions = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={VARIANT_PRIMARY} />
        <Header style={{backgroundColor: PRIMARY}}>
          <Left>
            <Icon
              name="view-list"
              onPress={() => this.props.navigation.openDrawer()}
              color={FONT_COLOR}
              size={24}
            />
          </Left>
          <Body>
            <Title style={{fontWeight: 'bold'}}>Scan NFC</Title>
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
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === READ) {
                iconName = 'book';
              } else if (route.name === WRITE) {
                iconName = 'pencil';
              }

              return <Icons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: FONT_COLOR,
            inactiveTintColor: PRIMARY,
            activeBackgroundColor: PRIMARY,
            inactiveBackgroundColor: FONT_COLOR,
          }}>
          <Tab.Screen name={READ} component={ReadNFC} />
          <Tab.Screen name={WRITE} component={WriteNFC} />
        </Tab.Navigator>
      </View>
    );
  }
}

class DrawerNavigation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1}}>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: FONT_COLOR,
            activeBackgroundColor: PRIMARY,
            labelStyle: {fontSize: 16},
          }}
          drawerContent={props => <DrawerComp {...props} />}>
          <Drawer.Screen
            name={HOME}
            options={{
              drawerLabel: 'Home',
              drawerIcon: ({focused}) => (
                <Icon
                  name="home"
                  size={24}
                  color={focused ? FONT_COLOR : 'gray'}
                />
              ),
            }}
            component={Home}
          />
          <Drawer.Screen
            name={MAIN}
            options={{
              drawerLabel: 'Scan NFC',
              drawerIcon: ({focused}) => (
                <Icon
                  name="nfc"
                  size={24}
                  color={focused ? FONT_COLOR : 'gray'}
                />
              ),
            }}
            component={BottomTab}
          />
          <Drawer.Screen
            name={SETTING}
            options={{
              drawerLabel: 'Setting',
              drawerIcon: ({focused}) => (
                <Icon
                  name="settings"
                  size={24}
                  color={focused ? FONT_COLOR : 'gray'}
                />
              ),
            }}
            component={Setting}
          />
        </Drawer.Navigator>
      </View>
    );
  }
}

export default DrawerNavigation;
