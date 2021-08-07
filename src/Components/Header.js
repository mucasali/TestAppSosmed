import React from 'react';
import {View} from 'react-native';

import {Colors} from '../Themes';
import Scale from '../Transforms/Scale';

const HEIGHT_HEADER = Scale(55);

const styles = {
  container: {
    backgroundColor: Colors.backgroundWhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEIGHT_HEADER,
    padding: 10,
  },
};

function Header(props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

Header.defaultProps = {
  children: null,
  leftButton: null,
  title: '',
  rightButton: '',
  style: {},
};

export default Header;
