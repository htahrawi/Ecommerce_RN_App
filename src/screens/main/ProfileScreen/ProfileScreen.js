import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../../theme/Colors';
import {CustomButton} from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = props => {
  const [user, setUser] = useState(''); // INCLUDE USERNAME AND TOKEN
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        setUser(JSON.parse(user));
      }
      if (!user) {
        console.log('user not founds');
      }
    });
  }, []);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/users')
      .then(response => {
        let users = response.data;
        // console.log("ALL USERS ARE  :  ",users);
        users.forEach(item => {
          if (item.username == user.username) {
            // console.log(item.id, item.username, 'IS EQUAL', user.username);
            setEmail(item.email);
            let name = item.name.firstname + ' ' + item.name.lastname;
            setFullName(name);
          }
        });
      })
      .catch(error => {
        console.log('Error Fetching Users: ', error);
      });
  }, [user]);

  // console.log('user', user);

  const onLogoutPressed = () => {
    AsyncStorage.clear()
      .then(() => {
        props.navigation.navigate('signIn');
      })
      .catch(() => {
        Alert.alert('Failed Logout', 'please try again');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      {fullName ? (
        <>
          <View>
            <Image
              source={require('../../../assets/images/profile.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <Text style={styles.username}>{fullName}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <CustomButton
            title="Log out"
            type="SECONDARY"
            onPress={onLogoutPressed}
          />
        </>
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  username: {
    marginTop: 20,
    fontSize: 42,
    fontWeight: '900',
    color: Colors.white,
    textAlign: 'center',
  },
  email: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
