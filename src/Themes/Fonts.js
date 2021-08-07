import Colors from './Colors';

const type = {
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  extraBold: 'OpenSans-ExtraBold',
  extraBoldItalic: 'OpenSans-ExtraBoldItalic',
  italic: 'OpenSans-Italic',
  light: 'OpenSans-Light',
  lightItalic: 'OpenSans-LightItalic',
  regular: 'OpenSans',
  semiBold: 'OpenSans-SemiBold',
  semiBoldItalic: 'OpenSans-SemiBoldItalic',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  title: 18,
  regular: 16,
  normal: 14,
  small: 12,
  tiny: 8.5,
};

const style = {
  titleBoldBlack: {
    fontSize: size.title,
    fontFamily: type.bold,
    fontWeight: '600',
    color: Colors.textBlack,
  },
  titleBoldGreen: {
    fontSize: size.title,
    fontFamily: type.bold,
    fontWeight: '600',
    color: Colors.textGreen,
  },
  regularBoldBlack: {
    fontSize: size.regular,
    fontFamily: type.bold,
    fontWeight: '600',
    color: Colors.textBlack,
  },
  regularBoldRed: {
    fontSize: size.regular,
    fontFamily: type.bold,
    fontWeight: '600',
    color: Colors.textRed,
  },
  regularRegularBlack: {
    fontSize: size.regular,
    fontFamily: type.regular,
    fontWeight: '400',
    color: Colors.textBlack,
  },
  regularRegularBlue: {
    fontSize: size.regular,
    fontFamily: type.regular,
    fontWeight: '400',
    color: Colors.textBlue,
  },
  regularRegularGrey: {
    fontSize: size.regular,
    fontFamily: type.regular,
    fontWeight: '400',
    color: Colors.textGrey,
  },
  normalRegularBlack: {
    fontSize: size.normal,
    fontFamily: type.regular,
    fontWeight: '400',
    color: Colors.textBlack,
  },
  normalRegularGrey: {
    fontSize: size.normal,
    fontFamily: type.regular,
    fontWeight: '400',
    color: Colors.textGrey,
  },
  normalRegularGreen: {
    fontSize: size.normal,
    fontFamily: type.regular,
    fontWeight: '400',
    color: Colors.textGreen,
  },
  smallRegularGrey: {
    fontSize: size.small,
    fontFamily: type.regular,
    fontWeight: '400',
    color: Colors.textGrey,
  },
  smallRegularWhite: {
    fontSize: size.small,
    fontFamily: type.regular,
    fontWeight: '400',
    color: '#FFF',
  },
};

export default {
  type,
  size,
  style,
};
