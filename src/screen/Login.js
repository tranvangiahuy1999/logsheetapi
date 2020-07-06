import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  ToastAndroid,
  Keyboard,
} from 'react-native';

import {PRIMARY, FONT_COLOR, SECONDARY} from '../style/index';
import PasswordHide from '../component/PasswordHide';
import {BOTTOMTAB} from '../constant/index';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'super',
      password: 'abcdef@123456',
      response: false,
    };
    this.LoginHandle = this.LoginHandle.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  LoginHandle() {
    if (
      this.state.username.trim() === '' ||
      this.state.password.trim() === ''
    ) {
      alert('Xin vui lòng kiểm tra tài khoản và mật khẩu');
      return;
    }
    // fetch('http://logsheetkdn.idtek.com.vn/api/app_dev.php/api/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data.success);
    //     this.setState({response: data.success});
    //     if (this.state.response === true) {
    //       this.props.navigation.replace(BOTTOMTAB);
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     ToastAndroid.show(error, ToastAndroid.LONG);
    //   });
    this.props.navigation.replace(BOTTOMTAB);
  }

  setInput(text) {
    this.setState({
      password: text,
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../image/background.jpg')}
          style={styles.container}>
          <Image
            source={require('../image/icon.png')}
            style={{width: 160, height: 160}}
          />
          <Text style={styles.title}>LogSheet NFC</Text>
          <View style={styles.inputboxus}>
            <View style={styles.icon}>
              <Icon name="user-o" size={24} color={FONT_COLOR} />
            </View>
            <TextInput
              style={styles.inputtext}
              placeholder="Tên đăng nhập"
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
          </View>
          <PasswordHide password={this.setInput} />
          <TouchableOpacity
            style={styles.btnwrapper}
            onPress={this.LoginHandle}>
            <Text style={{color: FONT_COLOR, fontSize: 18}}>Đăng nhập</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: FONT_COLOR,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputboxus: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: FONT_COLOR,
    marginTop: 100,
    borderRadius: 5,
  },
  inputtext: {
    fontSize: 16,
    width: '90%',
  },
  icon: {
    width: '10%',
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
  },
  btnwrapper: {
    backgroundColor: PRIMARY,
    width: '90%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
