import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../theme/Colors';
import { CustomButton } from '../../../components';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <View>
        <Image 
          source={require('../../../assets/images/profile.png')}
          style={styles.profileImage}
          resizeMode='contain'
        />
        <Text style={styles.username}>Husam Al-Tahrawi</Text>
        <Text style={styles.email}>h.tahrawi01@gmail.com</Text>
      </View>
      <CustomButton 
        title="Log out"
        type='SECONDARY'
        />
    </SafeAreaView>
  );
}

export default ProfileScreen

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
    alignSelf: 'center'
  },
  username:{
    marginTop: 20,
    fontSize: 32,
    fontWeight: '900',
    color: Colors.white,
    textAlign: 'center'
  },
  email:{
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  }
});