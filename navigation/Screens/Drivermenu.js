import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import profile from '../assets/profile.png';
import help from '../assets/Vector.png';
import { useNavigation } from '@react-navigation/native';

const Drivermenu = () => {
  const logout = () => {
    // Perform logout actions
  };
 
    const navigation = useNavigation();
  
    const gotoperformance = () => {
      navigation.navigate('Performance');
    };
    const gotoearnings = () => {
      navigation.navigate('Earnings/Reedem');
    };
    const gotoincentives =() =>{
      navigation.navigate('Incentives');
    };
    const goToSetting = () => {
      navigation.navigate('Settings');
    };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.header}>
        {/* Profile Section */}
        <View style={styles.profile}>
          <Image source={profile} style={styles.profileImage} />
          <View>
            <Text style={[styles.text, styles.username]}>John Doe</Text>
            <Text style={[styles.text, styles.number]}>652405094</Text>
          </View>
          <Icon1 name="arrow-right" size={25} style={styles.hicon} />
        </View>
      </TouchableOpacity>

      {/* Menu Options */}
      <View style={styles.menuoption}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon2 name="circle-user" size={25} style={styles.icon} />
          <Text style={[styles.menutext]}>Account information </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={gotoearnings}>
          <Icon2 name="wallet" size={25} style={styles.icon} />
          <Text style={[styles.menutext]}>Earnings/Reedem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={gotoincentives}>
          <Icon2 name="gift" size={25} style={styles.icon} />
          <Text style={[styles.menutext]}>Incentives</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={gotoperformance}>
          <Icon3 name="graph" size={24} style={styles.icon} />
          <Text style={[styles.menutext]}>Performance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon4 name="security" size={24} style={styles.icon} />
          <Text style={[styles.menutext]}>Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={help} style={styles.helpicon} />
          <Text style={[styles.menutext]}>  Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToSetting}>
          <Icon name="cog" size={26} style={styles.icon} />
          <Text style={[styles.menutext]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutbutton} onPress={logout}>
          <Icon name="sign-out" size={30} style={styles.signouticon} />
          <Text style={[styles.logouttext]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    borderRadius: 10,
    height: 90,
    justifyContent: 'center',
    backgroundColor: 'blue',
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  menutext: {
    fontSize: 16,
    width: '80%',
    paddingLeft: 1,
  },
  username: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 1,
  },
  menuoption: {
    padding: 10,
    justifyContent: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
  },
  hicon: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
  },
  icon: {
    marginRight: 10,
  },
  helpicon: {
    height: 25,
    width: 25,
  },
  signouticon: {
    color: 'red',
  },
  number: {
    marginTop: 5,
  },
  logoutbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 80,
  },
  logouttext: {
    fontSize: 18,
  },
});

export default Drivermenu;
