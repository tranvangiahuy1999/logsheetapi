import React, {Component} from 'react';
import {Root, Button, Content, ActionSheet, Text} from 'native-base';
const BUTTONS = [
  {text: 'Home', icon: 'home', iconColor: '#2c8ef4'},
  {text: 'School', icon: 'school', iconColor: '#f42ced'},
  {text: 'Workplace', icon: 'briefcase', iconColor: '#ea943b'},
  {text: 'Delete', icon: 'trash', iconColor: '#fa213b'},
  {text: 'Cancel', icon: 'close', iconColor: '#25de5b'},
];
const DESTRUC_INDEX = 3;
const CANCEL_INDEX = 4;

export default class ActionSheetComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }

  onPress(value) {
    console.log(value.icon);
  }

  render() {
    return (
      <Root>
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  destructiveButtonIndex: DESTRUC_INDEX,
                  cancelButtonIndex: CANCEL_INDEX,
                  title: 'Testing ActionSheet...',
                },
                buttonIndex => {
                  this.onPress(BUTTONS[buttonIndex]);
                },
              )
            }>
            <Text>Activate ActionSheet</Text>
          </Button>
        </Content>
      </Root>
    );
  }
}
