import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Styles from './Styles';

const renderValue = (title = '', value = '') => {
  return (
    <View style={Styles.contentValue}>
      <View style={{flex: 0.4}}>
        <Text style={Styles.textTitle}>{title}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={Styles.textValue}>{value}</Text>
      </View>
    </View>
  );
};

const result = props => {
  try {
    const {biodata, realLocation} = props;
    const {coordinate, address} = realLocation;
    return (
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.content}>
            {renderValue('First name', biodata.firstName)}
            {renderValue('Last name', biodata.lastName)}
            {renderValue('Province', biodata.province.nama)}
            {renderValue('City', biodata.city.nama)}
            {renderValue('District', biodata.district.nama)}
            {renderValue('Village', biodata.village.nama)}
            <View style={Styles.border} />
            <View>
              <Text style={Styles.textTitle}>Coordinate</Text>
              <Text style={Styles.textValue}>
                {coordinate && JSON.stringify(coordinate)}
              </Text>
            </View>
            <View>
              <Text style={Styles.textTitle}>Address</Text>
              <Text style={Styles.textValue}>
                {address && JSON.stringify(address)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } catch (err) {
    console.tron.log('ERROR ', err.message);
    return null;
  }
};

result.defaultProps = {
  biodata: {
    firstName: 'first name',
    lastName: 'last name',
    province: {nama: 'province'},
    city: {nama: 'city'},
    district: {nama: 'district'},
    village: {nama: 'village'},
  },
  realLocation: {
    address: {},
    coordinate: {},
  },
};

result.options = {
  topBar: {
    title: {
      text: 'Result',
    },
  },
};

export default result;
