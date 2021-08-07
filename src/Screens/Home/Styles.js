import {Colors, Fonts} from '../../Themes';
import Scale from '../../Transforms/Scale';

const SIZE_BUTTON_FAB = Scale(55);
const SIZE_ICON_FAB = Scale(24);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  contentHeaderInput: {
    flex: 0.7,
    height: Scale(35),
    flexDirection: 'row',
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  contentRightButton: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '400',
    fontFamily: Fonts.type.regular,
  },
  btnNavbar: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.backgroundGrey,
    margin: 5,
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
