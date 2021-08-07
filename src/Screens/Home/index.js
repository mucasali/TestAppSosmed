import React, {PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import {CustomFlatList, Header} from '../../Components';
import PostItem from '../Post/Item';
import Styles from './Styles';
import {Images, Colors} from '../../Themes';
import DUMMY_DATA from './DumyData.json';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  toChat = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Chat.list',
      },
    });
  };

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }

  renderHeader = () => {
    return (
      <Header>
        <TouchableOpacity>
          <Image source={Images.iconSideMenu} style={Styles.iconMenu} />
        </TouchableOpacity>
        <View style={Styles.contentHeaderInput}>
          <Icon name="search" size={20} color={Colors.textGrey} />
          <TextInput
            style={Styles.textInput}
            placeholder="Friends, events, food, etc."
            placeholderTextColor={Colors.textGrey}
          />
        </View>
        <View style={Styles.contentRightButton}>
          <TouchableOpacity style={Styles.btnNavbar} onPress={this.toChat}>
            <Image source={Images.iconChat} style={Styles.iconMenu} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.btnNavbar}>
            <Image source={Images.iconNotif} style={Styles.iconMenu} />
          </TouchableOpacity>
        </View>
      </Header>
    );
  };

  render() {
    try {
      console.log('HomeScreen ', this.props);

      return (
        <SafeAreaView style={Styles.containerWhite}>
          {this.renderHeader()}
          <View style={Styles.container}>
            <CustomFlatList
              data={this.props.data.data}
              renderItem={({item, index}) => {
                return <PostItem post={item} />;
              }}
            />
            <TouchableOpacity style={Styles.btnFab}>
              <Image source={Images.iconNewPost} style={Styles.iconNewPost} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    } catch (err) {
      console.log('ERROR Home.render ', err.message);
      return null;
    }
  }
}

HomeScreen.options = {
  topBar: {
    visible: false,
  },
  sideMenu: {
    id: 'sideMenu',
    left: {
      component: {
        id: 'Drawer',
        name: 'Navigation.drawer',
      },
    },
  },
};

HomeScreen.defaultProps = {
  data: DUMMY_DATA,
};

export default HomeScreen;
