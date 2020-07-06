import React, {Component} from 'react';
import {Badge, Text, Button, Content, Icon} from 'native-base';

export default class BadgeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Content>
        <Button
          iconLeft
          onPress={() => this.setState({count: this.state.count + 1})}>
          <Icon name="home" />
          <Text>Click me!</Text>
          <Badge>
            <Text>{this.state.count}</Text>
          </Badge>
        </Button>
      </Content>
    );
  }
}
