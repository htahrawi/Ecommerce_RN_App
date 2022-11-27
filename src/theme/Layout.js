import {Dimensions} from 'react-native';

const spacing = {
  none: 0,
  tiny: 4,
  small: 8,
  medium: 12,
  normal: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 28,
};

const {height, width} = Dimensions.get('window');
const screen = {
  height,
  width,
  content: width * 0.8,
};

export {spacing, screen};
