import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import * as _ from 'lodash';
import {observer} from 'mobx-react-lite';

import {useRegionStore} from '../../Stores/Region';
import styles from './Styles';

const ListModal = props => {
  const {data, fetching, visible, setVisible, onSelect} = props;
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {
        // this.setModalVisible();
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTextContent}>
            <Text style={styles.modalTitle}>{props.title}</Text>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              // console.log('renderItem ', item);
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.modalItemContent}
                  onPress={() => {
                    onSelect(item);
                  }}>
                  <Text style={styles.modalItemText}>{item.nama}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{padding: 20}}
            ListFooterComponent={fetching && <ActivityIndicator />}
          />
        </View>
      </View>
    </Modal>
  );
};

const ProvinceSelect = observer(props => {
  const {provinces, provinceState, getProvince, getCity} = useRegionStore();
  const {fetching} = provinceState;
  const [visible, setVisible] = useState(false);
  // const [value, setValue] = useState(props.values);

  useEffect(() => {
    getProvince();
  }, [getProvince]);

  try {
    const {error, values, title, placeholder, onSubmit} = props;
    const showError = !!(error && error.length > 0);
    const textPlaceHolder = (
      <Text style={styles.textPlaceHolder}>{placeholder}</Text>
    );

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            style={[styles.select, props.styleInputText]}
            onPress={() => {
              setVisible(true);
            }}>
            {values ? (
              <Text style={styles.textValue}>{values.nama}</Text>
            ) : (
              <Text style={styles.textPlaceHolder}>{placeholder}</Text>
            )}
            {/* <Icon name="keyboard-arrow-down" size={25} color={'grey'} /> */}
          </TouchableOpacity>
          {showError ? <Text style={styles.textError}>{error}</Text> : null}
        </View>
        <ListModal
          visible={visible}
          onSelect={value => {
            onSubmit(value);
            setVisible(false);
            getCity({id_provinsi: value.id});
          }}
          setVisible={setVisible}
          fetching={fetching}
          data={provinces}
        />
      </View>
    );
  } catch (err) {
    console.log('ERROR Province ', err.message);
    return null;
  }
});

ProvinceSelect.defaultProps = {
  onSubmit: selectedValue => {},
  values: '',
  error: '',
  title: '',
  placeholder: '',
  styleInputText: {},
};

export default ProvinceSelect;
