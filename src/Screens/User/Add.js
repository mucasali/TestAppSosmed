import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {observer} from 'mobx-react-lite';
import {Formik} from 'formik';
import * as Yup from 'yup';

// import {useUserStore} from '../../Stores/Users';
import ProvinceSelect from '../Common/Province';
import CitySelect from '../Common/City';
import DistrictSelect from '../Common/District';
import VillageSelect from '../Common/Village';
import Styles from './Styles';
import {Input} from '../../Components';
import {getLocation} from '../../Services/Location';

const schema = Yup.object().shape({
  firstName: Yup.string().required('First name is required field'),
  lastName: Yup.string().required('last name is required field'),
  province: Yup.object().required('Province is required field'),
  city: Yup.object().required('City is required field'),
  district: Yup.object().required('District is required field'),
  village: Yup.object().required('Village is required field'),
});

const renderForm = props => {
  return (
    <ScrollView>
      <View style={Styles.content}>
        <Input
          name="firstName"
          label
          title="First Name"
          value={props.values.firstName}
          error={props.errors.firstName}
          setFieldValue={props.setFieldValue}
        />
        <Input
          name="lastName"
          label
          title="Last Name"
          value={props.values.lastName}
          error={props.errors.lastName}
          setFieldValue={props.setFieldValue}
        />
        <ProvinceSelect
          name="province"
          label
          title="Province"
          values={props.values.province}
          error={props.errors.province}
          onSubmit={value => {
            console.log('onSubmit ', value);
            props.setFieldValue('province', value);
          }}
        />
        <CitySelect
          name="city"
          label
          title="City"
          values={props.values.city}
          error={props.errors.city}
          onSubmit={value => {
            console.log('onSubmit ', value);
            props.setFieldValue('city', value);
          }}
        />
        <DistrictSelect
          name="district"
          label
          title="District"
          values={props.values.district}
          error={props.errors.district}
          onSubmit={value => {
            console.log('onSubmit ', value);
            props.setFieldValue('district', value);
          }}
        />
        <VillageSelect
          name="village"
          label
          title="Village"
          values={props.values.village}
          error={props.errors.village}
          onSubmit={value => {
            console.log('onSubmit ', value);
            props.setFieldValue('village', value);
          }}
        />

        <TouchableOpacity
          onPress={props.handleSubmit}
          style={Styles.buttonSubmit}>
          <Text style={Styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const UserAddScreen = observer(props => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getLocation((coord, address) => {
      setLocation({
        coordinate: coord,
        address,
      });
    });
  }, []);

  const handleSubmit = (values, actions) => {
    console.log('handleSubmit ', values, actions, location);
    Navigation.push(props.componentId, {
      component: {
        name: 'User.result',
        passProps: {
          biodata: values,
          realLocation: location,
        },
      },
    });
  };

  return (
    <View style={Styles.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          province: '',
          city: '',
          district: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnChange={false}>
        {formikProps => renderForm(formikProps)}
      </Formik>
    </View>
  );
});

UserAddScreen.options = {
  topBar: {
    title: {
      text: 'Add User',
    },
  },
};

export default UserAddScreen;
