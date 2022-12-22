import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../theme/Colors';
import {CustomButton, CustomInput} from '../../../components';
import axios from 'axios';

const {height, width} = Dimensions.get('window');
const SignInScreen = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const onSignUpPressed = async ()=>{
    if (username.length < 3  ) {
      setUsernameError('USERNAME MUST BE MORE THAN 3')
      return Alert.alert('Invalid Input', 'USERNAME MUST BE MORE THAN 3');
    }
    if ( email.length < 10 || !email.includes('@')  ) {
      setEmailError('Enter a correct email')
      return Alert.alert('Invalid Input', 'Enter a correct email');
    }
    if ( password.length < 6 ) {
      setPasswordError('PASSWORD MUST BE MORE THAN 3')
      return Alert.alert('Invalid Input', 'PASSWORD MUST BE MORE THAN 3');
    }
    if ( confirmPassword.length == password) {
      setConfirmPasswordError('Confirm PASSWORD MUST BE MATCHED PASSWROD')
      return Alert.alert('Invalid Input', 'Confirm PASSWORD MUST BE MATCHED PASSWROD');
    }
    const respnose = await axios.post('https://fakestoreapi.com/users', {
      username,
      password,
    });
    if (!respnose.data) {
      Alert.alert('Failed Message', 'Somthing went wrong while regiteration');
    }else{
      Alert.alert('Success Message', 'Registeration process has done successfully');
      props.navigation.navigate('main')
    }
  }
  // console.log(usernameError);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <View>
        <Text style={styles.greeting}>Create Account</Text>
        <Text style={styles.text}>Sign up to continue.</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center', padding: 20}}>
        <CustomInput
          label="Username"
          placeholder={'husam.tahrawi'}
          value={username}
          iconPath={require('../../../assets/icons/user.png')}
          onChangeText={value => {
            setUsername(value);
          }}
          errorText={usernameError ? usernameError : ''}
          // onEndEditing={() => {
          //   username.length > 3
          //     ? setUsernameError('USERNAME MUST BE MORE 3')
          //     : '';
          //   // setUsernameError('MUST MORE 3')
          // }}
        />
        <CustomInput
          label="Email"
          placeholder={'example@gmail.com'}
          value={email}
          iconPath={require('../../../assets/icons/email.png')}
          onChangeText={value => {
            setEmail(value);
          }}
          errorText={emailError ? emailError : ''}
        />
        <CustomInput
          label="Password"
          placeholder={'*********'}
          value={password}
          iconPath={require('../../../assets/icons/lock.png')}
          onChangeText={value => {
            setPassword(value);
          }}
          isPassword
          errorText={passwordError ? passwordError : ''}
        />
        <CustomInput
          label="Confirm Password"
          placeholder={'*********'}
          value={confirmPassword}
          iconPath={require('../../../assets/icons/lock.png')}
          onChangeText={value => {
            setConfirmPassword(value);
          }}
          isPassword
          errorText={confirmPasswordError ? confirmPasswordError : ''}
        />
        <CustomButton
          title="Sign Up"
          myBtnStyle={{alignSelf: 'center', width: '100%', marginTop: 30}}
          onPress={onSignUpPressed}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 15}}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('signIn');
          }}>
          <Text style={{color: Colors.primary}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  greeting: {
    fontSize: 40,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.gray[900],
    alignSelf: 'center',
  },
  inputWrapper: {
    padding: 10,
    margin: '1%',
    width: width * 0.95,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 15,
  },
  inputContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.gray[100],
    backgroundColor: Colors.gray[100],
    width: '100%',
  },
  txtInput: {
    backgroundColor: Colors.gray[100],
    width: 300,
    height: 45,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
});
