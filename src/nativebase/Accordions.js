import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Accordion from './Accordion';

const dataArray = [
  {title: 'Home', content: 'Home Sweet Home'},
  {title: 'School', content: 'Study Hard'},
  {title: 'Workplace', content: 'Make Money'},
];

export default class Accordions extends Component {
  constructor(props) {
    super(props);
    this.state = {idxVisible: -1};
  }

  onChangeVisible = () => {
    // const {dataArray} = this.props;
    // if (title === 'First Element') {
    //   this.accordion_1 && this.accordion_1.setColor();
    // }
    dataArray.forEach((element, index) => {
      // if (index !== key) {
      this[`accordion_${index}`] && this[`accordion_${index}`].closeIsOpen();
      // }
    });
  };

  renderItem = ({item, index}) => {
    return (
      <Accordion
        ref={c => {
          this[`accordion_${index}`] = c;
        }}
        title={item.title}
        content={item.content}
        onChangeVisible={this.onChangeVisible}
      />
    );
  };

  render() {
    // const {dataArray} = this.props;
    return (
      <View>
        {/* {dataArray.map((item, idx) => (
          <Accordion
            key={idx.toString()}
            title={item.title}
            content={item.content}
          />
        ))} */}
        <FlatList
          data={dataArray}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `item_${index}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
