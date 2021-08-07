import {Navigation} from 'react-native-navigation';

// User
import ListUserScreen from '../Screens/User/List';
import UserAddScreen from '../Screens/User/Add';
import ResultScreen from '../Screens/User/Result';

import DrawerScreen from '../Screens/Drawer/';

import HomeScreen from '../Screens/Home';

import ChatScreen from '../Screens/Chat';

export default function registerScreen() {
  Navigation.registerComponent('User.list', () => ListUserScreen);
  Navigation.registerComponent('User.add', () => UserAddScreen);
  Navigation.registerComponent('User.result', () => ResultScreen);

  Navigation.registerComponent('Navigation.drawer', () => DrawerScreen);

  Navigation.registerComponent('Home.home', () => HomeScreen);

  Navigation.registerComponent('Chat.list', () => ChatScreen);
}
