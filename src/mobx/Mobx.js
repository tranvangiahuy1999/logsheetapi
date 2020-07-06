import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react';
import {Provider} from 'mobx-react';
import counterStore from './mobx/counterStore';

@inject('counterStore')
@observer
class MobxReact extends Component {
  render() {
    return (
      <Provider counterStore={counterStore}>
        <View>
          <Text>{this.props.counterStore.count}</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.counterStore.increase();
            }}
            style={{borderWidth: 1}}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.counterStore.decrease()}
            style={{borderWidth: 1}}>
            <Text>Decrease</Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}

export default MobxReact;
