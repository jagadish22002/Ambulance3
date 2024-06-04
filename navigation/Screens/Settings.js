// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Settings() {
//   return (
//     <View style={styles.container}>
//       <Text>Settings</Text>
//       <StatusBar style="auto" />
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
// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Foundation';
import Icon5 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import terms from '../assets/terms.png'

const Settings = () => {
  const navigation = useNavigation();

  const goToSecurity = () => {
    navigation.navigate('Security');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>General</Text>
      <TouchableOpacity style={styles.settingItem}>
        <Icon5 name="language" size={23} style={styles.icon} />
        <Text style={styles.text}>Languages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Icon name="bell" size={23} style={styles.icon} />
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Icon1 name="key" size={23} style={styles.icon} />
        <Text style={styles.text}>App permissions</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Security</Text>
      <TouchableOpacity style={styles.settingItem} onPress={goToSecurity}>
        <Icon3 name="security" size={23} style={styles.icon} />
        <Text style={styles.text}>Security & Privacy</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Others</Text>
      <TouchableOpacity style={styles.settingItem}>
        <Image source={terms}></Image>
        
        <Text style={styles.text}>  Terms & conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Icon2 name="user-group" size={23} style={styles.icon} />
        <Text style={styles.text}>About us</Text>
      </TouchableOpacity>
      <View style={styles.appv}>
        <Text>App Version</Text>
        <Text>1.01</Text>
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  appv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    marginRight: 10,
    height: 23, // Fixed height for icon container
    width: 30, // Fixed width for icon container
  },
  text: {
    fontSize: 16,
    flex: 1, // Allow text to take remaining space
  },
});

export default Settings;
