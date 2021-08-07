import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';

const OS = Platform.OS;
let LOCATION = {
  lat: 0,
  lng: 0,
};
let ADDRESS = {
  feature: null,
  postalCode: 0,
  subLocality: '',
  subAdminArea: '',
  countryCode: 'ID',
  formattedAddress: '',
  position: {
    lat: 0,
    lng: 0,
  },
  adminArea: '',
  streetName: '',
  streetNumber: null,
  country: 'Indonesia',
  locality: '',
};

export const getPermissionAndroid = async () => {
  try {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  } catch (err) {
    console.log('ERROR getPermissionLocation ', err.message);
    return false;
  }
};

export const getPermissionIos = async () => {
  try {
    return await Geolocation.requestAuthorization('whenInUse');
  } catch (err) {
    console.log('ERROR getPermissionLocation ', err.message);
    return false;
  }
};

export const getAddress = async (position = {lat: 0, lng: 0}) => {
  try {
    console.log('getAddress ', position);
    return await Geocoder.geocodePosition(position);
  } catch (err) {
    console.log('ERROR getAddress ', err.message);
    return null;
  }
};

export const getLocation = async (
  successCallback = (coordinate, address) => {},
  errorCallback = (message) => {},
) => {
  try {
    let granted = true;
    if (OS === 'android') {
      granted = await getPermissionAndroid();
    } else {
      granted = await getPermissionIos();
    }
    if (granted) {
      Geolocation.getCurrentPosition(
        async (info) => {
          console.log('GetCurrentPosition ', info);
          LOCATION = info.coords;
          const {latitude, longitude} = info.coords;
          const address = await getAddress({
            lat: latitude,
            lng: longitude,
          });
          console.log('GeocoderResult ', address);
          successCallback(info.coords, address);
        },
        (err) => {
          console.log('Error GetCurrentPosition ', err);
          errorCallback(err.messsage);
        },
        {
          timeout: 3000,
        },
      );
    }
    return null;
  } catch (err) {
    console.log('ERROR getLocation ', err.message);
    return null;
  }
};
