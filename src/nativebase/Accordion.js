import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {isVisible: false};
  }

  onChangeVisibleItem = () => {
    const {onChangeVisible} = this.props;
    onChangeVisible && onChangeVisible();
    this.setState({isVisible: !this.state.isVisible});
  };

  closeIsOpen = () => {
    if (this.state.isVisible) {
      this.setState({isVisible: false});
    }
  };

  render() {
    const {title, content} = this.props;
    const {isVisible} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.label, {backgroundColor: this.state.color || '#ddd'}]}
          onPress={this.onChangeVisibleItem}>
          <Text style={styles.title}> {title} </Text>
          <IconEntypo
            name={isVisible ? 'chevron-up' : 'chevron-down'}
            size={20}
          />
        </TouchableOpacity>
        {isVisible && <Text style={styles.content}>{content}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 10,
  },
  title: {fontSize: 15},
  content: {backgroundColor: '#eee', padding: 10, fontSize: 15},
});
