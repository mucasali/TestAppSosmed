import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const DESIGN_WIDTH = 360;
const DESIGN_HEIGHT = 680;

export default scaleWidth => {
  return (scaleWidth * width) / DESIGN_WIDTH;
};

export function ScaleHeight(scaleHeight) {
  return (scaleHeight * height) / DESIGN_HEIGHT;
}
