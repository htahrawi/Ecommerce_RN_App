import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../theme/Colors';

const CustomButton = ({
  onPress,
  title,
  type = 'PRIMARY',
  myBtnStyle,
  myTxtStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles[`btn_${type}`], {...myBtnStyle}]}
      onPress={onPress}>
      <Text style={[styles.btnText, styles[`txt_${type}`], {...myTxtStyle}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    width: 200,
    borderRadius: 10,
    elevation: 4,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn_PRIMARY: {
    backgroundColor: Colors.primary,
  },
  txt_PRIMARY: {
    color: Colors.white,
  },
  btn_SECONDARY: {
    backgroundColor: Colors.white,
  },
  txt_SECONDARY: {
    color: Colors.primary,
  },
});
