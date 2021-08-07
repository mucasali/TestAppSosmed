import React, {PureComponent, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {observer} from 'mobx-react-lite';

import {useUserStore} from '../../Stores/Users';
import Styles from './Styles';

class Item extends PureComponent {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={Styles.contentItem}>
        <Image source={{uri: item.picture}} style={Styles.image} />
        <View style={Styles.contentText}>
          <Text style={Styles.textTitle}>
            {`${item.title} ${item.firstName} ${item.lastName}`}
          </Text>
          <Text style={Styles.textEmail}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const Loading = props => {
  if (!props.isLoading) {
    return null;
  }
  return (
    <View style={Styles.contentLoading}>
      <ActivityIndicator />
    </View>
  );
};

const ListUserScreen = observer(props => {
  const {user, users, getUser} = useUserStore();
  const {id} = props.user;
  console.log('ListUserScreen.render ', users);

  useEffect(() => {
    getUser({page: 1, limit: 10});
  }, [getUser, id]);

  useEffect(() => {
    Navigation.events().registerNavigationButtonPressedListener(
      ({buttonId}) => {
        if (buttonId === 'add_') {
          Navigation.push(props.componentId, {
            component: {
              name: 'User.add',
            },
          });
        }
      },
    );
  }, [props.componentId]);

  try {
    const {fetching, meta} = user;
    return (
      <View style={Styles.container}>
        <FlatList
          data={users}
          renderItem={({item, index}) => {
            return <Item item={item} key={item.id} />;
          }}
          ListFooterComponent={<Loading isLoading={fetching} />}
          onEndReached={distance => {
            if (distance.distanceFromEnd > 0 && meta.loadMore) {
              getUser({page: meta.nextPage, limit: 10});
            }
          }}
        />
      </View>
    );
  } catch (err) {
    console.log('ERROR ListUserScreen ', err.message);
    return null;
  }
});

ListUserScreen.defaultProps = {
  user: {
    id: 1,
  },
};

ListUserScreen.options = {
  topBar: {
    title: {
      text: 'List User',
    },
    rightButtons: [
      {
        id: 'add_',
        // icon: Images.iconShare,
        text: 'Add',
        fontSize: 14,
        showAsAction: 'always',
      },
    ],
  },
};

export default ListUserScreen;
