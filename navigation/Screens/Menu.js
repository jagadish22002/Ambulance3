// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <Text>Home</Text>
//       <StatusBar style="auto" />
//       <Button title="Settings"/>
//       <Button title="About"/>
//       <Button title="Details"/>
//       <Button title="security"/>
//       <Button title="wallet"/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import profile from '../assets/profile.png';
import help from '../assets/Vector.png';

const Menu = () => {
  const navigation = useNavigation();

  const goToWallet = () => {
    navigation.navigate('Wallet');
  };

  const goToRideHistory = () => {
    navigation.navigate('RideHistory');
  };

  const goToPayments = () => {
    navigation.navigate('Payments');
  };

  const goToSetting = () => {
    navigation.navigate('Settings');
  };

  const logout = () => {
    // Perform logout actions
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Profile Section */}
        <View style={styles.profile}>
          <TouchableOpacity style={styles.profile}>
            <Image source={profile} style={styles.profileImage}/>
            <View>
              <Text style={[styles.text, styles.username]}>John Doe</Text>
              <Text style={[styles.text, styles.number]}>652405094</Text>
            </View>
            <Icon1 name="arrow-right" size={25} style={styles.hicon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menuoption}>
        <TouchableOpacity style={styles.menuItem} onPress={goToWallet}>
          <Icon2 name="wallet" size={25} style={styles.icon} />
          <Text style={[styles.menutext]}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToRideHistory}>
          <Icon name="history" size={25} style={styles.icon} />
          <Text style={[styles.menutext]}> Ride history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToPayments}>
          <Icon name="money" size={24} style={styles.icon} />
          <Text style={[styles.menutext]}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToSetting}>
         <Image source={help} style={styles.helpicon}></Image>
          <Text style={[styles.menutext]}>   Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToSetting}>
          <Icon name="cog" size={26} style={styles.icon} />
          <Text style={[styles.menutext]}> Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutbutton} onPress={logout}>
          <Icon name="sign-out" size={30} style={styles.signouticon} />
          <Text style={[styles.logouttext]}> Logout</Text>
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
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    height: 90,
    justifyContent: 'center',
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
    marginTop: 50,
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

export default Menu;
