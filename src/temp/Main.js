import React, {Component} from 'react';

import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>MAIN</Text>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7699dd',
    padding: 20,
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});

export default ControlPanel;
