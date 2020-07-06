/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import Item from '../component/Item';
import {PRIMARY, FONT_COLOR, VARIANT_PRIMARY, SECONDARY} from '../style/index';

class ReadNFC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      support: 'NO',
      enable: 'NO',
      id: 'null',
      payload: 'null',
      type: 'null',
      writeable: 'null',
      canread: 'null',
      storage: 'null',
    };
    this.convertString = this.convertString.bind(this);
    this.convertType = this.convertType.bind(this);
    this.convert = this.convert.bind(this);
  }

  componentDidMount() {
    NfcManager.start();
    NfcManager.isSupported()
      .then(() => {
        this.setState({support: 'YES'});
      })
      .catch(err => {
        console.log(err);
      });
    NfcManager.isEnabled()
      .then(this.setState({enable: 'YES'}))
      .catch(err => {
        console.log(err);
      });
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      console.log('tag', tag);
      console.log('payload', tag.ndefMessage[0].type);
      let id = tag.id;
      let payload = this.convertString(tag.ndefMessage[0].payload);
      let type = this.convert(tag.ndefMessage[0].type);
      let writeable = this.convert(tag.isWritable);
      let canread = this.convert(tag.canMakeReadOnly);
      let storage = tag.maxSize;

      this.setState({
        tag,
        id: id,
        payload: payload,
        type: type,
        writeable: writeable,
        canread: canread,
        storage: storage,
      });
      NfcManager.setAlertMessageIOS('I got your tag!');
      NfcManager.unregisterTagEvent().catch(() => 0);
    });
  }

  componentWillUnmount() {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  convertString(data) {
    let result = '';
    if (data.length > 0) {
      data.shift();
      for (let i = 0; i < data.length; i++) {
        result = result + String.fromCharCode(data[i]);
      }
    }
    return result;
  }

  convertType(data) {
    let result = '';
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        result = result + String.fromCharCode(data[i]);
      }
    }
    return result;
  }

  convert(value) {
    if (value === true) {
      return 'YES';
    } else if (value === false) {
      return 'NO';
    } else {
      let temp = this.convertType(value);
      if (temp === 'T') {
        return 'TEXT';
      } else if (temp === 'U') {
        return 'URL';
      }
    }
    return;
  }

  _cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);
  };

  _test = async () => {
    ToastAndroid.show('Ready to READ...', ToastAndroid.LONG);
    try {
      await NfcManager.registerTagEvent();
    } catch (ex) {
      ToastAndroid.show(ex, ToastAndroid.LONG);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={VARIANT_PRIMARY} />
        <View style={{height: '90%'}}>
          <Item
            icon="infocirlceo"
            color="#0067c6"
            title="Thiết bị hỗ trợ NFC?"
            value={this.state.support}
          />
          <Item
            icon="infocirlceo"
            color="#0067c6"
            title="NFC đã được mở?"
            value="YES"
          />
          <Item
            icon="creditcard"
            color="darkorange"
            title="Mã thẻ"
            value={this.state.id}
          />
          <Item
            icon="flag"
            color="darkgreen"
            title="Giá trị được ghi"
            value={this.state.payload}
          />
          <Item
            icon="tool"
            color="#0067c6"
            title="Kiểu dữ liệu"
            value={this.state.type}
          />
          <Item
            icon="flag"
            color="darkorange"
            title="Được phép ghi dữ liệu"
            value={this.state.writeable}
          />
          <Item
            icon="key"
            color="green"
            title="Chỉ có thể đọc dữ liệu"
            value={this.state.canread}
          />
          <Item
            icon="database"
            color="black"
            title="Dung lượng tối đa"
            value={this.state.storage}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '10%',
          }}>
          <TouchableOpacity
            style={{
              padding: 6,
              width: '60%',
              borderRadius: 5,
              alignItems: 'center',
              backgroundColor: SECONDARY,
            }}
            onPress={this._test}>
            <Text style={{color: FONT_COLOR, fontSize: 16, fontWeight: 'bold'}}>
              Read Ndef
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default ReadNFC;
