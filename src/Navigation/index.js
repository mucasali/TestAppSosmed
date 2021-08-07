import {Navigation} from 'react-native-navigation';
import RegisterComponent from './RegisterComponent';
import DefaultOptions from './Styles';

RegisterComponent();

Navigation.setDefaultOptions({
  statusBar: DefaultOptions.statusBar,
  topBar: DefaultOptions.topBar,
  bottomTabs: DefaultOptions.bottomTabs,
  bottomTab: DefaultOptions.bottomTab,
  layout: DefaultOptions.layout,
  animations: DefaultOptions.animations,
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home.home',
            },
          },
        ],
      },
    },
  });
});
