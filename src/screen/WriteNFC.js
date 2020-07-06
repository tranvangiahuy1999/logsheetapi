/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  StyleSheet,
  Modal,
  StatusBar,
} from 'react-native';
import DraggableFlatlist from '../component/DraggableFlatlist';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WriteItem from '../component/WriteItem';
import {
  PRIMARY,
  FONT_COLOR,
  VARIANT_PRIMARY,
  VARIANT_SECONDARY,
  SECONDARY,
} from '../style/index';

import {insertNewItem, deleteItem, queryAllItem} from '../database/ItemSchemas';
import realm from '../database/ItemSchemas';

function buildUrlPayload(valueToWrite) {
  return Ndef.encodeMessage([Ndef.uriRecord(valueToWrite)]);
}

function buildTextPayload(valueToWrite) {
  return Ndef.encodeMessage([Ndef.textRecord(valueToWrite)]);
}

const RtdType = {
  URL: 0,
  TEXT: 1,
};

// const Data = [...Array(0)].map((d, index) => ({
//   key: '',
//   type: '',
//   content: '',
// }));

class WriteNFC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rtdType: RtdType.URL,
      modalVisible: false,
      data: [],
    };
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  UNSAFE_componentWillMount() {
    queryAllItem()
      .then(items => {
        this.setState({
          data: items,
        });
      })
      .catch(e => alert(`query item ${e}`));
  }

  componentDidMount() {
    NfcManager.start();
  }

  componentWillUnmount() {
    this._cleanUp();
  }

  setInput(text) {
    this.setState({
      value: text,
    });
  }

  renderItem = ({item, drag, isActive}) => {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          width: '99%',
          margin: 2,
          backgroundColor: isActive ? 'lightgray' : item.backgroundColor,
          borderWidth: 1,
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row',
        }}
        onLongPress={drag}>
        <Icon name="file-document" size={24} color="gray" />

        <View style={{flexDirection: 'column', width: '75%', marginLeft: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              width: '100%',
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
                width: '100%',
              }}>
              Kiểu:{'    '}
            </Text>
            {item.type}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: 'black',
              fontSize: 16,
              width: '100%',
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
                width: '100%',
              }}>
              Giá trị:{'  '}
            </Text>
            {item.content}
          </Text>
        </View>
        <Icon name="arrow-up-down-bold-outline" size={24} color="gray" />
        <Icon
          name="trash-can"
          size={24}
          color="gray"
          onPress={() => this.deleteRow(item.key)}
        />
      </TouchableOpacity>
    );
  };

  deleteRow(key) {
    console.log(key);
    deleteItem(key)
      .then()
      .catch(e => `delete ${e}`);

    queryAllItem()
      .then(items => {
        this.setState({
          data: items,
        });
      })
      .catch(e => alert(`query item ${e}`));
  }

  addRow() {
    if (this.state.value.trim() === '') {
      alert('Vui lòng kiểm tra giá trị nhập');
      return;
    }

    const newItem = {
      type: this.state.rtdType === 1 ? 'TEXT' : 'URL',
      content: this.state.value,
    };

    insertNewItem(newItem)
      .then()
      .catch(e => alert(`Insert new item ${e}`));

    queryAllItem()
      .then(items => {
        this.setState({
          data: items,
        });
      })
      .catch(e => alert(`query item ${e}`));

    //Clear value data
    this.setState({
      value: '',
      modalVisible: false,
    });
    return;
  }

  render() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <StatusBar backgroundColor={VARIANT_PRIMARY} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.titlebackground}>
                <Text style={styles.modaltitle}>Thêm dữ liệu ghi</Text>
              </View>
              <TextInput
                numberOfLines={1}
                style={{
                  borderWidth: 1,
                  width: '95%',
                  borderColor: 'gray',
                  borderRadius: 5,
                  marginTop: 20,
                }}
                onChangeText={text => {
                  this.setState({value: text});
                }}
                value={this.state.value}
                placeholder="www.google.com"
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: SECONDARY,
                }}>
                {Object.keys(RtdType).map(key => (
                  <TouchableOpacity
                    key={key}
                    style={{
                      padding: 12,
                      backgroundColor:
                        this.state.rtdType === RtdType[key]
                          ? SECONDARY
                          : FONT_COLOR,
                    }}
                    onPress={() => this.setState({rtdType: RtdType[key]})}>
                    <Text
                      style={{
                        color:
                          this.state.rtdType === RtdType[key]
                            ? FONT_COLOR
                            : SECONDARY,
                      }}>
                      {key}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    margin: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 40,
                    backgroundColor: 'darkred',
                    borderRadius: 5,
                  }}
                  onPress={() =>
                    this.setState({modalVisible: false, value: ''})
                  }>
                  <Text style={{color: FONT_COLOR, fontSize: 16}}>Huỷ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    margin: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 40,
                    backgroundColor: 'green',
                    borderRadius: 5,
                  }}
                  onPress={this.addRow}>
                  <Text style={{color: FONT_COLOR, fontSize: 16}}>Xong</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            paddingBottom: 5,
            borderBottomWidth: 1,
            width: '100%',
            height: '20%',
            alignItems: 'center',
          }}>
          <WriteItem
            icon="md-add-circle"
            color="darkgreen"
            pressHandle={() => {
              this.setState({modalVisible: true});
            }}
            text="Thêm dữ liệu ghi"
          />
          <WriteItem
            icon="md-download"
            color="darkgreen"
            pressHandle={this._testNdef}
            text="Ghi dữ liệu vào thẻ"
          />
        </View>
        <View style={{height: '80%'}}>
          <DraggableFlatlist
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.key}
            onDragEnd={({data}) => {
              this.setState({data});
            }}
          />
        </View>
      </View>
    );
  }

  _cleanUp = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  };

  _testNdef = async () => {
    ToastAndroid.show('Ready to WRITE...', ToastAndroid.LONG);
    try {
      let resp = await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: 'Ready to write some NFC tags!',
      });
      console.log(resp);
      let ndef = await NfcManager.getNdefMessage();
      console.log(ndef);
      let bytes;
      if (this.state.data[0].type === 'TEXT') {
        bytes = buildTextPayload(this.state.data[0].content);
      } else if (this.state.data[0].type === 'URL') {
        bytes = buildUrlPayload(this.state.data[0].content);
      }
      await NfcManager.writeNdefMessage(bytes);
      ToastAndroid.show('successfully write Ndef', ToastAndroid.LONG);
      await NfcManager.setAlertMessageIOS('I got your tag!');
      this._cleanUp();
    } catch (ex) {
      ToastAndroid.show(ex, ToastAndroid.LONG);
      this._cleanUp();
    }
  };
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titlebackground: {
    backgroundColor: VARIANT_PRIMARY,
    width: '100%',
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  modaltitle: {
    color: FONT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});

export default WriteNFC;
