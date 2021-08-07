import {Colors} from '../../Themes';
import Scale from '../../Transforms/Scale';

const SIZE_BUTTON_FAB = Scale(55);
const SIZE_ICON_FAB = Scale(24);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  btnFab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  iconNewPost: {
    height: SIZE_BUTTON_FAB,
    width: SIZE_BUTTON_FAB,
    borderRadius: SIZE_BUTTON_FAB / 2,
  },
};

export default styles;
