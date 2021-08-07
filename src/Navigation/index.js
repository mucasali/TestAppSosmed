import {Navigation} from 'react-native-navigation';

import RegisterComponent from './RegisterComponent';
import DefaultOptions from './Styles';
import {Images} from '../Themes';

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
        id: 'MAIN_STACK',
        children: [
          {
            bottomTabs: {
              id: 'bottom_tab_home',
              children: [
                {
                  component: {
                    name: 'Home.home',
                    options: {
                      bottomTab: {
                        text: 'Home', // Optional
                        icon: Images.iconTabHome, // Optional
                      },
                    },
                  },
                },
                {
                  component: {
                    name: 'Home.home',
                    options: {
                      bottomTab: {
                        text: 'Residents',
                        icon: Images.iconTabResidents,
                      },
                    },
                  },
                },
                {
                  component: {
                    name: 'Home.home',
                    options: {
                      bottomTab: {
                        text: 'Event',
                        icon: Images.iconTabEvent,
                      },
                    },
                  },
                },
                {
                  component: {
                    name: 'Home.home',
                    options: {
                      bottomTab: {
                        text: 'Sharing',
                        icon: Images.iconTabSharing,
                      },
                    },
                  },
                },
                {
                  component: {
                    name: 'Home.home',
                    options: {
                      bottomTab: {
                        text: 'Services',
                        icon: Images.iconTabServices,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
