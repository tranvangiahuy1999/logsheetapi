import React, {Component} from 'react';
import {Container, Header, Title, Left, Right, Body} from 'native-base';
import IconBtn from './IconBtn';
import {LOGIN} from '../constant/index';

export default class HeaderComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#0067c6'}}>
          <Left>
            <IconBtn name="view-list" />
          </Left>
          <Body>
            <Title style={{fontWeight: 'bold'}}>LogSheet NFC</Title>
          </Body>
          <Right>
            <IconBtn
              name="logout"
              onPress={() => this.props.navigation.replace(LOGIN)}
            />
          </Right>
        </Header>
      </Container>
    );
  }
}
