import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import moment from 'moment';

import {CustomFlatList} from '../../Components';
import PostItem from '../Post/Item';
import Styles from './Styles';
import {Fonts, Images} from '../../Themes';
import DUMMY_DATA from './DumyData.json';

class ChatScreen extends PureComponent {
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
        <View style={{flex: 1,}}>
          {/* <View>
            <TextInput />
          </View> */}
          <View style={Styles.container}>
            <CustomFlatList
              data={this.props.data.data}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    } catch (err) {
      console.log('ERROR Home.render ', err.message);
      return null;
    }
  }
}

ChatScreen.options = {
  topBar: {
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
