import {Colors, Fonts} from '../../Themes';
import Scale from '../../Transforms/Scale';

const SIZE_BUTTON_FAB = Scale(55);
const SIZE_IMAGE_PROFILE = Scale(50);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  contentRightButton: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
  contentHeaderInput: {
    // flex: 1,
    height: Scale(35),
    flexDirection: 'row',
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    marginLeft: 5,
    fontWeight: '400',
    fontFamily: Fonts.type.regular,
  },
  badge: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
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
  imageProfile: {
    width: SIZE_IMAGE_PROFILE,
    height: SIZE_IMAGE_PROFILE,
    borderRadius: SIZE_IMAGE_PROFILE / 2,
    marginRight: 10,
  },
};

export default styles;
