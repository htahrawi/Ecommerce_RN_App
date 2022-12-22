import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../theme/Colors';

const {height, width} = Dimensions.get('window');
const CustomInput = ({
  label,
  placeholder,
  iconPath,
  isPassword = false,
  onChangeText,
  errorText='',
  value,
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  const [errorMessage, setErrorMessage] = useState(errorText);
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, errorMessage?  styles.containerError: null]}>
        <Image style={styles.icon} source={iconPath} resizeMode="stretch" />
        <TextInput
          placeholder={placeholder}
          style={styles.txtInput}
          secureTextEntry={showPassword}
          onChangeText={onChangeText}
          onFocus={()=>{setErrorMessage('')}}
        />
        {isPassword ? (
          <TouchableOpacity
            style={styles.hideIcon}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Image
              source={
                showPassword
                  ? require('../assets/icons/hide.png')
                  : require('../assets/icons/show.png')
              }
              style={styles.hideIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {errorMessage?
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMessage}</Text>
      </View>: null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 10,
    // margin: '.05%',
    width: width * 0.95,
    justifyContent: 'center',
    padding: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 15,
  },
  inputContainer: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 15,
    borderColor: Colors.gray[100],
    backgroundColor: Colors.gray[100],
    width: '100%',
    elevation: 3
  },
  containerError: {
    borderWidth: 1.5,
    borderColor: Colors.error,
  },
  txtInput: {
    backgroundColor: Colors.gray[100],
    width: '80%',
    height: 45,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  hideIcon: {
    width: 24,
    height: 20,
    alignSelf: 'center',
  },
  errorContainer: {
    marginTop: 3,
    paddingLeft: 20,
  },
  errorText: {
    color: Colors.error,
    fontSize: 14,
  },
});
