import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BOTTOMTAB, LOGIN, NEWS_PAGE, NEWS_LIST} from '../constant/index';
import LoginScreen from '../screen/Login';
import DrawerNavigation from './BottomTab';

import NewsPage from '../component/NewsPage';
import NewsList from '../component/NewsList';

const Stack = createStackNavigator();

class AppNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={LOGIN}
            component={LoginScreen}
          />
          <Stack.Screen
            options={({navigation}) => ({
              headerShown: false,
            })}
            name={BOTTOMTAB}
            component={DrawerNavigation}
          />

          <Stack.Screen
            options={() => ({
              headerShown: false,
            })}
            name={NEWS_LIST}
            component={NewsList}
          />
          <Stack.Screen
            options={() => ({
              headerShown: false,
            })}
            name={NEWS_PAGE}
            component={NewsPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
