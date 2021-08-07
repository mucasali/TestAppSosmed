import {StyleSheet, Platform, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const WIDTH = width - 40;

const OS = Platform.OS;

export default {
  container: {
    marginBottom: OS === 'ios' ? 2 : 10,
  },
  title: {
    paddingLeft: 5,
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    letterSpacing: 1,
  },
  select: {
    // height: 40,
    flexDirection: 'row',
    margin: 3,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: Colors.background,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 40,
  },
  searchContainer: {
    backgroundColor: '#F2F2F2',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: OS == 'ios' ? 10 : 0,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
  },
  textValue: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  textPlaceHolder: {
    color: '#ddd',
    fontSize: 14,
    fontWeight: '400',
  },
  textError: {
    textAlign: 'left',
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: WIDTH,
    maxHeight: height - 70,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTextContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  modalButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  modalItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  modalItemText: {
    fontSize: 14,
    color: 'black',
    flexWrap: 'wrap',
    paddingRight: 20,
  },
  modalTitle: {
    padding: 20,
    fontSize: 18,
    color: 'black',
  },
  cancelButton: {
    fontSize: 14,
    letterSpacing: 1,
    color: 'grey',
  },
  selectButton: {
    fontSize: 14,
    letterSpacing: 1,
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    margin: 5,
    borderColor: 'grey',
    borderWidth: 1,
  },
  labelTitle: {
    color: 'grey',
    letterSpacing: 1,
    marginBottom: 5,
    marginLeft: 3,
  },
  areaButtonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  areaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  areaText: {
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  textContainer: {
    flex: 1,
    paddingRight: 30,
  },
  checkbox: {
    marginLeft: -20,
  },
};
