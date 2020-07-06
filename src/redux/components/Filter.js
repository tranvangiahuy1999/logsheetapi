import React, {Component} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {addItem} from '../actions/index';
import {connect} from 'react-redux';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.filter}
          onChangeText={text => this.setState({temp: text})}
          value={this.state.temp}
          placeholder="Type here!"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.addItem(this.state.temp), console.log(this.props.text);
          }}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        <View>
          {this.props.state.map(item => (
            <Text key={item.id}>{item.text}</Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filter: {
    width: '95%',
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    fontSize: 15,
  },
  button: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    id: state.id,
    text: state.text,
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: text => dispatch(addItem(text)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
