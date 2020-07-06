import React, {Component} from 'react';
import {Container, Footer, FooterTab, Button, Text} from 'native-base';
export default class FooterComp extends Component {
  render() {
    return (
      <Container>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Container>
    );
  }
}
