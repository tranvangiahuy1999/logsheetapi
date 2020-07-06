import React, {Component} from 'react';
import {Content, Accordion, View, Text, Icon} from 'native-base';

const dataArray = [
  {title: 'Home', content: 'Home Sweet Home'},
  {title: 'School', content: 'Study Hard'},
  {title: 'Workplace', content: 'Make Money'},
];

export default class AccordionExample extends Component {
  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#A9DAD6',
        }}>
        <Text style={{fontWeight: '600'}}> {item.title}</Text>
        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: '#e3f1f1',
          padding: 10,
          fontStyle: 'italic',
        }}>
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Content padder>
        <Accordion
          dataArray={dataArray}
          expanded={0}
          icon="add"
          headerStyle={{backgroundColor: '#b7daf8'}}
          contentStyle={{backgroundColor: '#ddecf8'}}
          expandedIcon="remove"
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      </Content>
    );
  }
}
