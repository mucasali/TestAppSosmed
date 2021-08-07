/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';

import {Header} from '../../Components';
import {Colors, Fonts, Images} from '../../Themes';
import Scale from '../../Transforms/Scale';
import DUMMY_DATA from './DumyData.json';

const SIZE_IMAGE_PROFILE = Scale(50);
const SIZE_ICON_MENU = Scale(40);
const SIZE_ICON_ALERT = Scale(24);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
    padding: 10,
  },
  content: {
    padding: 10,
  },
  imageProfile: {
    width: SIZE_IMAGE_PROFILE,
    height: SIZE_IMAGE_PROFILE,
    borderRadius: SIZE_IMAGE_PROFILE / 2,
    marginRight: 10,
  },
  contentItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  btnEmergency: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: Colors.backgroundRedLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMenu: {
    height: SIZE_ICON_MENU,
    width: SIZE_ICON_MENU,
    marginRight: 5,
  },
  iconAlert: {
    height: SIZE_ICON_ALERT,
    width: SIZE_ICON_ALERT,
    marginRight: 5,
  },
};

function Drawer(props) {
  console.log('Drawer');
  const {user} = props;

  const handleSideMenu = () => {
    console.log('handleSideMenu ', props.componentId);
    Navigation.mergeOptions(props.componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
  };

  const renderHeader = () => {
    return (
      <Header>
        <Image
          source={{uri: user.profile.avatar}}
          style={styles.imageProfile}
        />
        <View style={{flex: 1}}>
          <Text style={[Fonts.style.regularBoldBlack, {fontSize: 24}]}>
            {user.profile.name}
          </Text>
          <TouchableOpacity>
            <Text style={Fonts.style.normalRegularGreen}>View my profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSideMenu}>
          <Icon name="close" size={35} />
        </TouchableOpacity>
      </Header>
    );
  };

  const renderMenu = (icon = '', title = '') => {
    return (
      <TouchableOpacity style={styles.contentItem}>
        <Image source={icon} style={styles.iconMenu} />
        <Text style={Fonts.style.regularBoldBlack}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <View style={styles.content}>
        <TouchableOpacity style={styles.btnEmergency}>
          <Image source={Images.iconAlert} style={styles.iconAlert} />
          <Text style={Fonts.style.regularBoldRed}>Emergency Button</Text>
        </TouchableOpacity>
        {renderMenu(Images.iconMenuInvoice, 'Invoice')}
        {renderMenu(Images.iconMenuDelivery, 'Delivery Note')}
        {renderMenu(Images.iconMenuBuilding, 'Building Management Contacts')}
        {renderMenu(Images.iconMenuSettings, 'Settings')}
      </View>
    </SafeAreaView>
  );
}

Drawer.defaultProps = {
  user: DUMMY_DATA,
};

export default Drawer;
