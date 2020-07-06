import React from 'react';
import {View, StatusBar} from 'react-native';
import DrawerNavigation from './navigation/AppNavigation';
import {VARIANT_PRIMARY} from './style/index';
// import MobxReact from './mobx/Mobx';
// import ReduxApp from './redux/components/ReduxApp';
// import NativeBaseApp from './nativebase/App';
// import DrawnerComp from './component/Drawner';

function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={VARIANT_PRIMARY} barStyle="light-content" />
      <DrawerNavigation />
    </View>
  );
}

export default App;
