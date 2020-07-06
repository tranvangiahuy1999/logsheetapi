import React, {Component} from 'react';
import {Container, Content, Text, Footer, Header} from 'native-base';
import HeaderComp from './Header';
import FooterComp from './Footer';
import AccordionExample from '../temp/Accordion';
import ActionSheetComp from './ActionSheet';
import BadgeComp from './Badge';

export default class NativeBaseApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header>
          <HeaderComp />
        </Header>
        <Content>
          <AccordionExample />
          <ActionSheetComp />
          <BadgeComp />
        </Content>
        <Footer>
          <FooterComp />
        </Footer>
      </Container>
    );
  }
}
