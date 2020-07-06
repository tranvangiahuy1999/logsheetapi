import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY, FONT_COLOR} from '../style/index';
// const [dontshowpw, setDontshowpw] = useState(true);
// const [eyeicon, setEyeicon] = useState('eye');

class PasswordHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dontshowpw: true,
      eyeicon: 'eye',
    };
    this.hidePassword = this.hidePassword.bind(this);
  }

  hidePassword() {
    if (this.state.dontshowpw === true && this.state.eyeicon === 'eye') {
      this.setState({
        dontshowpw: false,
        eyeicon: 'eye-slash',
      });
      // setDontshowpw(false);
      // setEyeicon('eye-slash');
    } else if (
      this.state.dontshowpw === false &&
      this.state.eyeicon === 'eye-slash'
    ) {
      this.setState({
        dontshowpw: true,
        eyeicon: 'eye',
      });
      // setDontshowpw(true);
      // setEyeicon('eye');
    }
  }
  render() {
    return (
      <View style={styles.inputboxpw}>
        <View style={styles.icon}>
          <Icon name="key" size={24} color={FONT_COLOR} />
        </View>
        <TextInput
          style={styles.inputtextpw}
          placeholder="Mật khẩu"
          onChangeText={this.props.password}
          secureTextEntry={this.state.dontshowpw}
        />
        <View
          style={{
            backgroundColor: FONT_COLOR,
            width: '10%',
            borderTopEndRadius: 5,
            borderBottomEndRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name={this.state.eyeicon}
            size={24}
            color="gray"
            onPress={this.hidePassword}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputboxpw: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: FONT_COLOR,
    marginTop: 10,
    borderRadius: 5,
  },
  icon: {
    width: '10%',
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
  },
  inputtextpw: {
    fontSize: 16,
    width: '80%',
  },
});

export default PasswordHide;
