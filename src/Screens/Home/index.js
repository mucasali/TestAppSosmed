import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {CustomFlatList} from '../../Components';
import PostItem from '../Post/Item';
import Styles from './Styles';
import {Images} from '../../Themes';
import DUMMY_DATA from './DumyData.json';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    } else if (buttonId === 'chat') {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'Chat.list',
        },
      });
    }
  }

  render() {
    try {
      console.log('HomeScreen ', this.props);

      return (
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
      );
    } catch (err) {
      console.log('ERROR Home.render ', err.message);
      return null;
    }
  }
}

HomeScreen.options = {
  topBar: {
    leftButtons: [
      {
        id: 'sideMenu',
        icon: require('../../Images/Icons/icon-side-menu.png'),
        // fontSize: 14,
        // showAsAction: 'always',
        // color: 'grey',
        // text: 'sidebar',
      },
    ],
    leftButtonColor: 'grey',
    rightButtons: [
      {
        id: 'notif',
        icon: Images.iconNotif,
      },
      {
        id: 'chat',
        // text: 'chat',
        icon: Images.iconChat,
        // iconInsets: {
        //   top: 58,
        //   left: 58,
        //   bottom: 58,
        //   right: 58,
        // },
      },
    ],
    rightButtonColor: 'grey',
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
