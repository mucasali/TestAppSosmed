/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import {CustomFlatList, Header} from '../../Components';
import Styles from './Styles';
import {Fonts, Images, Colors} from '../../Themes';
import DUMMY_DATA from './DumyData.json';

class ChatScreen extends PureComponent {
  renderHeader = () => {
    return (
      <Header>
        <TouchableOpacity>
          <Icon name="arrow-back" color="black" size={25} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>Chat</Text>
        </View>
        <View style={Styles.contentRightButton}>
          <TouchableOpacity style={Styles.btnNavbar} onPress={this.toChat}>
            <Image source={Images.iconPlus} style={Styles.iconMenu} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.btnNavbar}>
            <Image source={Images.iconMenu} style={Styles.iconMenu} />
          </TouchableOpacity>
        </View>
      </Header>
    );
  };

  renderBadge(badge = 0) {
    return (
      <View style={Styles.badge}>
        <Text style={Fonts.style.smallRegularWhite}>{badge}</Text>
      </View>
    );
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={Styles.contentItem}>
        <Image source={{uri: item.profile}} style={Styles.imageProfile} />
        <View style={{flex: 1, marginHorizontal: 5}}>
          <Text style={Fonts.style.regularBoldBlack}>{item.name}</Text>
          <Text style={Fonts.style.normalRegularGrey}>{item.message}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={Fonts.style.normalRegularGrey}>
            {moment(item.created_at).format('HH:MM')}
          </Text>
          {item.badge ? this.renderBadge(item.badge) : <View />}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    try {
      console.log('ChatScreen ', this.props);

      return (
        <SafeAreaView style={Styles.containerWhite}>
          {this.renderHeader()}
          <View style={{backgroundColor: 'white', padding: 10}}>
            <View style={Styles.contentHeaderInput}>
              <Icon name="search" size={20} color={Colors.textGrey} />
              <TextInput
                style={Styles.textInput}
                placeholder="Chat Friend"
                placeholderTextColor={Colors.textGrey}
              />
            </View>
          </View>
          <View style={Styles.container}>
            <CustomFlatList
              data={this.props.data.data}
              renderItem={this.renderItem}
            />
          </View>
        </SafeAreaView>
      );
    } catch (err) {
      console.log('ERROR Home.render ', err.message);
      return null;
    }
  }
}

ChatScreen.options = {
  topBar: {
    visible: false,
    title: {
      text: 'Chat',
    },
    searchBar: true,
    rightButtons: [
      {
        id: 'menu',
        // text: 'chat',
        icon: Images.iconMenu,
      },
      {
        id: 'plus',
        icon: Images.iconPlus,
      },
    ],
    rightButtonColor: 'grey',
  },
};

ChatScreen.defaultProps = {
  data: DUMMY_DATA,
};

export default ChatScreen;
