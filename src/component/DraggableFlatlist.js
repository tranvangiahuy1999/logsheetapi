import React, {Component} from 'react';
import {View} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

class DraggableFlatlist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 5,
        }}>
        <DraggableFlatList
          data={this.props.data}
          renderItem={this.props.renderItem}
          keyExtractor={this.props.keyExtractor}
          onDragEnd={this.props.onDragEnd}
        />
      </View>
    );
  }
}

export default DraggableFlatlist;
